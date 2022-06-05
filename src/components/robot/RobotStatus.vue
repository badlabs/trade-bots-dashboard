<template>
  <q-chip dark :dense="dense" :color="color">{{robot.status}}</q-chip>
</template>

<script lang="ts">
import { TradeBot } from "src/models";
import {defineComponent} from "vue";

export default defineComponent({
  name: "RobotStatus",
  props: {
    robot: {
      type: TradeBot,
      required: true
    },
    dense: Boolean
  },
  computed: {
    color(){
      switch (this.robot.status) {
        case "Active": return 'positive'
        case "Disconnected": return 'negative'
        case "Not Authorized": return 'warning'
        default: return 'primary'
      }
    }
  }
})
</script>

<style scoped>

</style>
