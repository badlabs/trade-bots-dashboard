<template>
  <!-- Nav Buttons -->
  <div class="q-pa-md">
    <q-breadcrumbs class="text-primary q-ma-md" active-color="white">
      <q-breadcrumbs-el  label="Main" icon="home" class="text-primary" />
    </q-breadcrumbs>
    <q-btn-group spread>
      <q-btn icon="widgets" color="accent" to="/robots" label="Robots"/>
      <ConnectRobotModal v-if="!robots.length" @addRobot="showSpinner = true" @robotAdded="showSpinner = false" />
      <q-btn icon="format_list_numbered" color="accent" to="/algorithms" label="Algorithms"/>
    </q-btn-group>
    <div v-if="showSpinner && !robots.length " class="row justify-center q-pa-lg ">
      <q-spinner-ball size="200px" color="primary" />
    </div>

    <!-- Connected Robots -->
    <div v-if="robots.length" class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
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
    <PortfolioView v-if="robots.length">
      United Portfolio
    </PortfolioView>

    <!-- Algorithm -->
    <div v-if="robots.length" class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
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
import ConnectRobotModal from "components/ConnectRobotModal.vue";

export default defineComponent({
  name: "MainScreen",
  data(){
    return{
      algos: [1,2,3,4,5],
      securities: [1,2,3,4,5],
      showSpinner: false,
      unitedPortfolio: [] as PortfolioPosition[],
      unitedBalance: [] as CurrencyBalance[]
    }
  },
  components: {
    RobotAvatar,
    PortfolioView,
    ConnectRobotModal
  },
  methods: {
  },
  computed: {
    ...mapState(useRobotsStore, ['robots'])
  },

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
