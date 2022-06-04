<template>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-ma-md">
      <q-breadcrumbs-el  label="Main" icon="home" to="/" />
      <q-breadcrumbs-el label="Robots" icon="widgets" class="text-primary" />
    </q-breadcrumbs>
    <div class="row justify-between">
      <span class="text-h4 q-my-md">List of Robots</span>
    </div>
    <ConnectRobotModal @addRobot="showSkeleton = true" @robotAdded="showSkeleton = false" />
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
