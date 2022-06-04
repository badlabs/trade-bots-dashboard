import { defineStore } from 'pinia';
import { RobotInitOptions, TradeBot } from 'src/models';
import axios from 'axios';
import { CheckAuthResponse } from 'src/models/robot.responses';
import {useRobotActions} from "stores/robot.actions";
import { usePortfolioActions } from "stores/portfolio.actions";
import {useAlgorithmsStore} from "stores/algorithms.store";

export const useRobotsStore = defineStore('robots', {
  state: () => ({
    robots: [] as TradeBot[],
  }),
  getters: {

  },
  actions: {
    async checkRobotAuth(robotOptions: RobotInitOptions): Promise<boolean>{
      try {
        const testRobot = new TradeBot(robotOptions)
        const {data: response}: { data: CheckAuthResponse } = await axios.get(`${testRobot.url}/api/auth/check`, { headers: testRobot.authHeader })
        return response.auth
      } catch (e) {
        return false
      }

    },
    async addRobot(robotOptions: RobotInitOptions){
      const robotActions = useRobotActions()
      const portfolioActions = usePortfolioActions()
      const algorithmsStore = useAlgorithmsStore()
      if (!this.checkExistingRobot(robotOptions)) {
        const newRobot = new TradeBot(robotOptions)
        await robotActions.updateSecurities(newRobot)
        await portfolioActions.updatePortfolio(newRobot)
        await algorithmsStore.getAlgorithms(newRobot)
        this.robots.push(newRobot)
      }
    },
    checkExistingRobot(robotOptions: RobotInitOptions){
      const testRobot = new TradeBot(robotOptions)
      return this.robots.some(robot => robot.url === testRobot.url)
    }
  },
});
