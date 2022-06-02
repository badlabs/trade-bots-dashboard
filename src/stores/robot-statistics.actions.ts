import { defineStore } from 'pinia';
import {D_PortfolioPosition, D_Security, TradeBot} from "src/models";
import {useSecuritiesStore} from "stores/securities.store";
import {useRobotsStore} from "stores/robots.store";
import {useRobotActions} from "stores/robot.actions";
import {IPortfolioPosition, PortfolioPosition} from "@badlabs/trade-bot__db-types";


export const useRobotStatisticsActions = defineStore('robotStatisticsActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    getPositionStatistics(position: D_PortfolioPosition){
      const securitiesStore = useSecuritiesStore()
      const security = securitiesStore.getSecurity(position.security_ticker)
      if (!security) return
      const buyPrice = position.amount * (position.buy_price || security.price)
      const price = position.amount * security.price
      const diffAbs = Math.abs(buyPrice - price)
      const diffPer = diffAbs / buyPrice * 100
      return {
        buyPrice, price,
        growth: price > buyPrice,
        diffAbs, diffPer
      }
    },
    getPortfolioStatistics(portfolio: PortfolioPosition[]) {
      // const securitiesStore = useSecuritiesStore()
      // const buyPriceAll = portfolio
      //   .reduce((summ, position) => {
      //     const security = securitiesStore.getSecurity(position.security_ticker)
      //     if (!security) return summ
      //     return summ + (position.buy_price || security.price) * (position.amount || 0)
      //   }, 0)
      // const priceAll = securitiesStore.securities
      //   .reduce((summ, security) => {
      //     const position = portfolio.find(p => p.security_ticker === security.ticker)
      //     if (position)
      //       return summ + (security.price * position.amount || 0)
      //     return summ
      //   }, 0)
      // const diffAbs = Math.abs(buyPriceAll - priceAll)
      // const diffPer = diffAbs / buyPriceAll * 100
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
