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
    <q-card v-for="(robot, index) in robotsStore.robots" :key="index" style="max-width: 600px" class="q-mx-auto">
      <q-card-section>
        <div class="row justify-between">
          <div class="text-h6">{{robot.name}}</div>
          <q-chip dense dark color="blue">active</q-chip>
        </div>

        {{robot.statistics.portfolio}}

        <div>
          <q-item-label caption style="font-size: 16px; font-weight: bold">{{robot.statistics.portfolio.priceAll}} $</q-item-label>
          <q-item-label caption
                        :class="`text-${robot.statistics.portfolio.growth ? 'green' : 'red'}`"
                        style="font-size: 14px">
            ↓{{robot.statistics.portfolio.diffAbs}} $ ({{robot.statistics.portfolio.diffPer}} %)
          </q-item-label>
        </div>

      </q-card-section>

      <q-card-section>
        For logs
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="blue" dark>
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import ConnectRobotModal from "components/ConnectRobotModal.vue";
import { defineComponent } from 'vue'
import { useRobotsStore } from "stores/robots.store";

export default defineComponent({
  name: "RobotsListScreen",
  setup(){
    return {
      robotsStore: useRobotsStore()
    }
  },
  components: {
    ConnectRobotModal
  }
})
</script>

<style scoped>

</style>
