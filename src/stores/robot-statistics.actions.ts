import { defineStore } from 'pinia';
import {D_PortfolioPosition, D_Security} from "src/models";
import {useSecuritiesStore} from "stores/securities.store";


export const useRobotStatisticsActions = defineStore('robotStatisticsActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    getPortfolioStatistics(portfolio: D_PortfolioPosition[]) {
      const securitiesStore = useSecuritiesStore()
      const buyPriceAll = portfolio
        .reduce((summ, position) => {
          return summ + (position.buy_price || 0) * (position.amount || 0)
        }, 0)
      const priceAll = securitiesStore.securities
        .reduce((summ, security) => {
          const position = portfolio.find(p => p.security_ticker === security.ticker)
          if (position)
            return summ + (security.price * position.amount || 0)
          return summ
        }, 0)
      const diffAbs = Math.abs(buyPriceAll - priceAll)
      const diffPer = diffAbs / buyPriceAll
      return {
        buyPriceAll, priceAll,
        growth: priceAll > buyPriceAll,
        diffAbs,
        diffPer
      }
    }
  },
});
