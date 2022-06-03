<template>
  <q-dialog v-model="show" persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down" >
    <q-card style="min-width: 400px" class="bg-black text-white">
      <q-bar class="bg-primary">
        Logs {{robot.name}}
        <q-space />

        <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
          <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
          <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
        </q-btn>
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <RobotLogs style="max-width: 600px; max-height: 400px;" :robot="robot" />
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
      show: false,
      maximizedToggle: true
    }
  }
})
</script>

<style scoped>

</style>
