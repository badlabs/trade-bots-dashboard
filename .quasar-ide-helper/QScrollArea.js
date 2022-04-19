
/**
 * Quasar QScrollArea component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/scroll-area|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QScrollArea',
  props: {
    /**
     * Emitted when scroll information changes (and listener is configured)
     * @param {{ref : Component, verticalPosition : Number, verticalPercentage : Number, verticalSize : Number, verticalContainerSize : Number, horizontalPosition : Number, horizontalPercentage : Number, horizontalSize : Number, horizontalContainerSize : Number}} info An object containing scroll information 
     */      
    '@scroll': function (info) {},
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Object with CSS properties and values for custom styling the scrollbars (both vertical and horizontal)
     * @type {String|Array|Object}
     */
    barStyle: {
      type: [String,Array,Object],
    },
    /**
     * Object with CSS properties and values for custom styling the vertical scrollbar; Is applied on top of 'bar-style' prop
     * @type {String|Array|Object}
     */
    verticalBarStyle: {
      type: [String,Array,Object],
    },
    /**
     * Object with CSS properties and values for custom styling the horizontal scrollbar; Is applied on top of 'bar-style' prop
     * @type {String|Array|Object}
     */
    horizontalBarStyle: {
      type: [String,Array,Object],
    },
    /**
     * Object with CSS properties and values for custom styling the thumb of scrollbars (both vertical and horizontal)
     * @type {Object}
     */
    thumbStyle: {
      type: Object,
    },
    /**
     * Object with CSS properties and values for custom styling the thumb of the vertical scrollbar; Is applied on top of 'thumb-style' prop
     * @type {Object}
     */
    verticalThumbStyle: {
      type: Object,
    },
    /**
     * Object with CSS properties and values for custom styling the thumb of the horizontal scrollbar; Is applied on top of 'thumb-style' prop
     * @type {Object}
     */
    horizontalThumbStyle: {
      type: Object,
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea
     * @type {String|Array|Object}
     */
    contentStyle: {
      type: [String,Array,Object],
    },
    /**
     * Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered)
     * @type {String|Array|Object}
     */
    contentActiveStyle: {
      type: [String,Array,Object],
    },
    /**
     * Manually control the visibility of the scrollbar; Overrides default mouse over/leave behavior
     * @type {Boolean}
     */
    visible: {
      type: Boolean,
    },
    /**
     * When content changes, the scrollbar appears; this delay defines the amount of time (in milliseconds) before scrollbars disappear again (if component is not hovered)
     * @type {Number|String}
     */
    delay: {
      type: [Number,String],
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    }
  }
}
