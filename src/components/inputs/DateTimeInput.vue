<template>
  <q-input v-model="date" :label="label">
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DateTimeInput",
  props: {
    label: String,
    modelValue: {
      type: Date,
      required: true
    }
  },
  data() {
    return{
      currentValue: this.modelValue,
      date: this.modelValue
    }
  },
  methods: {
    input(){
      this.$emit('update:modelValue', this.currentValue)
    },
    onValueChange(v: Date){
      this.currentValue = v
      this.input()
    }
  },
  watch: {
    date(v){
      this.currentValue = new Date(this.date)
      this.input()
    },
    value(v){
      this.onValueChange(v)
    }
  }
})
</script>

<style scoped>

</style>
