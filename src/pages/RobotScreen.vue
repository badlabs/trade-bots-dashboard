<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/robots" label="< Robots"/>
    </div>
    <div class="row justify-between">
      <h4>Robot {{robot.name}}</h4>
    </div>
    <PortfolioStatistics :portfolio="portfolio" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRobotsStore} from "stores/robots.store";
import {useRobotActions} from "stores/robot.actions";
import {mapActions, mapState} from "pinia";
import {D_PortfolioPosition, TradeBot} from "src/models";
import PortfolioStatistics from "components/PortfolioStatistics.vue";

export default defineComponent({
  name: "RobotScreen",
  components: {
    PortfolioStatistics
  },
  data() {
    return {
      portfolio: [] as D_PortfolioPosition[]
    }
  },
  computed: {
    ...mapState(useRobotsStore, ['robots']),
    robot(){
      // @ts-ignore
      const robot = this.robots.find((r: TradeBot) => r.name === this.$route.params.robot)
      if (!robot) {
        this.$router.push('/')
        return new TradeBot({name: '', host: '', restPort: 0, wsPort: 0, token: ''})
      }
      return robot
    }
  },
  methods: {
    ...mapActions(useRobotActions, ['getPortfolio']),
    async updateRobotData(){
      this.portfolio = await this.getPortfolio(this.robot)
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
