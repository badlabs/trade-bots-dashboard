<template>
  <!-- Nav Buttons -->
  <div class="q-pa-md">
    <q-breadcrumbs class="text-primary q-ma-md" active-color="white">
      <q-breadcrumbs-el  label="Main" icon="home" class="text-primary" />
    </q-breadcrumbs>
    <q-btn-group spread>
      <q-btn icon="widgets" color="primary" to="/robots" label="Robots"/>
      <ConnectRobotModal v-if="!robots.length" @addRobot="showSpinner = true" @robotAdded="showSpinner = false" />
      <ImportRobotsModal v-if="!robots.length" @addRobots="showSpinner = true" @robotsAdded="showSpinner = false" />
      <RobotLogsModal />
<!--      <q-btn icon="format_list_numbered" color="primary" to="/algorithms" label="Algorithms"/>-->
    </q-btn-group>
    <div v-if="showSpinner && !robots.length " class="row justify-center q-pa-lg ">
      <q-spinner-ball size="200px" color="primary" />
    </div>

    <!-- Connected Robots -->
    <div v-if="robots.length" class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
      <div style="text-align: center; font-size: 16px; font-weight: bold">Connected robots: Info</div>
        <q-list separator class="connected-robots__items q-my-md rounded-borders">
            <q-item v-for="(robot, index) in robots" :key="index" :to="`/robots/${robot.name}`">
              <q-item-section>
                <div class="text-bold">
                  <RobotAvatar :name="robot.name" class="q-mr-md" /> {{ robot.name }}
                </div>
              </q-item-section>
              <q-item-section>{{ robot.algorithm || 'used algorithm' }}</q-item-section>
              <q-item-section>
                <div>
                  <RobotStatus :robot="robot" />
                </div>
              </q-item-section>
            </q-item>
        </q-list>
      <div>
        <q-btn color="primary" to="/robots" label="More" style="font-size: 12px"/>
      </div>
    </div>

    <!-- Total Currencies -->
    <PortfolioView v-if="robots.length">
      United Portfolio
    </PortfolioView>

    <!-- Algorithm -->
    <AlgorithmsList v-if="robots.length" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRobotsStore} from "stores/robots.store";
import {mapState, mapActions} from "pinia";
import PortfolioView from "components/portfolio/PortfolioView.vue";
import {CurrencyBalance, PortfolioPosition} from "@badlabs/trade-bot__db-types";
import RobotAvatar from "components/robot/RobotAvatar.vue";
import ConnectRobotModal from "components/ConnectRobotModal.vue";
import RobotStatus from "components/robot/RobotStatus.vue";
import AlgorithmsList from "components/algorithms/AlgorithmsList.vue";
import RobotLogsModal from "components/RobotLogsModal.vue";
import ImportRobotsModal from "components/ImportRobotsModal.vue";

export default defineComponent({
  name: "MainScreen",
  data(){
    return{
      showSpinner: false,
      unitedPortfolio: [] as PortfolioPosition[],
      unitedBalance: [] as CurrencyBalance[]
    }
  },
  components: {
    ImportRobotsModal,
    RobotLogsModal,
    AlgorithmsList,
    RobotAvatar,
    PortfolioView,
    ConnectRobotModal,
    RobotStatus
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
