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
    <q-inner-loading :showing="loading">
      <q-spinner-ball size="50px" color="primary"/>
    </q-inner-loading>
  </q-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AlgoInput, TradeBot} from "src/models";
import {Algorithm} from "@badlabs/trade-bot__db-types";
import AlgorithmItem from "components/algorithms/AlgorithmItem.vue";
import {mapActions} from "pinia";
import {useAlgorithmsActions} from "stores/algorithms.actions";

export default defineComponent({
  name: "AlgosList",
  props: {
    robot: {
      type: TradeBot,
      required: true
    }
  },
  data(){
    return {
      algorithms: [] as Algorithm[],
      loading: false
    }
  },
  methods: {
    ...mapActions(useAlgorithmsActions, ['getAlgorithms']),
  },
  components: {
    AlgorithmItem
  },
  async mounted() {
    this.loading = true
    this.algorithms = await this.getAlgorithms(this.robot)
    this.loading = false
  }
})
</script>

<style scoped>

</style>
