import { defineStore } from 'pinia';
import { RobotInitOptions, TradeBot } from 'src/models';
import axios from 'axios';
import { CheckAuthResponse } from 'src/models/robot.responses';

export const useRobotsStore = defineStore('counter', {
  state: () => ({
    robots: [] as TradeBot[],
  }),
  getters: {

  },
  actions: {
    async checkRobotAuth(robotOptions: RobotInitOptions): Promise<boolean>{
      const testRobot = new TradeBot(robotOptions)
      const {data: response}: { data: CheckAuthResponse } = await axios.get(`${testRobot.restUrl}/api/auth/check`, { headers: testRobot.authHeader })
      return response.auth
    },
    addRobot(robotOptions: RobotInitOptions){
      this.robots.push(new TradeBot(robotOptions))
    }
  },
});
