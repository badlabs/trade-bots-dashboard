import { defineStore } from 'pinia';
import { useSecuritiesStore } from "stores/securities.store";
import { TradeBot } from 'src/models';
import axios from 'axios';
import {
  Algorithm,
  Currency,
  PortfolioPosition,
  Security
} from "@badlabs/trade-bot__db-types";

export const useRobotActions = defineStore('robotActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async getSecurities(tradeBot: TradeBot): Promise<Security[]> {
      const securitiesStore = useSecuritiesStore()
      const { data: freshSecurities }: { data: Security[] } =
        await axios.get(`${tradeBot.url}/api/state/securities`, { headers: tradeBot.authHeader })
      securitiesStore.updateSecuritiesStore(freshSecurities)
      return freshSecurities
    },

    async updateSecurities(tradeBot: TradeBot): Promise<Security[]> {
      const securitiesStore = useSecuritiesStore()
      const { data: freshSecurities }: { data: Security[] } =
        await axios.post(`${tradeBot.url}/api/state/securities`,{}, { headers: tradeBot.authHeader })
      securitiesStore.updateSecuritiesStore(freshSecurities)
      return freshSecurities
    },

    async getCurrencies(tradeBot: TradeBot): Promise<Currency[]> {
      const { data: currencies }: { data: Currency[] } =
        await axios.get(`${tradeBot.url}/api/state/currencies`, { headers: tradeBot.authHeader })
      return currencies
    },

    async updateCurrencies(tradeBot: TradeBot): Promise<Currency[]> {
      const { data: currencies }: { data: Currency[] } =
        await axios.post(`${tradeBot.url}/api/state/currencies`, {}, { headers: tradeBot.authHeader })
      return currencies
    }
  },
});
