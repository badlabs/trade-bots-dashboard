import { defineStore } from 'pinia';
import { useSecuritiesStore } from "stores/securities.store";
import {
  GetAlgorithmsResponse,
  GetPortfolioResponse,
  GetSecuritiesResponse,
  TradeBot, UpdatePortfolioResponse,
  UpdateSecuritiesResponse
} from 'src/models';
import axios from 'axios';

export const useRobotActions = defineStore('robotActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async getSecurities(tradeBot: TradeBot): Promise<GetSecuritiesResponse> {
      const securitiesStore = useSecuritiesStore()
      const { data: freshSecurities }: { data: GetSecuritiesResponse } =
        await axios.get(`${tradeBot.restUrl}/api/state/securities`, { headers: tradeBot.authHeader })
      securitiesStore.updateSecurities(freshSecurities)
      return freshSecurities
    },

    async updateSecurities(tradeBot: TradeBot): Promise<UpdateSecuritiesResponse> {
      const securitiesStore = useSecuritiesStore()
      const { data: freshSecurities }: { data: UpdateSecuritiesResponse } =
        await axios.post(`${tradeBot.restUrl}/api/state/securities`,{}, { headers: tradeBot.authHeader })
      securitiesStore.updateSecurities(freshSecurities)
      return freshSecurities
    },

    async getPortfolio(tradeBot: TradeBot): Promise<GetPortfolioResponse> {
      const { data: freshPortfolio }: { data: GetPortfolioResponse } =
        await axios.get(`${tradeBot.restUrl}/api/state/portfolio`, { headers: tradeBot.authHeader })
      return freshPortfolio
    },

    async updatePortfolio(tradeBot: TradeBot): Promise<UpdatePortfolioResponse> {
      const { data: freshPortfolio }: { data: UpdatePortfolioResponse } =
        await axios.post(`${tradeBot.restUrl}/api/state/portfolio`,{}, { headers: tradeBot.authHeader })
      return freshPortfolio
    },

    async getAlgorithms(tradeBot: TradeBot): Promise<GetAlgorithmsResponse> {
      const { data: algos }: { data: GetAlgorithmsResponse } =
        await axios.get(`${tradeBot.restUrl}/api/algos`, { headers: tradeBot.authHeader })
      return algos
    }
  },
});
