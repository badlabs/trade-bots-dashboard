
/**
 * Quasar QImg component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/img|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QImg',
  props: {
    /**
     * Emitted when image has been loaded by the browser
     * @param {String} src URL of image that has been loaded; useful when using 'srcset' and/or 'sizes' 
     */      
    '@load': function (src) {},

    /**
     * Emitted when browser could not load the image
     * @param {Error} src JS Error object 
     */      
    '@error': function (src) {},
    /**
     * Force the component to maintain an aspect ratio
     * @type {String|Number}
     */
    ratio: {
      type: [String,Number],
    },
    /**
     * Path to image
     * @type {String}
     */
    src: {
      type: String,
    },
    /**
     * Same syntax as <img> srcset attribute
     * @type {String}
     */
    srcset: {
      type: String,
    },
    /**
     * Same syntax as <img> sizes attribute
     * @type {String}
     */
    sizes: {
      type: String,
    },
    /**
     * While waiting for your image to load, you can use a placeholder image
     * @type {String}
     */
    placeholderSrc: {
      type: String,
    },
    /**
     * Use it when not specifying 'ratio' but still wanting an initial aspect ratio
     * @type {String|Number}
     */
    initialRatio: {
      type: [String,Number],
    },
    /**
     * Forces image width; Must also include the unit (px or %)
     * @type {String}
     */
    width: {
      type: String,
    },
    /**
     * Forces image height; Must also include the unit (px or %)
     * @type {String}
     */
    height: {
      type: String,
    },
    /**
     * Lazy or immediate load; Same syntax as <img> loading attribute
     * @type {'lazy'|'eager'}
     */
    loading: {
      type: String,
    },
    /**
     * Lazy or immediate load; Same syntax as <img> loading attribute
     * @type {'lazy'|'eager'}
     */
    'loading="lazy"': {
      type: Boolean,
    },
    /**
     * Lazy or immediate load; Same syntax as <img> loading attribute
     * @type {'lazy'|'eager'}
     */
    'loading="eager"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> crossorigin attribute
     * @type {'anonymous'|'use-credentials'}
     */
    crossorigin: {
      type: String,
    },
    /**
     * Same syntax as <img> crossorigin attribute
     * @type {'anonymous'|'use-credentials'}
     */
    'crossorigin="anonymous"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> crossorigin attribute
     * @type {'anonymous'|'use-credentials'}
     */
    'crossorigin="useCredentials"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> decoding attribute
     * @type {'sync'|'async'|'auto'}
     */
    decoding: {
      type: String,
    },
    /**
     * Same syntax as <img> decoding attribute
     * @type {'sync'|'async'|'auto'}
     */
    'decoding="sync"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> decoding attribute
     * @type {'sync'|'async'|'auto'}
     */
    'decoding="async"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> decoding attribute
     * @type {'sync'|'async'|'auto'}
     */
    'decoding="auto"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    referrerpolicy: {
      type: String,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="noReferrer"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="noReferrerWhenDowngrade"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="origin"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="originWhenCrossOrigin"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="sameOrigin"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="strictOrigin"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="strictOriginWhenCrossOrigin"': {
      type: Boolean,
    },
    /**
     * Same syntax as <img> referrerpolicy attribute
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="unsafeUrl"': {
      type: Boolean,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the image
     * @type {'high'|'low'|'auto'}
     */
    fetchpriority: {
      type: String,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the image
     * @type {'high'|'low'|'auto'}
     */
    'fetchpriority="high"': {
      type: Boolean,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the image
     * @type {'high'|'low'|'auto'}
     */
    'fetchpriority="low"': {
      type: Boolean,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the image
     * @type {'high'|'low'|'auto'}
     */
    'fetchpriority="auto"': {
      type: Boolean,
    },
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     * @type {'cover'|'fill'|'contain'|'none'|'scale-down'}
     */
    fit: {
      type: String,
    },
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     * @type {'cover'|'fill'|'contain'|'none'|'scale-down'}
     */
    'fit="cover"': {
      type: Boolean,
    },
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     * @type {'cover'|'fill'|'contain'|'none'|'scale-down'}
     */
    'fit="fill"': {
      type: Boolean,
    },
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     * @type {'cover'|'fill'|'contain'|'none'|'scale-down'}
     */
    'fit="contain"': {
      type: Boolean,
    },
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     * @type {'cover'|'fill'|'contain'|'none'|'scale-down'}
     */
    'fit="none"': {
      type: Boolean,
    },
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     * @type {'cover'|'fill'|'contain'|'none'|'scale-down'}
     */
    'fit="scaleDown"': {
      type: Boolean,
    },
    /**
     * The alignment of the image into the container; Equivalent of the object-position CSS prop
     * @type {String}
     */
    position: {
      type: String,
    },
    /**
     * Specifies an alternate text for the image, if the image cannot be displayed
     * @type {String}
     */
    alt: {
      type: String,
    },
    /**
     * Adds the native 'draggable' attribute
     * @type {Boolean}
     */
    draggable: {
      type: Boolean,
    },
    /**
     * CSS classes to be attributed to the native img element
     * @type {String}
     */
    imgClass: {
      type: String,
    },
    /**
     * Apply CSS to the native img element
     * @type {Object}
     */
    imgStyle: {
      type: Object,
    },
    /**
     * Color name for default Spinner (unless using a 'loading' slot)
     * @type {String}
     */
    spinnerColor: {
      type: String,
    },
    /**
     * Size in CSS units, including unit name, for default Spinner (unless using a 'loading' slot)
     * @type {String}
     */
    spinnerSize: {
      type: String,
    },
    /**
     * Do not display the default spinner while waiting for the image to be loaded; It is overriden by the 'loading' slot when one is present
     * @type {Boolean}
     */
    noSpinner: {
      type: Boolean,
    },
    /**
     * Disables the native context menu for the image
     * @type {Boolean}
     */
    noNativeMenu: {
      type: Boolean,
    },
    /**
     * Disable default transition when switching between old and new image
     * @type {Boolean}
     */
    noTransition: {
      type: Boolean,
    }
  }
}
