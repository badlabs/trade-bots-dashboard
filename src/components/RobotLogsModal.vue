<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-card-section>
        Logs {{robot.name}}
      </q-card-section>
      <code>
        <pre class="bg-black text-white q-pa-md" style="max-width: 600px; max-height: 400px; overflow: auto">{{logs}}</pre>
      </code>
      <q-card-actions align="right">
        <q-btn color="red" @click="show = !show" >Close</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" color="primary" >Logs</q-btn>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {TradeBot} from "src/models";
import {io, Socket} from "socket.io-client"

export default defineComponent({
  name: "RobotLogsModal",
  props: {
    robot: {
      type: TradeBot,
      required: true
    }
  },
  data(){
    return {
      show: false,
      connection: null as Socket | null,
      logs: ''
    }
  },
  created(){
    const wsUrl = `${this.robot.url}`
    this.connection = io(wsUrl)

    this.connection.on('log', (event) => {
      console.log(event)
      this.logs += event + '\n'
    })
  },
  beforeDestroy() {
    this.connection?.close()
  }
})
</script>

<style scoped>

</style>
