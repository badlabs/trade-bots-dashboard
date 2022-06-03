import { defineStore } from 'pinia';
import {useSecuritiesStore} from "stores/securities.store";
import {useRobotsStore} from "stores/robots.store";
import {useRobotActions} from "stores/robot.actions";
import {CurrencyBalance, IPortfolioPosition, PortfolioPosition} from "@badlabs/trade-bot__db-types";
import {TradeBot} from "src/models";
import axios from "axios";


export const usePortfolioActions = defineStore('portfolioActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async getPortfolio(tradeBot: TradeBot): Promise<PortfolioPosition[]> {
      const { data: freshPortfolio }: { data: PortfolioPosition[] } =
        await axios.get(`${tradeBot.url}/api/state/portfolio`, { headers: tradeBot.authHeader })
      return freshPortfolio
    },

    async getCurrenciesBalance(tradeBot: TradeBot): Promise<CurrencyBalance[]> {
      const { data: freshBalance }: { data: CurrencyBalance[] } =
        await axios.get(`${tradeBot.url}/api/state/currencies/balance`, { headers: tradeBot.authHeader })
      return freshBalance
    },

    async updatePortfolio(tradeBot: TradeBot): Promise<PortfolioPosition[]> {
      const { data: freshPortfolio }: { data: PortfolioPosition[] } =
        await axios.post(`${tradeBot.url}/api/state/portfolio`,{}, { headers: tradeBot.authHeader })
      return freshPortfolio
    },

    async getAverageBuyPrice(tradeBot: TradeBot, ticker: string): Promise<{ ticker: string, price: number }> {
      const { data: buyPrice }: { data: { ticker: string, price: number } } =
        await axios.get(`${tradeBot.url}/api/state/portfolio/${ticker}/average-buy-price`,{ headers: tradeBot.authHeader })
      return buyPrice
    },
    // getPortfolioStatistics(portfolio: PortfolioPosition[]) {
    //   const securitiesStore = useSecuritiesStore()
    //
    //   return {
    //     buyPriceAll: 0, priceAll: 0,
    //     growth: true,
    //     diffAbsolute: 0,
    //     diffRelative: 0
    //   }
    // },
    // async getUnitePortfolioStatistics(){
    //   const securitiesStore = useSecuritiesStore()
    //   const robotsStore = useRobotsStore()
    //   const robotActions = useRobotActions()
    //
    //   const robots: TradeBot[] = robotsStore.robots
    //   const allPortfoliosPromise: Promise<PortfolioPosition[]>[] = robots
    //     .map(async (robot) => {
    //       return await this.getPortfolio(robot)
    //     })
    //   const allPortfolios: PortfolioPosition[][] = await Promise.all(allPortfoliosPromise)
    //   const unitedPortfolio: PortfolioPosition[] = allPortfolios
    //     .reduce(((united, current) => {
    //       current.forEach(currentPosition => {
    //         const existingPosition = united.find(p => p.security_ticker == currentPosition.security_ticker)
    //         if (existingPosition) existingPosition.amount += currentPosition.amount
    //         else united.push(currentPosition)
    //       })
    //       return united
    //     }), [])
    //   return {
    //     unitedPortfolio,
    //     unitedPortfolioStatistics: this.getPortfolioStatistics(unitedPortfolio)
    //   }
    // },
    async getUnitedPortfolio(): Promise<PortfolioPosition[]>{
      const robotsStore = useRobotsStore()
      const robots: TradeBot[] = robotsStore.robots
      const allPortfoliosPromise: Promise<PortfolioPosition[]>[] = robots
        .map(async (robot) => {
          return await this.getPortfolio(robot)
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
      return unitedPortfolio
    },
    async getUnitedBalance(): Promise<CurrencyBalance[]>{
      const robotsStore = useRobotsStore()
      const robots: TradeBot[] = robotsStore.robots
      const allBalancesPromise: Promise<CurrencyBalance[]>[] = robots
        .map(async (robot) => {
          return await this.getCurrenciesBalance(robot)
        })
      const allBalances: CurrencyBalance[][] = await Promise.all(allBalancesPromise)
      const unitedBalances: CurrencyBalance[] = allBalances
        .reduce(((united, current) => {
          current.forEach(currentBalance => {
            const existingPosition = united.find(p => p.currency_ticker == currentBalance.currency_ticker)
            if (existingPosition) existingPosition.balance += currentBalance.balance
            else united.push(currentBalance)
          })
          return united
        }), [])
      return unitedBalances
    }
  },
});
