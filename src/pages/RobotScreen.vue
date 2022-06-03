<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" to="/robots" label="< Robots"/>
    </div>
    <div class="row justify-between">
      <h4>Robot {{robot.name}}</h4>
      <div>
        <RobotLogsModal :robot="robot" />
      </div>
    </div>
    <PortfolioStatistics :robot="robot" :portfolio="portfolio" :balance="currenciesBalance" />
    <AlgosList :algorithms="algorithms" :robot="robot" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRobotsStore} from "stores/robots.store";
import {useRobotActions} from "stores/robot.actions";
import {mapActions, mapState} from "pinia";
import {TradeBot} from "src/models";
import PortfolioStatistics from "components/portfolio/PortfolioView.vue";
import RobotLogsModal from "components/RobotLogsModal.vue";
import AlgosList from "components/algorithms/AlgosList.vue";
import {Algorithm, CurrencyBalance, PortfolioPosition} from "@badlabs/trade-bot__db-types";
import {useAlgorithmsActions} from "stores/algorithms.actions";
import {usePortfolioActions} from "stores/portfolio.actions";

export default defineComponent({
  name: "RobotScreen",
  components: {
    PortfolioStatistics, AlgosList, RobotLogsModal
  },
  data() {
    return {
      currenciesBalance: [] as CurrencyBalance[],
      portfolio: [] as PortfolioPosition[],
      algorithms: [] as Algorithm[]
    }
  },
  computed: {
    ...mapState(useRobotsStore, ['robots']),
    robot(){
      // @ts-ignore
      const robot = this.robots.find((r: TradeBot) => r.name === this.$route.params.robot)
      if (!robot) {
        this.$router.push('/')
        return new TradeBot({name: '', host: '', port: 0, token: ''})
      }
      return robot
    }
  },
  methods: {
    ...mapActions(usePortfolioActions, ['getPortfolio', "getCurrenciesBalance"]),
    ...mapActions(useAlgorithmsActions, ['getAlgorithms']),
    async updateRobotData(){
      this.currenciesBalance = await this.getCurrenciesBalance(this.robot)
      this.portfolio = await this.getPortfolio(this.robot)
      this.algorithms = await this.getAlgorithms(this.robot)
    }
  },
  watch: {
    robot(){
      this.updateRobotData()
    }
  },
  created(){
    this.updateRobotData()
  }

})
</script>

<style scoped>

</style>
