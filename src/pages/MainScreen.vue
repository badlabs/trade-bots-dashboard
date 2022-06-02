<template>
  <!-- Nav Buttons -->
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/robots" label="Robots"/>
      <q-btn color="primary" href="#/algorithms" label="Algorithms"/>
    </div>
  </div>

  <!-- Connected Robots -->
  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <div style="text-align: center; font-size: 16px; font-weight: bold">Connected robots: Info</div>
      <q-list separator class="connected-robots__items q-my-md">
          <q-item v-for="(robot, index) in robots" :key="index">
            <q-item-section>{{ robot.name }}</q-item-section>
            <q-item-section>{{ robot.algorithm || 'used algorithm' }}</q-item-section>
            <q-item-section>
              <div>
                <q-chip color="primary" dense dark>
                  {{ robot.status || 'active'}}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
      </q-list>
    <div>
      <q-btn color="primary" href="#/robots" label="More" style="font-size: 12px"/>
    </div>
  </div>

  <!-- Total Currencies -->
  <PortfolioStatistics :portfolio="unitedPortfolioStatistics.unitedPortfolio"/>

  <!-- Algorithm -->
  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <q-list
      style="max-height: 300px; overflow-y: auto"
      separator>
      <q-item
        v-for="(algo, index) in algos" :key="index"
        dense>
        <q-item-section class="q-pa-sm q-my-sm">
          <q-card class="my-card" style="max-height: 300px;">
            <q-card-section>
              Algorithm 1234
            </q-card-section>
            <div class="q-pa-md">

            </div>
          </q-card>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRobotsStore} from "stores/robots.store";
import {useRobotStatisticsActions} from "stores/robot-statistics.actions";
import {mapState, mapActions} from "pinia";
import {D_PortfolioPosition} from "src/models";
import PortfolioStatistics from "components/PortfolioStatistics.vue";
import { PortfolioPosition } from "@badlabs/trade-bot__db-types";

export default defineComponent({
  name: "MainScreen",
  data(){
    return{
      algos: [1,2,3,4,5],
      securities: [1,2,3,4,5],
      unitedPortfolioStatistics: {
        unitedPortfolio: [] as PortfolioPosition[],
        unitedPortfolioStatistics: {
          buyPriceAll: 0, priceAll: 0,
          growth: false,
          diffAbs: 0,
          diffPer: 0
        }
      }
    }
  },
  components: {
    PortfolioStatistics
  },
  methods: {
    ...mapActions(useRobotStatisticsActions, ['getUnitePortfolioStatistics', 'getPositionStatistics'])
  },
  computed: {
    ...mapState(useRobotsStore, ['robots'])
  },
  async created(){
    this.unitedPortfolioStatistics = await this.getUnitePortfolioStatistics()
  }

})
</script>

<style scoped>
  .connected-robots__items {
    max-height: 150px;
    overflow-y: auto;
    background-color: white;
  }
  .connected-robots__item {
    border-bottom: 1px #212121 solid;
  }
</style>
