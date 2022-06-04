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
          <q-btn color="primary" :to="`/robots/${robot.name}/algorithms/${algorithm.name}`" label="Runs" />
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

export default defineComponent({
  name: "AlgorithmItem",
  props: {
    algorithm: {
      type: Object as () => Algorithm,
      required: true
    },
    robot: {
      type: TradeBot,
      required: true
    }
  },
  components: { RunAlgoModal },
  computed: {
    inputs(): AlgoInput {
      return this.getAlgorithmInputsTypes(this.algorithm)
    }
  },
  methods: {
    ...mapActions(useAlgorithmsStore, ["getAlgorithmInputsTypes"])
  }
})
</script>

<style scoped>
</style>
