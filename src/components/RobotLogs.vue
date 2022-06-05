<template>
  <pre class="bg-black text-white q-pa-md"
       style="overflow-wrap: break-word; max-width: 100%"
       :style="{whiteSpace: singleLine ? 'pre-wrap' : 'pre-line'}"
       v-html="singleLine ? lastLine : logs"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {io, Socket} from "socket.io-client";
import { TradeBot } from "src/models";
import {mapActions, mapState} from "pinia";
import {useRobotsStore} from "stores/robots.store";

export default defineComponent({
  name: "RobotLogs",
  props: {
    robot: {
      type: TradeBot,
      required: false
    },
    singleLine: {
      type: Boolean,
      required: false
    }
  },
  data(){
    return {
      connection: null as Socket | null,
      connections: [] as Socket[],
      logs: ''
    }
  },
  methods: {
    ...mapActions(useRobotsStore, ["updateRobotStatus"]),
    jsonReplacer(str: string): string{
      // TODO: Finish JSON colorizer
      const keyValueRegexp = /("[\w_]*"):(\d+\.?\d*)?(".*")?([]),?/gi
      return str
    },
    highlightSyntax(logsLine: string): string {
      const dateTimeRegexp = /^(\d{2}\.\d{2}\.\d{4},\s\d{2}:\d{2}:\d{2})/gm
      const noteRegexp = /\s(\[[\w_\-]*:\d*])\s/gmi
      const jsonRegexp = /\{(.*)\}/mg;
      return logsLine
        .replace(dateTimeRegexp, '<i class="text-warning" >$1</i>')
        .replace(noteRegexp, '<span class="text-accent" > $1 </span>')
        .replace(jsonRegexp, '<span class="text-secondary" >{$1}</span>')
    }
  },
  computed:{
    ...mapState(useRobotsStore, ["robots"]),
    lastLine(){
      return this.logs.split('\n').slice(-2)[0]
    },
    longestRobotNameLength(){
      return Math.max(...this.robots.map(r => r.name.length))
    }
  },
  created(){
    if (this.robot){
      const wsUrl = `${this.robot.url}`
      this.connection = io(wsUrl, {  extraHeaders: this.robot.authHeader })

      this.connection.on('log', (event) => {
        this.logs += `${this.highlightSyntax(event)}\n`
      })

      this.connection.on('connect', () => {
        if (this.robot)
          this.updateRobotStatus(this.robot)
      })

      this.connection.on('connect_error', () => {
        if (this.robot)
          this.updateRobotStatus(this.robot)
      })

      this.connection.on('disconnect', (event) => {
        if (this.robot){
          this.logs += this.robot.name + ' was disconnected: ' + event + '\n'
          this.updateRobotStatus(this.robot)
        }
      })
    }
    else {
      this.connections = this.robots.map(robot => {
        const wsUrl = `${robot.url}`
        const connection = io(wsUrl, {  extraHeaders: robot.authHeader })

        connection.on('log', (event) => {
          if (event.split('\n').length === 1)
            this.logs += `<i class="text-primary">${robot.name + '&nbsp;'.repeat(this.longestRobotNameLength - robot.name.length)}</i> | ${this.highlightSyntax(event)}\n`
        })

        connection.on('connect', () => {
          this.logs += `<i class="text-primary">${robot.name}</i> connected\n`
          this.updateRobotStatus(robot)
        })

        connection.on('connect_error', () => {
          this.updateRobotStatus(robot)
        })

        connection.on('disconnect', (event) => {
          this.logs += `<i class="text-primary">${robot.name}</i>  was disconnected: ${event}\n`
          this.updateRobotStatus(robot)
        })

        return connection
      })
    }

  },
  beforeUnmount() {
    this.connection?.close()
    this.connections.forEach(c => c.close())
  }
})
</script>

<style scoped>

</style>
