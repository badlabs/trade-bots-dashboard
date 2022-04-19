import { defineStore } from 'pinia';
import { RobotInitOptions, TradeBot } from 'src/models';
import axios from 'axios';
import { CheckAuthResponse } from 'src/models/robot.responses';

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
        const {data: response}: { data: CheckAuthResponse } = await axios.get(`${testRobot.restUrl}/api/auth/check`, { headers: testRobot.authHeader })
        return response.auth
      } catch (e) {
        return false
      }

    },
    addRobot(robotOptions: RobotInitOptions){
      if (!this.checkExistingRobot(robotOptions))
        this.robots.push(new TradeBot(robotOptions))
    },
    checkExistingRobot(robotOptions: RobotInitOptions){
      const testRobot = new TradeBot(robotOptions)
      return this.robots.some(robot => robot.restUrl === testRobot.restUrl || robot.wsUrl === testRobot.wsUrl)
    }
  },
});
