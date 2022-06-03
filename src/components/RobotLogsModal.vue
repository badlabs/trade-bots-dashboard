<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-card-section>
        Logs {{robot.name}}
      </q-card-section>
      <RobotLogs style="max-width: 600px; max-height: 400px;" :robot="robot" />
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
import RobotLogs from "components/RobotLogs.vue";

export default defineComponent({
  name: "RobotLogsModal",
  components: {RobotLogs},

  props: {
    robot: {
      type: TradeBot,
      required: true
    }
  },
  data(){
    return {
      show: false
    }
  }
})
</script>

<style scoped>

</style>
