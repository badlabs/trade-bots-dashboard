<template>
  <q-item>
    <q-item-section>
      <q-item-label style="font-size: 18px; font-weight: bold">{{security.name}}</q-item-label>
      <q-item-label caption style="font-size: 14px">{{portfolioPosition.security_ticker}} x{{portfolioPosition.amount}}</q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption style="font-size: 16px; font-weight: bold">
        {{security.price}} <CurrencySign :ticker="security.currency_ticker" />
      </q-item-label>
      <q-item-label caption v-if="!!robot"
                    :class="`text-${growth ? 'green' : 'red'}`"
                    style="font-size: 14px">
        {{growth ? '↑' : '↓'}}{{buyPrice.price}} <CurrencySign :ticker="security.currency_ticker" /> ({{diffRelative}} %)
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {PortfolioPosition} from "@badlabs/trade-bot__db-types";
import {TradeBot} from "src/models";
import {mapActions, mapState} from "pinia";
import {usePortfolioActions} from "stores/portfolio.actions";
import {useSecuritiesStore} from "stores/securities.store";
import CurrencySign from "components/CurrencySign.vue";

export default defineComponent({
  name: "PortfolioItem",
  components: {CurrencySign},
  props: {
    portfolioPosition: {
      type: Object as () => PortfolioPosition,
      required: true
    },
    robot: {
      type: TradeBot,
      required: false
    }
  },
  data(){
    return {
      buyPrice: {ticker: '', price: 0},
      loading: true
    }
  },
  methods: {
    ...mapActions(usePortfolioActions, ["getAverageBuyPrice"]),
    ...mapActions(useSecuritiesStore, ["getSecurity"])
  },
  computed: {
    ...mapState(useSecuritiesStore, ["securities"]),
    security(){
      return this.getSecurity(this.portfolioPosition.security_ticker)
    },
    growth(){ return (this.security?.price || 0) > this.buyPrice.price},
    diffAbsolute(){
      let result = Math.abs((this.security?.price || 0) - this.buyPrice.price)
      return Math.round(result * 100) / 100
    },
    diffRelative(){
      let result = this.diffAbsolute / this.buyPrice.price * 100
      return Math.round(result * 100) / 100
    }
  },
  async created(){
    this.loading = true
    if (this.robot)
      this.buyPrice = await this.getAverageBuyPrice( this.robot, this.portfolioPosition.security_ticker )
    this.loading = false
  }
})
</script>

<style scoped>

</style>
