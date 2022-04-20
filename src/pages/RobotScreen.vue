<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-btn color="primary" href="#/robots" label="< Robots"/>
    </div>
    <div class="row justify-between">
      <h4>Robot {{robot.name}}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRobotsStore} from "stores/robots.store";
import {mapState} from "pinia";
import { TradeBot } from "src/models";

export default defineComponent({
  name: "RobotScreen",
  computed: {
    ...mapState(useRobotsStore, ['robots']),
    robot(){
      // @ts-ignore
      const robot = this.robots.find((r: TradeBot) => r.name === this.$route.params.robot)
      if (!robot) {
        this.$router.push('#/')
        return new TradeBot({name: '', host: '', restPort: 0, wsPort: 0, token: ''})
      }
      return robot
    }
  }
})
</script>

<style scoped>

</style>
