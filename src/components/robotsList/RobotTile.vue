<template>
  <q-card style="max-width: 600px" class="q-mx-auto">
    <q-card-section>
      <div class="row justify-between">
        <div class="text-h6"><RobotAvatar :name="robot.name" /> {{robot.name}}</div>
        <q-chip dense dark color="blue">active</q-chip>
      </div>

<!--      <div>-->
<!--        <q-item-label caption style="font-size: 16px; font-weight: bold">{{portfolioStatistics.priceAll}} $</q-item-label>-->
<!--        <q-item-label caption-->
<!--                      :class="`text-${portfolioStatistics.growth ? 'green' : 'red'}`"-->
<!--                      style="font-size: 14px">-->
<!--          {{ portfolioStatistics.growth ? '↑' : '↓' }}{{portfolioStatistics.diffAbs}} $ ({{portfolioStatistics.diffPer}} %)-->
<!--        </q-item-label>-->
<!--      </div>-->

    </q-card-section>

    <q-card-section>
      <RobotLogs class="text-" single-line :robot="robot" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="blue" dark :to="`/robot/${robot.name}`">
        More
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import {TradeBot} from "src/models";
import {defineComponent, ref, Ref} from "vue";
import {mapActions} from "pinia";
import { useRobotActions } from "stores/robot.actions";
import { usePortfolioActions } from "stores/portfolio.actions";
import { PortfolioPosition } from "@badlabs/trade-bot__db-types";
import RobotAvatar from "components/RobotAvatar.vue";
import RobotLogs from "components/RobotLogs.vue";

export default defineComponent({
  name: "RobotTile",
  components: {RobotLogs, RobotAvatar},
  props: {
    robot: {
      type: TradeBot,
      required: true
    }
  },
  data() {
    return {
      portfolio: [] as PortfolioPosition[]
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(usePortfolioActions, ["getPortfolio"]),
    ...mapActions(useRobotActions, ['getSecurities']),
  },
  watch:{
    async robot(robot){
      this.portfolio = await this.getPortfolio(robot)
    }
  },
  async created(){
    await this.getSecurities(this.robot)
    this.portfolio = await this.getPortfolio(this.robot)
  }
})
</script>

<style scoped>

</style>
