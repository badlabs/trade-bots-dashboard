
/**
 * Quasar QVideo component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/video|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QVideo',
  props: {
    /**
     * Aspect ratio for the content; If value is a String, then avoid using a computational statement (like '16/9') and instead specify the String value of the result directly (eg. '1.7777')
     * @type {String|Number}
     */
    ratio: {
      type: [String,Number],
    },
    /**
     * The source url to display in an iframe
     * @type {String}
     */
    src: {
      type: String,
      required: true
    },
    /**
     * (Accessibility) Set the native 'title' attribute value of the inner iframe being used
     * @type {String}
     */
    title: {
      type: String,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the iframe document
     * @type {'high'|'low'|'auto'}
     */
    fetchpriority: {
      type: String,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the iframe document
     * @type {'high'|'low'|'auto'}
     */
    'fetchpriority="high"': {
      type: Boolean,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the iframe document
     * @type {'high'|'low'|'auto'}
     */
    'fetchpriority="low"': {
      type: Boolean,
    },
    /**
     * Provides a hint of the relative priority to use when fetching the iframe document
     * @type {'high'|'low'|'auto'}
     */
    'fetchpriority="auto"': {
      type: Boolean,
    },
    /**
     * Indicates how the browser should load the iframe
     * @type {'eager'|'lazy'}
     */
    loading: {
      type: String,
    },
    /**
     * Indicates how the browser should load the iframe
     * @type {'eager'|'lazy'}
     */
    'loading="eager"': {
      type: Boolean,
    },
    /**
     * Indicates how the browser should load the iframe
     * @type {'eager'|'lazy'}
     */
    'loading="lazy"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    referrerpolicy: {
      type: String,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="noReferrer"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="noReferrerWhenDowngrade"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="origin"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="originWhenCrossOrigin"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="sameOrigin"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="strictOrigin"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="strictOriginWhenCrossOrigin"': {
      type: Boolean,
    },
    /**
     * Indicates which referrer to send when fetching the frame's resource
     * @type {'no-referrer'|'no-referrer-when-downgrade'|'origin'|'origin-when-cross-origin'|'same-origin'|'strict-origin'|'strict-origin-when-cross-origin'|'unsafe-url'}
     */
    'referrerpolicy="unsafeUrl"': {
      type: Boolean,
    }
  }
}
