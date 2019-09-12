import langService from '@/services/i18n.service'

export const state = {
  locale: langService.getCurrentLocale(),
  locales: langService.getLocales()
}

export const mutations = {
  SET_LOCALE: (state, locale) => {
    state.locale = locale
    langService.setLocale(locale)
  }
}
