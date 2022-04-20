<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/" label="< Main"/>
    </div>
    <div class="row justify-between">
      <h4>List of Robots</h4>
      <div>
        <ConnectRobotModal />
      </div>
    </div>
    <RobotTile v-for="(robot, index) in robotsStore.robots" :key="index" :robot="robot" />
  </div>
</template>

<script lang="ts">
import ConnectRobotModal from "components/ConnectRobotModal.vue";
import {defineComponent} from 'vue'
import { useRobotsStore } from "stores/robots.store";
import {D_PortfolioPosition, TradeBot} from "src/models";
import RobotTile from "components/robotsList/RobotTile.vue";

export default defineComponent({
  name: "RobotsListScreen",
  setup(){
    const robotsStore = useRobotsStore()
    return {
      robotsStore
    }
  },
  components: {
    ConnectRobotModal, RobotTile
  }
})
</script>

<style scoped>

</style>
