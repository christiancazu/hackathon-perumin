import axios from 'axios'
import { Notify } from 'quasar'

const axiosInstance = axios.create({
  baseURL: ''
})

export default async ({ app, Vue, store, router }) => {
  Vue.prototype.$axios = axiosInstance

  axiosInstance.interceptors.request.use(request => {
    // #TODO: interceptors headers
    return request
  })

  axiosInstance.interceptors.response.use(response => response, error => {
    const { status } = error.response

    // #TODO: cases
    switch (status) {
      case 500:
        Notify.create({
          message: app.i18n.t('error.problem'),
          color: 'negative',
          icon: 'error'
        })
        break
      default:
        // #TODO: default
        break
    }
    return Promise.reject(error)
  })
}

export { axiosInstance }
