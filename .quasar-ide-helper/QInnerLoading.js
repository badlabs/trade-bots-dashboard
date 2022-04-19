
/**
 * Quasar QInnerLoading component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/inner-loading|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QInnerLoading',
  props: {
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionShow: {
      type: String,
    },
    /**
     * One of Quasar's embedded transitions
     * @type {String}
     */
    transitionHide: {
      type: String,
    },
    /**
     * Transition duration (in milliseconds, without unit)
     * @type {String|Number}
     */
    transitionDuration: {
      type: [String,Number],
    },
    /**
     * Size in CSS units, including unit name, or standard size name (xs|sm|md|lg|xl), for the inner Spinner (unless using the default slot)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * State - loading or not
     * @type {Boolean}
     */
    showing: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette for the inner Spinner (unless using the default slot)
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Add a label; Gets overriden when using the default slot
     * @type {String}
     */
    label: {
      type: String,
    },
    /**
     * Add CSS class(es) to the label; Works along the 'label' prop only
     * @type {String}
     */
    labelClass: {
      type: String,
    },
    /**
     * Apply custom style to the label; Works along the 'label' prop only
     * @type {String|Array|Object}
     */
    labelStyle: {
      type: [String,Array,Object],
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    }
  }
}
