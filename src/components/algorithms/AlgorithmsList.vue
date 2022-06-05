<template>
  <q-card class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <q-card-section class="text-h3">
      Algorithms
    </q-card-section>
    <q-list
      style="max-height: 70vh; overflow-y: auto"
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
import {mapActions, mapState} from "pinia";
import {useAlgorithmsStore} from "stores/algorithms.store";

export default defineComponent({
  name: "AlgorithmsList",
  props: {
    robot: {
      type: TradeBot,
      required: false
    }
  },
  data(){
    return {
      localAlgorithms: [] as Algorithm[],
      loading: false
    }
  },
  computed:{
    ...mapState(useAlgorithmsStore, { globalAlgorithms: "algorithms" }),
    algorithms(): Algorithm[]{
      if (this.robot) return this.localAlgorithms
      return this.globalAlgorithms.map(a => a.algorithm)
    }
  },
  methods: {
    ...mapActions(useAlgorithmsStore, ['getAlgorithms']),
    async fetch(){
      this.loading = true
      try {
        if (this.robot)
          this.localAlgorithms = await this.getAlgorithms(this.robot)
      }
      catch (e) {
        this.localAlgorithms = []
      }
      this.loading = false
    }
  },
  components: {
    AlgorithmItem
  },
  async mounted() {
    await this.fetch()
  },
  watch: {
    robot(){
      this.fetch()
    }
  }
})
</script>

<style scoped>

</style>
