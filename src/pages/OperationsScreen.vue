<template>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-ma-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Robots" icon="widgets" to="/robots" />
      <q-breadcrumbs-el :label="robot.name" icon="precision_manufacturing" :to="`/robots/${robot.name}`" />
      <q-breadcrumbs-el label="Operations" icon="pending_actions" class="text-primary" />
    </q-breadcrumbs>
    <q-card class="q-mb-lg">
      <q-card-section class="text-h6">
        Filters
      </q-card-section>
      <q-card-section class="row">
        <div class="q-mr-sm full-width col-sm">
          <q-date v-model="date" range today-btn subtitle="Time range" />
        </div>

        <div class="full-width col-sm">
          <q-input v-model="securityTicker" label="Security Ticker" />
          <q-input v-model="operationType" label="Operation" />
        </div>
      </q-card-section>
      <q-card-section>
        <q-space/>
        <q-btn-group>
          <q-btn color="primary" @click="fetch()" :loading="loading"><q-icon name="refresh" />Refresh</q-btn>
          <q-btn color="secondary" @click="updateOperationsLocal()" :loading="updateLoading">
            <q-icon name="system_update_alt" /> Parse</q-btn>
        </q-btn-group>
      </q-card-section>
    </q-card>
    <q-table
      :rows="operations"
      row-key="created_at"
      :loading="loading"/>
  </div>
</template>

<script lang="ts">
import {Operation, Order} from "@badlabs/trade-bot__db-types";
import {defineComponent} from "vue";
import {robotFromRoute, timeMixin} from "src/mixins";
import {mapActions} from "pinia";
import {useOperationsActions} from "stores/operations.actions";

export default defineComponent({
  name: "OperationsScreen",
  data(){
    return{
      operations: [] as Operation[],
      loading: false,
      updateLoading: false,
      date: null as null | string | { from: string, to: string },
      securityTicker: undefined as undefined | string,
      operationType: undefined as string | undefined,

    }
  },
  mixins: [robotFromRoute, timeMixin],
  methods: {
    ...mapActions(useOperationsActions, ["getOperations","updateOperations"]),
    async fetch(){
      this.loading = true
      try {
        const { from, to } = this.getDayBoundsFromTimeRange(this.date)
        this.operations = await this.getOperations(this.robot, { from, to, operation: this.operationType, securityTicker: this.securityTicker })
      }
      catch (e) {
        this.operations = []
      }
      this.loading = false
    },
    async updateOperationsLocal(){
      this.updateLoading = true
      try {
        const { from, to } = this.getDayBoundsFromTimeRange(this.date)

        this.operations = await this.updateOperations(this.robot, { from, to })
        this.securityTicker = ''
        this.operationType = ''
      }
      catch (e) {

      }
      this.updateLoading = false
    }
  },
  async mounted() {
    await this.fetch()
  }
})
</script>

<style scoped>

</style>
