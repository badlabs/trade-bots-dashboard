import { defineStore } from 'pinia';
import {D_Security} from 'src/models';

export const useSecuritiesStore = defineStore('securities', {
  state: () => ({
    securities: [] as D_Security[],
  }),
  getters: {

  },
  actions: {
    updateSecurities(freshSecurities: D_Security[]){
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
