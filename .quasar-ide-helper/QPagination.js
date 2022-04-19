
/**
 * Quasar QPagination component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/pagination|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QPagination',
  props: {
    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {String} value New model value 
     */      
    '@update:model-value': function (value) {},
    /**
     * Current page (must be between min/max)
     * @type {Number}
     */
    modelValue: {
      type: Number,
      required: true
    },
    /**
     * Minimum page (must be lower than 'max')
     * @type {Number}
     */
    min: {
      type: Number,
    },
    /**
     * Number of last page (must be higher than 'min')
     * @type {Number}
     */
    max: {
      type: Number,
      required: true
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    textColor: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    activeColor: {
      type: String,
    },
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     * @type {String}
     */
    activeTextColor: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color (useful when you are using it along with the 'input' prop)
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
    },
    /**
     * Style definitions to be attributed to the input (if using one)
     * @type {String|Array|Object}
     */
    inputStyle: {
      type: [String,Array,Object],
    },
    /**
     * Class definitions to be attributed to the input (if using one)
     * @type {String|Array|Object}
     */
    inputClass: {
      type: [String,Array,Object],
    },
    /**
     * Button size in CSS units, including unit name
     * @type {String}
     */
    size: {
      type: String,
    },
    /**
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Use an input instead of buttons
     * @type {Boolean}
     */
    input: {
      type: Boolean,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    iconPrev: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    iconNext: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    iconFirst: {
      type: String,
    },
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    iconLast: {
      type: String,
    },
    /**
     * Generate link for page buttons; For best performance, reference it from your scope and do not define it inline
     * @type {Function}
     */
    toFn: {
      type: Function,
    },
    /**
     * Show boundary button links
     * @type {Boolean}
     */
    boundaryLinks: {
      type: Boolean,
    },
    /**
     * Always show first and last page buttons (if not using 'input')
     * @type {Boolean}
     */
    boundaryNumbers: {
      type: Boolean,
    },
    /**
     * Show direction buttons
     * @type {Boolean}
     */
    directionLinks: {
      type: Boolean,
    },
    /**
     * Show ellipses (...) when pages are available
     * @type {Boolean}
     */
    ellipses: {
      type: Boolean,
    },
    /**
     * Maximum number of page links to display at a time; 0 means Infinite
     * @type {Number}
     */
    maxPages: {
      type: Number,
    },
    /**
     * Configure buttons material ripple (disable it by setting it to 'false' or supply a config object); Does not applies to boundary and ellipsis buttons
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
    },
    /**
     * Makes a circle shaped button for all buttons
     * @type {Boolean}
     */
    round: {
      type: Boolean,
    },
    /**
     * Applies a more prominent border-radius for a squared shape button for all buttons
     * @type {Boolean}
     */
    rounded: {
      type: Boolean,
    },
    /**
     * Use 'flat' design for current page button
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
    },
    /**
     * Use 'outline' design for current page button
     * @type {Boolean}
     */
    outline: {
      type: Boolean,
    },
    /**
     * Remove shadow for current page button
     * @type {Boolean}
     */
    unelevated: {
      type: Boolean,
    },
    /**
     * Use 'push' design for current page button
     * @type {Boolean}
     */
    push: {
      type: Boolean,
    },
    /**
     * Applies a glossy effect for all buttons
     * @type {Boolean}
     */
    glossy: {
      type: Boolean,
    },
    /**
     * Dense mode; occupies less space
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
    },
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     * @type {String}
     */
    padding: {
      type: String,
    }
  }
}
