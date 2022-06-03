<template>
  <q-avatar size="30px" :color="color" class="text-white">{{firstLetter}}</q-avatar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
const randGen = require('random-seed');

export default defineComponent({
  name: "RobotAvatar",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      colors: ['red', 'blue', 'orange', 'green', 'teal', 'purple', 'deep-purple', 'indigo', 'brown'],
      rand: randGen(this.name)
    }
  },
  computed: {
    color(){
      return this.colors[this.rand(this.colors.length)]
    },
    firstLetter(){
      return this.name.substring(0,1)
    }
  }
})
</script>

<style scoped>

</style>
