import { defineStore } from 'pinia';
import {useSecuritiesStore} from "stores/securities.store";
import {useRobotsStore} from "stores/robots.store";
import {useRobotActions} from "stores/robot.actions";
import {IPortfolioPosition, PortfolioPosition} from "@badlabs/trade-bot__db-types";
import {TradeBot} from "src/models";


export const useRobotStatisticsActions = defineStore('robotStatisticsActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    // getPositionStatistics(position: PortfolioPosition){
    //   const securitiesStore = useSecuritiesStore()
    //   const security = securitiesStore.getSecurity(position.security_ticker)
    //   if (!security) return
    //   const buyPrice = position.amount * (position.buy_price || security.price)
    //   const price = position.amount * security.price
    //   const diffAbs = Math.abs(buyPrice - price)
    //   const diffPer = diffAbs / buyPrice * 100
    //   return {
    //     buyPrice, price,
    //     growth: price > buyPrice,
    //     diffAbs, diffPer
    //   }
    // },
    getPortfolioStatistics(portfolio: PortfolioPosition[]) {
      const securitiesStore = useSecuritiesStore()

      return {
        buyPriceAll: 0, priceAll: 0,
        growth: true,
        diffAbs: 0,
        diffPer: 0
      }
    },
    async getUnitePortfolioStatistics(){
      const securitiesStore = useSecuritiesStore()
      const robotsStore = useRobotsStore()
      const robotActions = useRobotActions()

      const robots: TradeBot[] = robotsStore.robots
      const allPortfoliosPromise: Promise<PortfolioPosition[]>[] = robots
        .map(async (robot) => {
          return await robotActions.getPortfolio(robot)
        })
      const allPortfolios: PortfolioPosition[][] = await Promise.all(allPortfoliosPromise)
      const unitedPortfolio: PortfolioPosition[] = allPortfolios
        .reduce(((united, current) => {
          current.forEach(currentPosition => {
            const existingPosition = united.find(p => p.security_ticker == currentPosition.security_ticker)
            if (existingPosition) existingPosition.amount += currentPosition.amount
            else united.push(currentPosition)
          })
          return united
        }), [])
      return {
        unitedPortfolio,
        unitedPortfolioStatistics: this.getPortfolioStatistics(unitedPortfolio)
      }
    }
  },
});
