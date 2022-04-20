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
    <q-card v-for="(robotState, index) in localRobotsState" :key="index" style="max-width: 600px" class="q-mx-auto">
      <q-card-section>
        <div class="row justify-between">
          <div class="text-h6">{{robotState.robot.name}}</div>
          <q-chip dense dark color="blue">active</q-chip>
        </div>

        {{getPortfolioStatistics(robotState.portfolio)}}

        <div>
          <q-item-label caption style="font-size: 16px; font-weight: bold">{{getPortfolioStatistics(robotState.portfolio).priceAll}} $</q-item-label>
          <q-item-label caption
                        :class="`text-${getPortfolioStatistics(robotState.portfolio).growth ? 'green' : 'red'}`"
                        style="font-size: 14px">
            ↓{{getPortfolioStatistics(robotState.portfolio).diffAbs}} $ ({{getPortfolioStatistics(robotState.portfolio).diffPer}} %)
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
import {computed, defineComponent, Ref, ref, toRef, toRefs} from 'vue'
import { useRobotsStore } from "stores/robots.store";
import {D_PortfolioPosition, TradeBot} from "src/models";
import {useSecuritiesStore} from "stores/securities.store";
import {useRobotActions} from "stores/robot.actions";
import { useRobotStatisticsActions } from "src/stores/robot-statistics.actions";

type LocalRobotState = {
  robot: TradeBot,
  portfolio: Ref<D_PortfolioPosition[]>
}

export default defineComponent({
  name: "RobotsListScreen",
  setup(){
    const robotsStore = useRobotsStore()
    const robotsActions = useRobotActions()
    const robotStatisticsActions = useRobotStatisticsActions()
    const securitiesStore = useSecuritiesStore()

    const localRobotsState = computed((): LocalRobotState[] => {
      const robots = robotsStore.robots
      return robots.map(robot => {
        const portfolio: Ref<D_PortfolioPosition[]> = ref([])
        robotsActions.getPortfolio(robot)
          .then((freshPositions) => {
            portfolio.value.push(...freshPositions)
            console.log(portfolio.value)
          })
        return {
          robot: robot,
          portfolio: portfolio
        }
      })
    })

    function getPortfolioStatistics(portfolioRef: Ref<D_PortfolioPosition[]>) {
      return robotStatisticsActions.portfolio(portfolioRef.value)
    }

    return {
      robotsStore,
      securitiesStore,
      localRobotsState,
      getPortfolioStatistics
    }
  },
  components: {
    ConnectRobotModal
  }
})
</script>

<style scoped>

</style>
