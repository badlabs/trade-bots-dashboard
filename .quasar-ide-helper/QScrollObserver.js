
/**
 * Quasar QScrollObserver component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/scroll-observer|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QScrollObserver',
  props: {
    /**
     * Emitted when scroll position changes
     * @param {{position : {top : Number, left : Number}, direction : 'up'|'down'|'left'|'right', directionChanged : Boolean, delta : {top : Number, left : Number}, inflectionPoint : {top : Number, left : Number}}} details Scroll details 
     */      
    '@scroll': function (details) {},
    /**
     * Debounce amount (in milliseconds)
     * @type {String|Number}
     */
    debounce: {
      type: [String,Number],
    },
    /**
     * Axis on which to detect changes
     * @type {'both'|'vertical'|'horizontal'}
     */
    axis: {
      type: String,
    },
    /**
     * Axis on which to detect changes
     * @type {'both'|'vertical'|'horizontal'}
     */
    'axis="both"': {
      type: Boolean,
    },
    /**
     * Axis on which to detect changes
     * @type {'both'|'vertical'|'horizontal'}
     */
    'axis="vertical"': {
      type: Boolean,
    },
    /**
     * Axis on which to detect changes
     * @type {'both'|'vertical'|'horizontal'}
     */
    'axis="horizontal"': {
      type: Boolean,
    },
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     * @type {Element|String}
     */
    scrollTarget: {
      type: [Element,String],
    }
  }
}
