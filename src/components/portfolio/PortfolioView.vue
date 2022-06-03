<template>
  <div class="q-px-md q-my-lg q-mx-auto" style="max-width: 800px; background: lightgray; border-radius: 5px">
    <q-card-section class="text-h4">
      <slot>Portfolio</slot>
    </q-card-section>
    <q-card-section class="bg-white q-mx-md rounded-borders" v-if="balance">
      <span v-for="currency in balance" :key="currency.currency_ticker" class="q-mr-md">
        {{(currency.balance).toLocaleString('de-DE')}}<CurrencySign :ticker="currency.currency_ticker" class="text-bold" />
      </span>
    </q-card-section>
    <q-card-section class="q-pa-md">

      <q-list separator style="max-height: 300px; overflow-y: auto" class="bg-white rounded-borders">
        <PortfolioItem v-for="(position, index) in portfolio" :key="index"
                       :portfolio-position="position" :robot="robot" />
      </q-list>
    </q-card-section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePortfolioActions } from "stores/portfolio.actions";
import { mapActions } from "pinia";
import {CurrencyBalance, PortfolioPosition} from "@badlabs/trade-bot__db-types";
import PortfolioItem from "components/portfolio/PortfolioItem.vue";
import {TradeBot} from "src/models";
import CurrencySign from "components/CurrencySign.vue";

export default defineComponent({
  name: "PortfolioView",
  components: {CurrencySign, PortfolioItem},
  props: {
    portfolio: {
      type: Array as () => PortfolioPosition[],
      required: true,
    },
    balance: {
      type: Array as () => CurrencyBalance[],
      required: false,
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
