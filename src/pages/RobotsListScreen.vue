<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" to="/" label="< Main"/>
    </div>
    <div class="row justify-between">
      <h4>List of Robots</h4>
      <div>
        <ConnectRobotModal @addRobot="showSkeleton = true" @robotAdded="showSkeleton = false" />
      </div>
    </div>
    <RobotSkeleton v-if="showSkeleton" class="q-my-sm q-mx-auto" />
    <RobotTile v-for="(robot, index) in robots" :key="index" :robot="robot" class="q-my-sm" />
  </div>
</template>

<script lang="ts">
import ConnectRobotModal from "components/ConnectRobotModal.vue";
import {defineComponent} from 'vue'
import { useRobotsStore } from "stores/robots.store";
import {TradeBot} from "src/models";
import RobotTile from "components/robotsList/RobotTile.vue";
import RobotSkeleton from "components/robotsList/RoborSkeleton.vue"
import {mapState} from "pinia";

export default defineComponent({
  name: "RobotsListScreen",
  data(){
    return {
      showSkeleton: false
    }
  },
  computed: {
    ...mapState(useRobotsStore, ["robots"])
  },
  components: {
    ConnectRobotModal, RobotTile, RobotSkeleton
  }
})
</script>

<style scoped>

</style>
