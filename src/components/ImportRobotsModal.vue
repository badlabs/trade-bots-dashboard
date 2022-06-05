<template>
  <q-dialog v-model="show" persistent>
    <q-card style="min-width: 400px">
      <q-bar class="bg-primary text-white">
        <q-icon name="precision_manufacturing" /> Import robots
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section>
        <q-file color="primary" accept=".json"  label="Upload setting file" :max-files="1"
                @update:model-value="readSettings" outlined :loading="loading" >
          <template v-slot:prepend>
            <q-icon name="file_download" />
          </template>
        </q-file>
        <div v-if="settings.length">
          <div>Found {{settings.length}} configurations for robots.</div>
          <div>{{newRobotsCount()}} robots will be added.</div>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" @click="connectRobots" :loading="loading" icon="share" :disable="!settings.length">Connect</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-btn @click="show = !show" :loading="loading" color="accent" icon="file_download" label="Import Robots" />
</template>

<script lang="ts">
import { RobotInitOptions } from "src/models";
import {defineComponent} from "vue";
import {mapActions} from "pinia";
import {useRobotsStore} from "stores/robots.store";
export default defineComponent({
  name: "ImportRobotsModal",
  emits: ['addRobots', 'robotsAdded'],
  data() {
    return {
      show: false,
      settings: [] as RobotInitOptions[],
      loading: false
    }
  },
  computed:{
  },
  methods: {
    ...mapActions(useRobotsStore, [ "checkExistingRobot", "addRobot"]),
    async readSettings(file: File){
      this.settings = JSON.parse(await file.text())
    },
    async connectRobots(){
      this.loading = true
      this.show = false
      this.$emit('addRobots')
      const promises = this.settings.map(async (s) => {
        try {
          await this.addRobot(s)
        }
        catch (e) {}
      })
      await Promise.all(promises)
      this.$emit('robotsAdded')
      this.loading = false
    },
    newRobotsCount(){
      return this.settings.filter(s => !this.checkExistingRobot(s)).length
    }
  }
})
</script>

<style scoped>

</style>
