<template>
  <q-card>
    <q-card-section class="row justify-between">
      <div>{{label || 'OrderDetails'}}</div>
      <div>
        <q-input v-model="currentValue.ticker" label="Ticker" @input="input" />
        <q-select v-model="currentValue.operation" :options="operationTypes" label="Operation" @input="input" />
        <q-input v-model="currentValue.price" type="number" label="Price" @input="input" />
        <q-input v-model="currentValue.lots" type="number" label="Lots" @input="input" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {OperationType, OrderDetails} from "src/models";

export default defineComponent({
  name: "OrderOptionsInput",
  props: {
    label: String,
    modelValue: {
      type: Object as () => OrderDetails,
      required: true
    }
  },
  data() {
    return{
      currentValue: this.modelValue,
      operationTypes: ['limit_buy', "limit_sell", 'market_buy', "market_sell", "buy_or_cancel", "sell_or_cancel"] as OperationType[]
    }
  },
  methods: {
    input(){
      this.$emit('update:modelValue', this.currentValue)
    },
    onValueChange(v: OrderDetails){
      this.currentValue = v
      this.input()
    }
  },
  watch: {
    value(v){
      this.onValueChange(v)
    }
  }

})
</script>

<style scoped>

</style>
