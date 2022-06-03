<template>
  <!-- Nav Buttons -->
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" to="/robots" label="Robots"/>
      <q-btn color="primary" to="/algorithms" label="Algorithms"/>
    </div>
  </div>

  <!-- Connected Robots -->
  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <div style="text-align: center; font-size: 16px; font-weight: bold">Connected robots: Info</div>
      <q-list separator class="connected-robots__items q-my-md rounded-borders">
          <q-item v-for="(robot, index) in robots" :key="index">
            <q-item-section>
              <div class="text-bold">
                <RobotAvatar :name="robot.name" class="q-mr-md" /> {{ robot.name }}
              </div>
            </q-item-section>
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
  <PortfolioView :portfolio="unitedPortfolio" :balance="unitedBalance" >
    United Portfolio
  </PortfolioView>

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
import {usePortfolioActions} from "stores/portfolio.actions";
import {mapState, mapActions} from "pinia";
import PortfolioView from "components/portfolio/PortfolioView.vue";
import {CurrencyBalance, PortfolioPosition} from "@badlabs/trade-bot__db-types";
import RobotAvatar from "components/RobotAvatar.vue";

export default defineComponent({
  name: "MainScreen",
  data(){
    return{
      algos: [1,2,3,4,5],
      securities: [1,2,3,4,5],
      unitedPortfolio: [] as PortfolioPosition[],
      unitedBalance: [] as CurrencyBalance[]
    }
  },
  components: {
    RobotAvatar,
    PortfolioView
  },
  methods: {
    ...mapActions(usePortfolioActions, ["getUnitedPortfolio", "getUnitedBalance"])
  },
  computed: {
    ...mapState(useRobotsStore, ['robots'])
  },
  async created(){
    this.unitedPortfolio = await this.getUnitedPortfolio()
    this.unitedBalance = await this.getUnitedBalance()
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
