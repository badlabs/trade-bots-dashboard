import { defineStore } from 'pinia';
import { useSecuritiesStore } from "stores/securities.store";
import {GetOperationsOptions, GetOrdersOptions, OperationType, TradeBot} from 'src/models';
import axios from 'axios';
import {
  Algorithm,
  Currency, Operation, Order,
  PortfolioPosition,
  Security
} from "@badlabs/trade-bot__db-types";

export const useOperationsActions = defineStore('operationsActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async getOperations(tradeBot: TradeBot, options: GetOperationsOptions): Promise<Operation[]> {
      const from: string = options.from?.toUTCString() || ''
      const to: string = options.to?.toUTCString() || ''
      const securityTicker: string = options.securityTicker || ''
      const operation: string = options.operation || ''
      const { data: operations }: { data: Operation[] } =
        await axios.get(`${tradeBot.url}/api/state/operations` +
          `?from=${from}&to=${to}` +
          `&securityTicker=${securityTicker}` +
          `&operation=${operation}`, { headers: tradeBot.authHeader })
      return operations
    },
    async updateOperations(tradeBot: TradeBot, options: { from?: Date, to?: Date } ): Promise<Operation[]> {
      const from: string = options.from?.toUTCString() || ''
      const to: string = options.to?.toUTCString() || ''
      const { data: operations }: { data: Operation[] } =
        await axios.post(`${tradeBot.url}/api/state/operations`, { from, to } , { headers: tradeBot.authHeader })
      return operations
    }
  },
});
