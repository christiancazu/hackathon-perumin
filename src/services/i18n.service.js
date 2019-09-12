import Cookies from 'js-cookie'
import Vue from 'vue'
import { Validator } from 'vee-validate'

import { FALLBACK_LOCALE, LOCALES } from '@/config'

export default {
  /**
   * return locale if are cached in cookies
   * or by default in window.config.locale(script)
   *
   * @returns {String} locale:'es-es'
   */
  getCurrentLocale: () => Cookies.get('locale') || FALLBACK_LOCALE,

  /**
   * return array locales in window.config.locale(script)
   *
   * @returns {String} locales:{en:'en-us',es:'es-es'}
   */
  getLocales: () => LOCALES,

  /**
   * set locale lang in : Cookies | i18n(in prototype $locale) | vee-validate
   *
   *
   * @param {String} locale
   */
  setLocale: (locale) => {
    Cookies.set('locale', locale, { expires: 365 })
    Vue.prototype.$locale.change(locale)
    Validator.localize(locale)
  }

}
