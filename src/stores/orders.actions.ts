import { defineStore } from 'pinia';
import { useSecuritiesStore } from "stores/securities.store";
import {GetOrdersOptions, TradeBot} from 'src/models';
import axios from 'axios';
import {
  Algorithm,
  Currency, Order,
  PortfolioPosition,
  Security
} from "@badlabs/trade-bot__db-types";

export const useOrdersActions = defineStore('ordersActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async getOrders(tradeBot: TradeBot, options: GetOrdersOptions): Promise<Order[]> {
      const from: string = options.from?.toUTCString() || ''
      const to: string = options.to?.toUTCString() || ''
      const securityTicker: string = options.securityTicker || ''
      const operation: string = options.operation || ''
      const { data: orders }: { data: Order[] } =
        await axios.get(`${tradeBot.url}/api/state/orders` +
          `?from=${from}&to=${to}` +
          `&securityTicker=${securityTicker}` +
          `&operation=${operation}&runId=${options.runId || ''}`, { headers: tradeBot.authHeader })
      return orders
    }
  },
});
