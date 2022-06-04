<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" to="/robots" label="< Robots"/>
    </div>
    <div class="row justify-between">
      <h4><RobotAvatar :name="robot.name" /> Robot <code>{{robot.name}}</code> </h4>
      <div>
        <RobotLogsModal :robot="robot" />
      </div>
    </div>
    <PortfolioStatistics :robot="robot" />
    <AlgosList :robot="robot" />
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
import {useAlgorithmsStore} from "stores/algorithms.store";
import {usePortfolioActions} from "stores/portfolio.actions";
import {robotFromRoute} from "src/mixins";
import RobotAvatar from "components/RobotAvatar.vue";

export default defineComponent({
  name: "RobotScreen",
  components: {
    RobotAvatar,
    PortfolioStatistics, AlgosList, RobotLogsModal
  },
  data() {
    return {

    }
  },
  mixins: [ robotFromRoute ],
  methods: {
    ...mapActions(useAlgorithmsStore, ['getAlgorithms']),
    async updateRobotData(){
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
