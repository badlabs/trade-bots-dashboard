<template>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-ma-md">
      <q-breadcrumbs-el  label="Main" icon="home" to="/" />
      <q-breadcrumbs-el label="Robots" icon="widgets" class="text-primary" />
    </q-breadcrumbs>
    <div class="row justify-between">
      <span class="text-h4 q-my-md">List of Robots</span>
    </div>
    <q-btn-group class="q-mb-lg">
      <ConnectRobotModal @addRobot="showSkeleton = true" @robotAdded="showSkeleton = false" />
      <ImportRobotsModal @addRobots="showSkeleton = true" @robotsAdded="showSkeleton = false" />
      <q-btn @click="exportRobots(this.robots)" color="primary" icon="file_upload" label="Export All Robots" />
    </q-btn-group>
    <RobotSkeleton v-if="showSkeleton" class="q-my-sm q-mx-auto" />
    <RobotTile v-for="(robot, index) in robots" :key="index" :robot="robot" class="q-my-sm" />
  </div>
</template>

<script lang="ts">
import ConnectRobotModal from "components/ConnectRobotModal.vue";
import {defineComponent} from 'vue'
import { useRobotsStore } from "stores/robots.store";
import RobotTile from "components/robotsList/RobotTile.vue";
import RobotSkeleton from "components/robotsList/RoborSkeleton.vue"
import {mapState} from "pinia";
import {exportRobots} from "src/mixins";
import ImportRobotsModal from "components/ImportRobotsModal.vue";

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
  mixins: [ exportRobots ],
  components: {
    ImportRobotsModal,
    ConnectRobotModal, RobotTile, RobotSkeleton
  }
})
</script>

<style scoped>

</style>
