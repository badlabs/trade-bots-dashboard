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
import {AlgoInput, AlgoInputType, Algorithm, OrderDetails, TradeBot} from "src/models";
import OrderOptionsInput from "components/inputs/OrderOptionsInput.vue";

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
    async startAlgo(){
      this.loading = true
      const body: any = {}
      this.fields.forEach(f => {
        body[f.name] = f.value
      })
      await this.$axios.post(`${this.robot.restUrl}/api/algos/${this.algorithm.name}`, body, {headers: this.robot.authHeader})
      this.loading = false
      this.show = false
    }
  },
  created(){
    this.fields = this.algorithm.inputs.map(i => {
      let value: number | OrderDetails = 0
      switch (i.type) {
        case "number":
          value = 0
          break
        case "OrderDetails":
          value = {
            lots: 0,
            operation: 'buy',
            price: 0,
            ticker: ''
          }
      }
      return {
        name: i.name,
        type: i.type,
        value
      }
    })
  }
})
</script>

<style scoped>

</style>
