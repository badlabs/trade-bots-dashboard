<template>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-ma-md">
      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="Robots" icon="widgets" to="/robots" />
      <q-breadcrumbs-el :label="robot.name" icon="precision_manufacturing" :to="`/robots/${robot.name}`" />
      <q-breadcrumbs-el label="Orders" icon="list_alt" class="text-primary" />
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
          <q-input v-model="runId" type="number" label="Run id" />
          <q-select v-model="operationType" clearable :options="operationTypes" label="Operation" />
        </div>
      </q-card-section>
      <q-card-section>
        <q-space/>
        <q-btn color="primary" @click="fetch()"><q-icon name="refresh" />Refresh</q-btn>
      </q-card-section>
    </q-card>
    <q-table
      :rows="orders"
      row-key="created_at"
      :loading="loading"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mapActions} from "pinia";
import {useOrdersActions} from "stores/orders.actions";
import { Order } from "@badlabs/trade-bot__db-types";
import {robotFromRoute} from "src/mixins";
import {OperationType} from "src/models";

export default defineComponent({
  name: "OrdersScreen",
  data(){
    return{
      orders: [] as Order[],
      loading: false,
      date: null as null | string | { from: string, to: string },
      securityTicker: undefined as undefined | string,
      runId: undefined as number | undefined,
      operationType: undefined as OperationType | undefined,
      operationTypes: ['limit_buy', "limit_sell", 'market_buy', "market_sell", "buy_or_cancel", "sell_or_cancel"] as OperationType[]
    }
  },
  mixins: [robotFromRoute],
  methods: {
    ...mapActions(useOrdersActions, ['getOrders']),
    getDayBounds(date: Date){
      const start = new Date(date)
      start.setHours(0,0,0,0)
      return {
        start,
        end: new Date(+start + 24 * 60 * 60 * 1000)
      }
    },
    async fetch(){
      this.loading = true
      try {
        let from: Date, to: Date
        if (this.date) {
          if (typeof this.date === 'string') {
            const oneDayBounds = this.getDayBounds(new Date(this.date))
            from = oneDayBounds.start
            to = oneDayBounds.end
          }
          else {
            from = this.getDayBounds(new Date(this.date.from)).start
            to = this.getDayBounds(new Date(this.date.to)).end
          }
        }
        else {
          const oneDayBounds = this.getDayBounds(new Date())
          from = oneDayBounds.start
          to = oneDayBounds.end
        }

        this.orders = await this.getOrders(this.robot, { from, to, operation: this.operationType, runId: this.runId, securityTicker: this.securityTicker })
      }
      catch (e) {
        this.orders = []
      }
      this.loading = false
    }
  },
  async mounted(){
    await this.fetch()
  }
})
</script>

<style scoped>

</style>
