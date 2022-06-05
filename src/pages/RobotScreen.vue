<template>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-ma-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Robots" icon="widgets" to="/robots" />
      <q-breadcrumbs-el :label="robot.name" icon="precision_manufacturing" class="text-primary" />
    </q-breadcrumbs>
    <div class="row justify-between">
      <h4><RobotAvatar :name="robot.name" /> Robot <code>{{robot.name}}</code> </h4>
    </div>
    <q-btn-group>
      <RobotLogsModal :robot="robot" />
      <q-btn :to="`/robots/${robot.name}/orders`" color="primary" >
        <q-icon name="list_alt" /> Orders
      </q-btn>
      <q-btn :to="`/robots/${robot.name}/operations`" color="primary" >
        <q-icon name="pending_actions" /> Operations
      </q-btn>
    </q-btn-group>
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
