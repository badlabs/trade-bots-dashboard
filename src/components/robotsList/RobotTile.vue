<template>
  <q-card style="max-width: 600px" class="q-mx-auto">
    <q-card-section>
      <div class="row justify-between">
        <div class="text-h6">{{robot.name}}</div>
        <q-chip dense dark color="blue">active</q-chip>
      </div>

      <div>
        <q-item-label caption style="font-size: 16px; font-weight: bold">{{portfolioStatistics.priceAll}} $</q-item-label>
        <q-item-label caption
                      :class="`text-${portfolioStatistics.growth ? 'green' : 'red'}`"
                      style="font-size: 14px">
          {{ portfolioStatistics.growth ? '↑' : '↓' }}{{portfolioStatistics.diffAbs}} $ ({{portfolioStatistics.diffPer}} %)
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
</template>

<script lang="ts">
import {D_PortfolioPosition, TradeBot} from "src/models";
import {defineComponent, ref, Ref} from "vue";
import {mapActions} from "pinia";
import { useRobotActions } from "stores/robot.actions";
import { useRobotStatisticsActions } from "src/stores/robot-statistics.actions";

export default defineComponent({
  name: "RobotTile",
  props: {
    robot: {
      type: TradeBot,
      required: true
    }
  },
  data() {
    return {
      portfolio: [] as D_PortfolioPosition[]
    }
  },
  computed: {
    portfolioStatistics(){
      return this.getPortfolioStatistics(this.portfolio)
    }
  },
  methods: {
    ...mapActions(useRobotStatisticsActions, ['getPortfolioStatistics']),
    ...mapActions(useRobotActions, ['updatePortfolio', 'updateSecurities'])
  },
  watch:{
    async robot(robot){
      this.portfolio = await this.updatePortfolio(robot)
    }
  },
  async created(){
    await this.updateSecurities(this.robot)
    this.portfolio = await this.updatePortfolio(this.robot)
  }
})
</script>

<style scoped>

</style>
