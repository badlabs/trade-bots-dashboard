<template>
  <q-dialog v-model="show" persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down" >
    <q-card :style="{ maxHeight: maximizedToggle ? undefined : '50vh' }"  class="bg-black text-white">
      <q-bar class="bg-primary">
        <q-icon name="notes" /> Logs {{robot ? robot.name : ''}}
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
      <div :style="{maxHeight: maximizedToggle ? 'calc(100vh - 32px)' : 'calc(50vh - 32px)'} " style="overflow-y: auto">
        <RobotLogs :robot="robot" />
      </div>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" color="primary" >
    <q-icon name="notes" /> {{robot ? '' : 'United'}} Logs
  </q-btn>
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
      required: false
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
