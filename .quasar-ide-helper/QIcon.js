
/**
 * Quasar QIcon component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/icon|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QIcon',
  props: {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * HTML tag to render, unless no icon is supplied or it's an svg icon
     * @type {String}
     */
    tag: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Useful if icon is on the left side of something: applies a standard margin on the right side of Icon
     * @type {Boolean}
     */
    left: {
      type: Boolean,
    },
    /**
     * Useful if icon is on the right side of something: applies a standard margin on the left side of Icon
     * @type {Boolean}
     */
    right: {
      type: Boolean,
    }
  }
}
