<template>
  <!-- Nav Buttons -->
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/robots" label="Robots"/>
      <q-btn color="primary" href="#/algorithms" label="Algorithms"/>
    </div>
  </div>

  <!-- Connected Robots -->
  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <div style="text-align: center; font-size: 16px; font-weight: bold">Connected robots: Info</div>
      <q-list separator class="connected-robots__items q-my-md">
          <q-item v-for="(robot, index) in robots" :key="index">
            <q-item-section>{{ robot.name }}</q-item-section>
            <q-item-section>{{ robot.algorithm || 'used algorithm' }}</q-item-section>
            <q-item-section>
              <div>
                <q-chip color="primary" dense dark>
                  {{ robot.status || 'active'}}
                </q-chip>
              </div>
            </q-item-section>
          </q-item>
      </q-list>
    <div>
      <q-btn color="primary" href="#/robots" label="More" style="font-size: 12px"/>
    </div>
  </div>

  <!-- Total Currencies -->
  <div class="q-px-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightgray; border-radius: 5px">
    <div class="q-pa-md">
      <div class="q-pt-md" style="font-size: 16px; font-weight: bold">Total Currencies: $100</div>
      <div style="font-size: 14px">↑1,23 $ (1,23 %)</div>
    </div>
    <div class="q-pa-md">
      <q-list separator style="max-height: 300px; overflow-y: auto">
        <q-item v-for="(security, index) in securities" :key="index">
          <q-item-section>
            <q-item-label style="font-size: 18px; font-weight: bold">AAA</q-item-label>
            <q-item-label caption style="font-size: 14px">x5</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption style="font-size: 16px; font-weight: bold">12,34 $</q-item-label>
            <q-item-label caption style="font-size: 14px">↓1,23 $ (1,23 %)</q-item-label>
          </q-item-section>

        </q-item>
      </q-list>
    </div>
  </div>

  <!-- Algorithm -->
  <div class="q-pa-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightblue; border-radius: 5px">
    <q-list
      style="max-height: 300px; overflow-y: auto"
      separator>
      <q-item
        v-for="(algo, index) in algos" :key="index"
        dense>
        <q-item-section class="q-pa-sm q-my-sm">
          <q-card class="my-card" style="max-height: 300px;">
            <q-card-section>
              Algorithm 1234
            </q-card-section>
            <div class="q-pa-md">

            </div>
          </q-card>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRobotsStore} from "stores/robots.store";
import {mapState} from "pinia";

export default defineComponent({
  name: "MainScreen",
  data(){
    return{
      algos: [1,2,3,4,5],
      securities: [1,2,3,4,5]
    }
  },
  computed: {
    ...mapState(useRobotsStore, ['robots'])
  }

})
</script>

<style scoped>
  .connected-robots__items {
    max-height: 150px;
    overflow-y: auto;
    background-color: white;
  }
  .connected-robots__item {
    border-bottom: 1px #212121 solid;
  }
</style>
