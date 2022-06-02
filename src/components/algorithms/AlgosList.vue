<template>
  <q-card class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <q-card-section class="text-h3">
      Algorithms
    </q-card-section>
    <q-list
      style="max-height: 300px; overflow-y: auto"
      separator>
      <AlgorithmItem v-for="(algo, index) in algorithms" :key="index"
                     :robot="robot" :algorithm="algo" dense/>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AlgoInput, TradeBot} from "src/models";
import {Algorithm} from "@badlabs/trade-bot__db-types";
import AlgorithmItem from "components/algorithms/AlgorithmItem.vue";

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
  },
  components: {
    AlgorithmItem
  }
})
</script>

<style scoped>

</style>
