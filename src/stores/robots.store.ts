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
    async updateRobotStatus(robot: TradeBot): Promise<TradeBot> {
      try {
        const {data: response}: { data: CheckAuthResponse } = await axios.get(`${robot.url}/api/auth/check`, { headers: robot.authHeader })
        if (!response.auth) {
          robot.status = 'Not Authorized'
          return robot
        }
        robot.status = 'Active'
        return robot
      } catch (e) {
        robot.status = 'Disconnected'
        return robot
      }
    },
    async addRobot(robotOptions: RobotInitOptions){
      const robotActions = useRobotActions()
      const portfolioActions = usePortfolioActions()
      const algorithmsStore = useAlgorithmsStore()
      if (!this.checkExistingRobot(robotOptions)) {
        this.robots.push(new TradeBot(robotOptions))
        const newRobot = this.robots.find(r => r.url === new TradeBot(robotOptions).url)
        if (newRobot) {
          await robotActions.updateSecurities(newRobot)
          await portfolioActions.updatePortfolio(newRobot)
          await algorithmsStore.getAlgorithms(newRobot)
          await this.updateRobotStatus(newRobot)
        }


      }
    },
    checkExistingRobot(robotOptions: RobotInitOptions){
      const testRobot = new TradeBot(robotOptions)
      return this.robots.some(robot => robot.url === testRobot.url)
    }
  },
});
