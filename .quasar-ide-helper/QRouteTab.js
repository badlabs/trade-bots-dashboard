
/**
 * Quasar QRouteTab component
 * 
 * @see {@link https://v1.quasar-framework.org/vue-components/route-tab|Quasar Docs} (Generated link, may not always work)
 */  
export default {
  name: 'QRouteTab',
  props: {
    /**
     * Emitted when component is clicked (activated)
     * @param {Event} evt JS event object; If you want to cancel navigation set synchronously 'evt.navigate' to false 
     * @param {Function} navigateFn When you need to control the time at which the tab should trigger the route navigation then set 'evt.navigate' to false and call this function; Useful if you have async work to be done before the actual route navigation 
     */      
    '@click': function (evt,navigateFn) {},
    /**
     * Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used
     * @type {String|Object}
     */
    to: {
      type: [String,Object],
    },
    /**
     * Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used
     * @type {Boolean}
     */
    exact: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used
     * @type {Boolean}
     */
    replace: {
      type: Boolean,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used
     * @type {String}
     */
    activeClass: {
      type: String,
    },
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used
     * @type {String}
     */
    exactActiveClass: {
      type: String,
    },
    /**
     * Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props
     * @type {String}
     */
    href: {
      type: String,
    },
    /**
     * Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props
     * @type {String}
     */
    target: {
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
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)
     * @type {String}
     */
    icon: {
      type: String,
    },
    /**
     * A number or string to label the tab
     * @type {Number|String}
     */
    label: {
      type: [Number,String],
    },
    /**
     * Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color
     * @type {Boolean|String}
     */
    alert: {
      type: [Boolean,String],
    },
    /**
     * Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop
     * @type {String}
     */
    alertIcon: {
      type: String,
    },
    /**
     * Panel name
     * @type {Number|String}
     */
    name: {
      type: [Number,String],
    },
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     * @type {Boolean}
     */
    noCaps: {
      type: Boolean,
    },
    /**
     * Class definitions to be attributed to the content wrapper
     * @type {String}
     */
    contentClass: {
      type: String,
    },
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     * @type {Boolean|Object}
     */
    ripple: {
      type: [Boolean,Object],
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
