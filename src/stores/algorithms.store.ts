import { defineStore } from 'pinia';
import { useSecuritiesStore } from "stores/securities.store";
import {AlgoInput, AlgorithmInStore, TradeBot} from 'src/models';
import axios from 'axios';
import {
  Algorithm, AlgorithmRun,
  Currency,
  PortfolioPosition,
  Security
} from "@badlabs/trade-bot__db-types";

export const useAlgorithmsStore = defineStore('algorithmsStore', {
  state: () => ({
    algorithms: [] as AlgorithmInStore[]
  }),
  getters: {
    algorithmNotFound(): Algorithm {
      return {
        name: 'Not Found',
        input_types: JSON.stringify({}),
        description: ''
      }
    }
  },
  actions: {
    addAlgorithm(robot: TradeBot, algorithm: Algorithm) {
      if (this.algorithms.some(a => a.algorithm.name === algorithm.name)){
        this.algorithms
          .find(a => a.algorithm.name === algorithm.name)
          ?.robots.push(robot)
        return
      }
      this.algorithms.push({ algorithm, robots: [robot] })
    },
    async getAlgorithms(tradeBot: TradeBot): Promise<Algorithm[]> {
      const { data: algos }: { data: Algorithm[] } =
        await axios.get(`${tradeBot.url}/api/algos`, { headers: tradeBot.authHeader })
        for (let algo of algos){
          this.addAlgorithm(tradeBot, algo)
        }
      return algos
    },
    async getAlgorithmRuns(tradeBot: TradeBot, algorithmName: string): Promise<AlgorithmRun[]> {
      const { data: runs }: { data: AlgorithmRun[] } =
        await axios.get(`${tradeBot.url}/api/algos/${algorithmName}/runs`, { headers: tradeBot.authHeader })
      return runs
    },
    async runAlgorithm(tradeBot: TradeBot, algorithmName: string, inputs: any): Promise<AlgorithmRun>{
      const { data: algoRun }: { data: AlgorithmRun } =
        await axios.post(`${tradeBot.url}/api/algos/${algorithmName}`, inputs, {headers: tradeBot.authHeader})
      return algoRun
    },
    async stopAlgorithm(tradeBot: TradeBot, algorithmName: string, runId: number): Promise<AlgorithmRun>{
      const { data: algoRun }: { data: AlgorithmRun } =
        await axios.post(`${tradeBot.url}/api/algos/${algorithmName}/stop/${runId}`, {}, {headers: tradeBot.authHeader})
      return algoRun
    },
    async continueAlgorithm(tradeBot: TradeBot, algorithmName: string, runId: number): Promise<AlgorithmRun>{
      const { data: algoRun }: { data: AlgorithmRun } =
        await axios.post(`${tradeBot.url}/api/algos/${algorithmName}/continue/${runId}`, {}, {headers: tradeBot.authHeader})
      return algoRun
    },
    getAlgorithmInputsTypes(algorithm: Algorithm): AlgoInput {
      return JSON.parse(algorithm.input_types)
    },


  },
});
