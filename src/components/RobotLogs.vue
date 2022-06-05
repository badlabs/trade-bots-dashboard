<template>
  <div style="overflow-y: auto">
    <pre class="bg-black text-white q-pa-md"
         style="overflow-wrap: break-word; max-width: 100%"
         :style="{whiteSpace: singleLine ? 'pre-wrap' : 'pre-line'}"
         v-html="singleLine ? lastLine : logs"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {io, Socket} from "socket.io-client";
import { TradeBot } from "src/models";
import {mapActions} from "pinia";
import {useRobotsStore} from "stores/robots.store";

export default defineComponent({
  name: "RobotLogs",
  props: {
    robot: {
      type: TradeBot,
      required: true
    },
    singleLine: {
      type: Boolean,
      required: false
    }
  },
  data(){
    return {
      connection: null as Socket | null,
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
    lastLine(){
      return this.logs.split('\n').slice(-2)[0]
    }
  },
  mounted(){
    const wsUrl = `${this.robot.url}`
    this.connection = io(wsUrl, {  extraHeaders: this.robot.authHeader })

    this.connection.on('log', (event) => {
      this.logs += this.highlightSyntax(event) + '\n'
    })

    this.connection.on('connect', () => {
      this.updateRobotStatus(this.robot)
    })

    this.connection.on('connect_error', () => {
      this.updateRobotStatus(this.robot)
    })

    this.connection.on('disconnect', (event) => {
      this.logs += this.robot.name + ' was disconnected: ' + event + '\n'
      this.updateRobotStatus(this.robot)
    })
  },
  beforeUnmount() {
    this.connection?.close()
  }
})
</script>

<style scoped>

</style>
