<template>
  <span>{{sign}}</span>

</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "CurrencySign",
  props: {
    ticker: {
      type: String,
      required: true
    }
  },
  computed:{
    sign(){
      switch (this.ticker) {
        case 'USD': return '$'
        case 'RUB': return '₽'
        case 'EUR': return '€'
        default: return 'M'
      }
    }
  }
})
</script>

<style scoped>

</style>
