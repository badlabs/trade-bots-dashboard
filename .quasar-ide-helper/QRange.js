
/**
 * Quasar QRange component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/range|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QRange',
  props: {
    /**
     * Emitted on lazy model value change (after user slides then releases the thumb)
     * @param {*} value New model value 
     */      
    '@change': function (value) {},

    /**
     * Triggered when user starts panning on the component
     * @param {'start'|'end'} phase Phase of panning 
     */      
    '@pan': function (phase) {},

    /**
     * Emitted when the component needs to change the model; Is also used by v-model
     * @param {*} value New model value 
     */      
    '@update:model-value': function (value) {},
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     * @type {String}
     */
    name: {
      type: String,
    },
    /**
     * Minimum value of the model; Set track's minimum value
     * @type {Number}
     */
    min: {
      type: Number,
    },
    /**
     * Maximum value of the model; Set track's maximum value
     * @type {Number}
     */
    max: {
      type: Number,
    },
    /**
     * Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop
     * @type {Number}
     */
    innerMin: {
      type: Number,
    },
    /**
     * Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop
     * @type {Number}
     */
    innerMax: {
      type: Number,
    },
    /**
     * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
     * @type {Number}
     */
    step: {
      type: Number,
    },
    /**
     * Snap on valid values, rather than sliding freely; Suggestion: use with 'step' prop
     * @type {Boolean}
     */
    snap: {
      type: Boolean,
    },
    /**
     * Work in reverse (changes direction)
     * @type {Boolean}
     */
    reverse: {
      type: Boolean,
    },
    /**
     * Display in vertical direction
     * @type {Boolean}
     */
    vertical: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    color: {
      type: String,
    },
    /**
     * Color name for the track (can be 'transparent' too) from the Quasar Color Palette
     * @type {String}
     */
    trackColor: {
      type: String,
    },
    /**
     * Apply a pattern image on the track
     * @type {String}
     */
    trackImg: {
      type: String,
    },
    /**
     * Color name for the inner track (can be 'transparent' too) from the Quasar Color Palette
     * @type {String}
     */
    innerTrackColor: {
      type: String,
    },
    /**
     * Apply a pattern image on the inner track
     * @type {String}
     */
    innerTrackImg: {
      type: String,
    },
    /**
     * Color name for the selection bar (can be 'transparent' too) from the Quasar Color Palette
     * @type {String}
     */
    selectionColor: {
      type: String,
    },
    /**
     * Apply a pattern image on the selection bar
     * @type {String}
     */
    selectionImg: {
      type: String,
    },
    /**
     * Popup a label when user clicks/taps on the slider thumb and moves it
     * @type {Boolean}
     */
    label: {
      type: Boolean,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    labelColor: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    labelTextColor: {
      type: String,
    },
    /**
     * Switch the position of the label (top <-> bottom or left <-> right)
     * @type {Boolean}
     */
    switchLabelSide: {
      type: Boolean,
    },
    /**
     * Always display the label
     * @type {Boolean}
     */
    labelAlways: {
      type: Boolean,
    },
    /**
     * Display markers on the track, one for each possible value for the model or using a custom step (when specifying a Number)
     * @type {Boolean|Number}
     */
    markers: {
      type: [Boolean,Number],
    },
    /**
     * Configure the marker labels (or show the default ones if 'true'); Array of definition Objects or Object with key-value where key is the model and the value is the marker label definition
     * @type {Boolean|Array|{value : Number, label : Number|String, classes : String|Array|Object, style : Object}|Function}
     */
    markerLabels: {
      type: [Boolean,Array,Object,Function],
    },
    /**
     * CSS class(es) to apply to the marker labels container
     * @type {String}
     */
    markerLabelsClass: {
      type: String,
    },
    /**
     * Switch the position of the marker labels (top <-> bottom or left <-> right)
     * @type {Boolean}
     */
    switchMarkerLabelsSide: {
      type: Boolean,
    },
    /**
     * Track size (including CSS unit)
     * @type {String}
     */
    trackSize: {
      type: String,
    },
    /**
     * Thumb size (including CSS unit)
     * @type {String}
     */
    thumbSize: {
      type: String,
    },
    /**
     * Color name for component from the Quasar Color Palette
     * @type {String}
     */
    thumbColor: {
      type: String,
    },
    /**
     * Set custom thumb svg path
     * @type {String}
     */
    thumbPath: {
      type: String,
    },
    /**
     * Notify the component that the background is a dark color
     * @type {Boolean}
     */
    dark: {
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
     * Put component in disabled mode
     * @type {Boolean}
     */
    disable: {
      type: Boolean,
    },
    /**
     * Put component in readonly mode
     * @type {Boolean}
     */
    readonly: {
      type: Boolean,
    },
    /**
     * Tabindex HTML attribute value
     * @type {Number|String}
     */
    tabindex: {
      type: [Number,String],
    },
    /**
     * Model of the component of type { min, max } (both values must be between global min/max); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     * @type {{min : Number|null, max : Number|null}|null|undefined}
     */
    modelValue: {
      type: [Object,null,undefined],
      required: true
    },
    /**
     * User can drag range instead of just the two thumbs
     * @type {Boolean}
     */
    dragRange: {
      type: Boolean,
    },
    /**
     * User can drag only the range instead and NOT the two thumbs
     * @type {Boolean}
     */
    dragOnlyRange: {
      type: Boolean,
    },
    /**
     * Color name for left label background from the Quasar Color Palette
     * @type {String}
     */
    leftLabelColor: {
      type: String,
    },
    /**
     * Color name for left label text from the Quasar Color Palette
     * @type {String}
     */
    leftLabelTextColor: {
      type: String,
    },
    /**
     * Color name for right label background from the Quasar Color Palette
     * @type {String}
     */
    rightLabelColor: {
      type: String,
    },
    /**
     * Color name for right label text from the Quasar Color Palette
     * @type {String}
     */
    rightLabelTextColor: {
      type: String,
    },
    /**
     * Override default label for min value
     * @type {String|Number}
     */
    leftLabelValue: {
      type: [String,Number],
    },
    /**
     * Override default label for max value
     * @type {String|Number}
     */
    rightLabelValue: {
      type: [String,Number],
    },
    /**
     * Color name (from the Quasar Color Palette) for left thumb
     * @type {String}
     */
    leftThumbColor: {
      type: String,
    },
    /**
     * Color name (from the Quasar Color Palette) for right thumb
     * @type {String}
     */
    rightThumbColor: {
      type: String,
    }
  }
}
