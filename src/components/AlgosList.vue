<template>
  <q-card class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <q-card-section class="text-h3">
      Algorithms
    </q-card-section>
    <q-list
      style="max-height: 300px; overflow-y: auto"
      separator>
      <q-item
        v-for="(algo, index) in algorithms" :key="index"
        dense>
        <q-item-section class="q-pa-sm q-my-sm">
          <q-card class="my-card" style="max-height: 300px;">
            <q-card-section class="text-h5">Algorithm {{algo.name}}</q-card-section>
            <q-list separator class="bg-white">
              <q-item v-for="input in inputsForAlgorithm(algo)" :key="input.name">
                <q-item-section>{{input.name}}</q-item-section>
                <q-item-label>
                  <q-chip>
                    <code>{{input.type}}</code>
                  </q-chip>
                </q-item-label>
              </q-item>
            </q-list>
            <q-card-actions align="right">
              <RunAlgoModal :robot="robot" :algorithm="algo" />
            </q-card-actions>
          </q-card>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AlgoInput, TradeBot} from "src/models";
import RunAlgoModal from "components/RunAlgoModal.vue";
import {Algorithm} from "@badlabs/trade-bot__db-types";

export default defineComponent({
  name: "AlgosList",
  props: {
    algorithms: {
      type: Array as () => Algorithm[],
      required: true
    },
    robot: {
      type: TradeBot,
      required: true
    }
  },
  methods: {
    inputsForAlgorithm(algorithm: Algorithm): AlgoInput {
      return JSON.parse(algorithm.input_types)
    }
  },
  components: {
    RunAlgoModal
  }
})
</script>

<style scoped>

</style>
