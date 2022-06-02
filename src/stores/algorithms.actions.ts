import { defineStore } from 'pinia';
import { useSecuritiesStore } from "stores/securities.store";
import {AlgoInput, TradeBot} from 'src/models';
import axios from 'axios';
import {
  Algorithm, AlgorithmRun,
  Currency,
  PortfolioPosition,
  Security
} from "@badlabs/trade-bot__db-types";

export const useAlgorithmsActions = defineStore('algorithmsActions', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    async getAlgorithms(tradeBot: TradeBot): Promise<Algorithm[]> {
      const { data: algos }: { data: Algorithm[] } =
        await axios.get(`${tradeBot.url}/api/algos`, { headers: tradeBot.authHeader })
      return algos
    },
    async runAlgorithm(tradeBot: TradeBot, algorithmName: string, inputs: any): Promise<AlgorithmRun>{
      const { data: algoRun }: { data: AlgorithmRun } =
        await axios.post(`${tradeBot.url}/api/algos/${algorithmName}`, inputs, {headers: tradeBot.authHeader})
      return algoRun
    },
    getAlgorithmInputsTypes(algorithm: Algorithm): AlgoInput {
      return JSON.parse(algorithm.input_types)
    },


  },
});
