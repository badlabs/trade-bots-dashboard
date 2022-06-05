<template>
  <q-item
    dense>
    <q-item-section class="q-pa-sm q-my-sm">
      <q-card class="my-card">
        <q-card-section class="text-h5">Algorithm <code>{{algorithm.name}}</code> </q-card-section>
        <q-card-section>
          <p v-for="(line, index) in algorithm.description.split('\n')" :key="index">
            {{line}}
          </p>
          <div v-if="!robot">
            Active robots:
            <router-link v-for="robot in activeRobots" :key="robot.name"
                         class="no-text-decoration"
                         :to="`/robots/${robot.name}`">
              <q-chip  square dark color="primary" >
                <RobotAvatar :name="robot.name" /> {{robot.name}}
              </q-chip>
            </router-link>

          </div>
        </q-card-section>
        <q-list separator class="bg-white">
          <q-item v-for="( type, name ) in inputs" :key="name">
            <q-item-section>{{name}}</q-item-section>
            <q-item-label>
              <q-chip class="font-monospace">
                {{type}}
              </q-chip>
            </q-item-label>
          </q-item>
        </q-list>
        <q-card-actions align="right">
          <q-btn v-if="robot" color="primary" :to="`/robots/${robot.name}/algorithms/${algorithm.name}`"
                 label="Runs" icon="playlist_play" />
          <RunAlgoModal :robot="robot" :algorithm="algorithm" />
        </q-card-actions>
      </q-card>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Algorithm} from "@badlabs/trade-bot__db-types";
import {AlgoInput, TradeBot} from "src/models";
import RunAlgoModal from "components/RunAlgoModal.vue";
import {mapActions} from "pinia";
import {useAlgorithmsStore} from "stores/algorithms.store";
import RobotAvatar from "components/robot/RobotAvatar.vue";

export default defineComponent({
  name: "AlgorithmItem",
  props: {
    algorithm: {
      type: Object as () => Algorithm,
      required: true
    },
    robot: {
      type: TradeBot,
      required: false
    }
  },
  components: {RobotAvatar, RunAlgoModal },
  computed: {
    inputs(): AlgoInput {
      return this.getAlgorithmInputsTypes(this.algorithm)
    },
    activeRobots(): TradeBot[] {
      return this.getRobotsByAlgorithm(this.algorithm.name).filter(r => r.status === 'Active')
    }
  },
  methods: {
    ...mapActions(useAlgorithmsStore, ["getAlgorithmInputsTypes", "getRobotsByAlgorithm"])
  }
})
</script>

<style scoped>
.no-text-decoration{
  text-decoration: none;
}
</style>
