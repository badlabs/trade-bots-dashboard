<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-form @submit.prevent="checkRobot">
        <q-card-section>
          <q-input v-model="robotOptions.name" label="Name*" />
          <q-input v-model="robotOptions.host" label="Host*" />
          <q-input v-model="robotOptions.port" type="number" label="Port*" />
          <q-input v-model="robotOptions.token" label="Token" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" @click="connectRobot" :disable="checkStatus !== 'success'">Connect</q-btn>
          <q-btn :color="checkStatus === 'success' ? 'green' : checkStatus === 'error' ? 'red' : 'primary'"
                 type="submit"
                 :loading="loading">
            Check
          </q-btn>
          <q-btn color="red" @click="show = !show" >Cancel</q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" color="primary" icon="add" label="Connect New Robot" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRobotsStore } from "stores/robots.store";
import { RobotInitOptions } from "src/models";
import {mapActions} from "pinia";

export default defineComponent({
  name: "ConnectRobotModal",
  emits: ['addRobot', 'robotAdded'],
  data(){
    return {
      show: false as boolean,
      loading: false,
      checkStatus: null as ('success' | 'error' | null),
      robotOptions: {
        name: '',
        host: 'localhost',
        token: '',
        port: 4268
      } as RobotInitOptions
    }
  },
  methods: {
    ...mapActions(useRobotsStore, ['checkRobotAuth', "addRobot"]),
    async checkRobot(){
      this.loading = true
      if (await this.checkRobotAuth(this.robotOptions)) this.checkStatus = 'success'
      else this.checkStatus = 'error'
      this.loading = false
    },
    async connectRobot(){
      this.$emit('addRobot')
      this.addRobot(this.robotOptions).then(() => this.$emit('robotAdded'))
      this.robotOptions = {
        name: '',
        host: 'localhost',
        token: '',
        port: 4268
      }
      this.checkStatus = null
      this.show = false
    }
  }
})
</script>

<style scoped>

</style>
