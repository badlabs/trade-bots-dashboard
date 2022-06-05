import {defineComponent} from "vue";
import {TradeBot} from "src/models";
import FileSaver from 'file-saver'

export const exportRobot = defineComponent({
  methods: {
    exportRobot(robot: TradeBot) {
      const blob = new Blob([JSON.stringify(robot.toExport(), undefined, 2)], { type: "text/plain;charset=utf-8" })
      FileSaver.saveAs(blob, `robot-${robot.name}-config.json`)
    }
  }
})

export const exportRobots = defineComponent({
  methods: {
    exportRobots(robots: TradeBot[]) {
      const blob = new Blob([JSON.stringify(robots.map(r => r.toExport()), undefined, 2)], { type: "text/plain;charset=utf-8" })
      FileSaver.saveAs(blob, `robots-config.json`)
    }
  }
})
