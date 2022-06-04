<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" to="/robots" label="< Robots"/>
      <q-btn color="primary" :to="`/robots/${robot.name}`" :label="`< Robot ${robot.name}`"/>
    </div>
    <div class="row justify-between">
      <h4>Robot <code>{{robot.name}}</code> : Algorithm <code>{{algorithm.name}}</code></h4>
    </div>
    <section class="row q-mx-md">
      <div class="q-mr-lg" style="min-width: 200px">
        <span class="text-h6">Description</span>
        <p v-for="(line, index) in algorithm.description.split('\n')" :key="index">
          {{line}}
        </p>
      </div>
      <div>
        <span class="text-h6">Input Types</span>
        <pre>{{JSON.stringify(JSON.parse(algorithm.input_types), null, 2)}}</pre>
      </div>
    </section>
    <section>
      <q-table
        :rows="algorithmRuns"
        :columns="columns"
        row-key="id"
        :loading="loading">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
            <q-th auto-width />
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn size="sm" color="accent" round dense
                     @click="props.expand = !props.expand"
                     :icon="props.expand ? 'remove' : 'add'" />
            </q-td>

            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.value }}
            </q-td>
            <q-td auto-width>
              <q-btn v-if="props.row.status === 'stopped'"
                     size="sm" color="positive" dense
                     @click="continueAlgo(props.row, props)"
                     label="Continue" />
              <q-btn v-if="props.row.status === 'running' || props.row.status === 'continued'"
                     size="sm" color="negative" dense
                     @click="stopAlgo(props.row, props)"
                     label="Stop" />
            </q-td>
            <q-inner-loading :showing="props.loading">
              <q-spinner-ball size="1em" color="primary" />
            </q-inner-loading>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="3" class="content-start">
              <div class="full-height">
                <div class="text-h6">Inputs</div>
                <pre>{{ JSON.stringify(JSON.parse(props.row.inputs), null, 2) }}</pre>
              </div>
            </q-td>
            <q-td colspan="3">
              <div class="full-height">
                <div class="text-h6">State</div>
                <pre>{{ JSON.stringify(JSON.parse(props.row.state), null, 2) }}</pre>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {algorithmFromRoute, robotFromRoute} from "src/mixins";
import {AlgorithmRun} from "@badlabs/trade-bot__db-types";
import {mapActions} from "pinia";
import {useAlgorithmsStore} from "stores/algorithms.store";

export default defineComponent({
  name: "AlgorithmRunsScreen",
  data(){
    return{
      algorithmRuns: [] as AlgorithmRun[],
      loading: false,
      columns: [
        { name: 'id', sortable: true, label: 'id', field: (item: AlgorithmRun) => item.id },
        { name: 'status', label: 'status', field: (item: AlgorithmRun) => item.status },
        { name: 'updated',sortable: true, sortOrder: 'da', label: 'updated', field: (item: AlgorithmRun) => item.updated_at },
        { name: 'started',sortable: true, sortOrder: 'da', label: 'started', field: (item: AlgorithmRun) => item.created_at },
      ]
    }
  },
  mixins: [ robotFromRoute, algorithmFromRoute ],
  methods: {
    ...mapActions(useAlgorithmsStore, ["getAlgorithmRuns", "stopAlgorithm", "continueAlgorithm"]),
    async fetch(){
      this.loading = true
      try {
        this.algorithmRuns = await this.getAlgorithmRuns(this.robot, this.algorithm.name)
      } catch (e) {
        this.algorithmRuns = []
      }
      this.loading = false
    },
    async stopAlgo(run: AlgorithmRun, props: any) {
      props.loading = true
      try {
        const updatedRun = await this.stopAlgorithm(this.robot, run.algorithm_name, run.id)
        this.updateRun(updatedRun)
      } catch (e) {}
      props.loading = false
    },
    async continueAlgo(run: AlgorithmRun, props: any) {
      props.loading = true
      try {
        const updatedRun = await this.continueAlgorithm(this.robot, run.algorithm_name, run.id)
        this.updateRun(updatedRun)
      } catch (e) {}
      props.loading = false
    },
    updateRun(updatedRun: AlgorithmRun){
      const runIndex = this.algorithmRuns.findIndex(r => r.id === updatedRun.id)
      if (runIndex > -1)
      this.algorithmRuns[runIndex] = updatedRun
    }
  },
  async mounted() {
    await this.fetch()
  }
})
</script>

<style scoped>
</style>
