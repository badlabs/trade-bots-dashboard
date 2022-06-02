import { defineStore } from 'pinia';
import {Security} from "@badlabs/trade-bot__db-types";

export const useSecuritiesStore = defineStore('securities', {
  state: () => ({
    securities: [] as Security[],
  }),
  getters: {

  },
  actions: {
    updateSecurities(freshSecurities: Security[]){
      freshSecurities.forEach(freshSecurity => {
        const existingSecurity = this.securities.find(security => security.ticker === freshSecurity.ticker)
        if (existingSecurity){
          existingSecurity.price = freshSecurity.price
        } else {
          this.securities.push(freshSecurity)
        }
      })
    },
    getSecurity(ticker: string){
      return this.securities.find(s => s.ticker === ticker)
    }
  },
});
