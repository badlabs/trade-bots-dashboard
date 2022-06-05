import {defineComponent} from "vue";

export const timeMixin = defineComponent({
  methods: {
    getDayBounds(date: Date){
      const start = new Date(date)
      start.setHours(0,0,0,0)
      return {
        start,
        end: new Date(+start + 24 * 60 * 60 * 1000)
      }
    },
    getDayBoundsFromTimeRange(range: null | string | { from: string, to: string }): {from: Date, to: Date} {
      let from: Date, to: Date
      if (range) {
        if (typeof range === 'string') {
          const oneDayBounds = this.getDayBounds(new Date(range))
          from = oneDayBounds.start
          to = oneDayBounds.end
        }
        else {
          from = this.getDayBounds(new Date(range.from)).start
          to = this.getDayBounds(new Date(range.to)).end
        }
      }
      else {
        const oneDayBounds = this.getDayBounds(new Date())
        from = oneDayBounds.start
        to = oneDayBounds.end
      }
      return { from, to }
    }
  }
})
