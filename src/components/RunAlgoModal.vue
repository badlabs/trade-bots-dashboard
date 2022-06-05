<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-bar class="bg-primary text-white">
        <div class="q-ma-md">
          Run algorithm <code>{{algorithm.name}}</code>
          <span v-if="robot">for <code>{{robot.name}}</code></span>
        </div>
      </q-bar>
      <q-form @submit.prevent="startAlgo">
        <q-card-section>
          <div v-for="input in fields" :key="input.name">
            <q-input v-if="input.type === 'number'" v-model.number="input.value" type="number" :label="input.name" />
            <OrderOptionsInput v-else-if="input.type === 'OrderDetails'" v-model="input.value" :label="input.name" />
            <q-input v-else-if="input.type === 'string'" v-model="input.value" :label="input.name" />
            <DateTimeInput v-else-if="input.type === 'Date'" v-model="input.value" :label="input.name" />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" type="submit" :loading="loading">
            <q-icon name="play_arrow" />
            Start {{ !robot ? `for ${robots.length} robots` : '' }}
          </q-btn>
          <q-btn color="red" @click="show = !show" >Cancel</q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" color="primary" >
    <q-icon name="play_arrow" />
    Run {{ !robot ? `for ${robots.length} robots` : '' }}
  </q-btn>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {AlgoInput, AlgoInputType, AlgoInputTypeName, OrderDetails, TradeBot} from "src/models";
import { Algorithm } from "@badlabs/trade-bot__db-types";
import OrderOptionsInput from "components/inputs/OrderOptionsInput.vue";
import {mapActions} from "pinia";
import {useAlgorithmsStore} from "stores/algorithms.store";
import DateTimeInput from "components/inputs/DateTimeInput.vue";

export default defineComponent({
  name: "RunAlgoModal",
  props: {
    algorithm: {
      type: Object as () => Algorithm,
      required: true,
    },
    robot: {
      type: TradeBot,
      required: false
    }
  },
  components: {
    DateTimeInput,
    OrderOptionsInput
  },
  data() {
    return {
      show: false,
      loading: false,
      fields: [] as { name: string, type: AlgoInputTypeName, value: AlgoInputType }[]
    }
  },
  computed: {
    robots() {
      return this.getRobotsByAlgorithm(this.algorithm.name)
        .filter(r => r.status === 'Active')
    }
  },
  methods: {
    ...mapActions(useAlgorithmsStore, ["runAlgorithm", "getAlgorithmInputsTypes", "getRobotsByAlgorithm", "runAlgorithmForActiveRobots"]),
    async startAlgo(){
      this.loading = true
      const body: any = {}
      this.fields.forEach(f => {
        body[f.name] = f.value
      })
      if (this.robot)
        await this.runAlgorithm(this.robot, this.algorithm.name, body)
      else await this.runAlgorithmForActiveRobots(this.algorithm.name, body)
      this.loading = false
      this.show = false
    }
  },
  created(){
    const inputs = this.getAlgorithmInputsTypes(this.algorithm)
    this.fields = Object.keys(inputs).map(input => {
      let type = inputs[input]
      let value: AlgoInputType = 0
      switch (type) {
        case "number":
          value = 0
          break
        case 'string':
          value = ''
          break
        case 'Date':
          value = new Date()
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
