<template>
  <div class="q-px-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightgray; border-radius: 5px">
<!--    <div class="q-pa-md">-->
<!--      <div class="q-pt-md" style="font-size: 16px; font-weight: bold">-->
<!--        Total Currencies: ${{statistics.priceAll}}-->
<!--      </div>-->
<!--      <div style="font-size: 14px" :class="`text-${statistics.growth ? 'green' : 'red'}`">-->
<!--        {{ statistics.growth ? '↑' : '↓' }}{{ statistics.diffAbs }} $ ({{ statistics.diffPer }} %)-->
<!--      </div>-->
<!--    </div>-->
    <div class="q-pa-md">
      <q-list separator style="max-height: 300px; overflow-y: auto" class="bg-white">
        <PortfolioItem v-for="(position, index) in portfolio" :key="index"
                       :portfolio-position="position" :robot="robot" />
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePortfolioActions } from "stores/portfolio.actions";
import { mapActions } from "pinia";
import { PortfolioPosition } from "@badlabs/trade-bot__db-types";
import PortfolioItem from "components/portfolio/PortfolioItem.vue";
import {TradeBot} from "src/models";

export default defineComponent({
  name: "PortfolioView",
  components: {PortfolioItem},
  props: {
    portfolio: {
      type: Array as () => PortfolioPosition[],
      required: true,
    },
    robot: {
      type: Object as () => TradeBot,
      required: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(usePortfolioActions, [ 'getAverageBuyPrice'])
  }
})
</script>

<style scoped>

</style>
