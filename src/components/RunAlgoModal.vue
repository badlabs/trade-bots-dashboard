<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-form @submit.prevent="startAlgo">
        <q-card-section>
          <div v-for="input in fields" :key="input.name">
            <q-input v-if="input.type === 'number'" v-model="input.value" type="number" :label="input.name" />
            <OrderOptionsInput v-else-if="input.type === 'OrderDetails'" v-model="input.value" :label="input.name" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary"
                 type="submit"
                 :loading="loading">
            Start
          </q-btn>
          <q-btn color="red" @click="show = !show" >Cancel</q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" color="primary" >Run</q-btn>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AlgoInput, AlgoInputType, OrderDetails, TradeBot} from "src/models";
import { Algorithm } from "@badlabs/trade-bot__db-types";
import OrderOptionsInput from "components/inputs/OrderOptionsInput.vue";
import {mapActions} from "pinia";
import {useAlgorithmsActions} from "stores/algorithms.actions";

export default defineComponent({
  name: "RunAlgoModal",
  props: {
    algorithm: {
      type: Object as () => Algorithm,
      required: true,
    },
    robot: {
      type: TradeBot,
      required: true
    }
  },
  components: {
    OrderOptionsInput
  },
  data() {
    return {
      show: false,
      loading: false,
      fields: [] as { name: string, type: AlgoInputType, value: number | OrderDetails }[]
    }
  },
  methods: {
    ...mapActions(useAlgorithmsActions, ["runAlgorithm", "getAlgorithmInputsTypes"]),
    async startAlgo(){
      this.loading = true
      const body: any = {}
      this.fields.forEach(f => {
        body[f.name] = f.value
      })
      await this.runAlgorithm(this.robot, this.algorithm.name, body)
      this.loading = false
      this.show = false
    }
  },
  created(){
    const inputs = this.getAlgorithmInputsTypes(this.algorithm)
    this.fields = Object.keys(inputs).map(input => {
      let type = inputs[input]
      let value: number | OrderDetails = 0
      switch (type) {
        case "number":
          value = 0
          break
        case "OrderDetails":
          value = { lots: 0, operation: 'limit_buy', price: 0, ticker: '' }
      }
      return { name: input, type, value }
    })
  }
})
</script>

<style scoped>

</style>
