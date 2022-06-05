<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-bar class="bg-primary text-white">
        <q-icon name="precision_manufacturing" /> Connect robot
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-form @submit.prevent="checkRobot" :loading="loading">
        <q-card-section>
          <q-input v-model="robotOptions.name" label="Name*" />
          <q-input v-model="robotOptions.host" label="Host*" />
          <q-input v-model="robotOptions.port" type="number" label="Port*" />
          <q-input v-model="robotOptions.token" label="Token" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn-group>
            <q-file color="primary" accept=".json"  label="IMPORT" :max-files="1"
                    @update:model-value="setImportedSettings" dense >
              <template v-slot:prepend>
                <q-icon name="file_download" />
              </template>
            </q-file>
            <q-btn :color="checkStatus === 'success' ? 'green' : checkStatus === 'error' ? 'red' : 'primary'"
                   :icon="checkStatus === 'success' ? 'check_box' : checkStatus === 'error' ? 'error' : 'check_box_outline_blank'"
                   type="submit"
                   :loading="loading">
              Check
            </q-btn>
            <q-btn color="primary" @click="connectRobot" :loading="loading" icon="share" :disable="checkStatus !== 'success'">Connect</q-btn>
          </q-btn-group>

        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" :loading="loading" color="accent" icon="add" label="Connect New Robot" />
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
    async setImportedSettings(file: File){
      const settings: RobotInitOptions = JSON.parse(await file.text())
      this.robotOptions.name = settings.name
      this.robotOptions.host = settings.host
      this.robotOptions.token = settings.token
      this.robotOptions.port = settings.port
      console.log(settings)
    },
    async checkRobot(){
      this.loading = true
      if (await this.checkRobotAuth(this.robotOptions)) this.checkStatus = 'success'
      else this.checkStatus = 'error'
      this.loading = false
    },
    async connectRobot(){
      this.loading = true
      this.$emit('addRobot')
      this.addRobot(this.robotOptions).then(() => {
        this.$emit('robotAdded')
        this.loading = false
      })
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
