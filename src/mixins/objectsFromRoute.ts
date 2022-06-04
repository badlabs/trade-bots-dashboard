import { defineComponent } from "vue";
import {TradeBot} from "src/models";
import { Algorithm } from "@badlabs/trade-bot__db-types";
import {mapState} from "pinia";
import {useRobotsStore} from "stores/robots.store";
import {useAlgorithmsStore} from "stores/algorithms.store";

export const robotFromRoute = defineComponent({
  computed: {
    ...mapState(useRobotsStore, ['robots']),
    robot(): TradeBot{
      // @ts-ignore
      const robot = this.robots.find((r: TradeBot) => r.name === this.$route.params.robot)
      if (!robot) {
        return TradeBot.notFound()
      }
      return robot
    }
  },
  mounted() {
    if (this.robot.name.startsWith('[System]')) {
      console.log(this.robot)
      this.$router.push({ name: 'NotFound' })
    }
  }
})

export const algorithmFromRoute = defineComponent({
  computed: {
    ...mapState(useAlgorithmsStore, ["algorithms", "algorithmNotFound"]),
    algorithm(): Algorithm{
      const algorithm = this.algorithms.find(a => a.algorithm.name === this.$route.params.algorithm)
      if(!algorithm){
        return this.algorithmNotFound
      }
      return algorithm.algorithm
    }
  },
  mounted() {
    if (this.algorithm.name.startsWith('[System]')) {
      console.log(this.algorithm)
      this.$router.push({ name: 'NotFound' })
    }
  }

})
