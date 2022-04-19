import { defineStore } from 'pinia';
import { TradeBot } from 'src/models';
import axios from 'axios';

export const useRobotsStore = defineStore('counter', {
  state: () => ({
    robots: [] as TradeBot[],
  }),
  getters: {

  },
  actions: {
    async checkRobotToken({ host, restPort, token }: { host: string, restPort: number, token: string }){
      const {data: response} = await axios.get(`http://${host}:${restPort}`, { headers: { Authorization: `Bearer ${token}` } })
      return response.status
    },
    addRobot(robotOptions: any){
      this.robots.push(new TradeBot(robotOptions))
    }
  },
});
