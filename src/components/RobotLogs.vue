<template>
  <div style="overflow-y: auto">
    <pre class="bg-black text-white q-pa-md"
         :style="{whiteSpace: singleLine ? 'pre-wrap' : undefined}">{{ singleLine ? lastLine : logs}}</pre>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {io, Socket} from "socket.io-client";
import { TradeBot } from "src/models";

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
  computed:{
    lastLine(){
      return this.logs.split('\n').slice(-2)[0]
    }
  },
  mounted(){
    const wsUrl = `${this.robot.url}`
    this.connection = io(wsUrl)

    this.connection.on('log', (event) => {
      this.logs += event + '\n'
    })

    this.connection.on('disconnect', (event) => {
      this.logs += this.robot.name + ' was disconnected: ' + event + '\n'
    })
  },
  beforeUnmount() {
    this.connection?.close()
  }
})
</script>

<style scoped>

</style>
