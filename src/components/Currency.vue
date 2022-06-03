<template>
  {{sign}}
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "Currency",
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
