<template>
  <div class="q-px-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightgray; border-radius: 5px">
    <div class="q-pa-md">
      <div class="q-pt-md" style="font-size: 16px; font-weight: bold">
        Total Currencies: ${{statistics.priceAll}}
      </div>
      <div style="font-size: 14px" :class="`text-${statistics.growth ? 'green' : 'red'}`">
        {{ statistics.growth ? '↑' : '↓' }}{{ statistics.diffAbs }} $ ({{ statistics.diffPer }} %)
      </div>
    </div>
    <div class="q-pa-md">
      <q-list separator style="max-height: 300px; overflow-y: auto" class="bg-white">
        <q-item v-for="(security, index) in portfolio" :key="index">
          <q-item-section>
            <q-item-label style="font-size: 18px; font-weight: bold">{{security.security_ticker}}</q-item-label>
            <q-item-label caption style="font-size: 14px">x{{security.amount}}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption style="font-size: 16px; font-weight: bold">
              {{getPositionStatistics(security).price}} $
            </q-item-label>
            <q-item-label caption
                          :class="`text-${getPositionStatistics(security).growth ? 'green' : 'red'}`"
                          style="font-size: 14px">
              {{getPositionStatistics(security).growth ? '↑' : '↓'}}{{getPositionStatistics(security).diffAbs}} $ ({{getPositionStatistics(security).diffPer}} %)
            </q-item-label>
          </q-item-section>

        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { D_PortfolioPosition } from "src/models";
import { useRobotStatisticsActions } from "stores/robot-statistics.actions";
import { mapActions } from "pinia";

export default defineComponent({
  name: "PortfolioStatistics",
  props: {
    portfolio: {
      type: Array as () => D_PortfolioPosition[],
      required: true,
    }
  },
  computed: {
    statistics(){
      return this.getPortfolioStatistics(this.portfolio)
    }
  },
  methods: {
    ...mapActions(useRobotStatisticsActions, ['getPortfolioStatistics', 'getPositionStatistics'])
  }
})
</script>

<style scoped>

</style>
