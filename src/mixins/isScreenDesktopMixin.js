export default {
  computed: {
    isScreenMd () {
      console.warn(this.$q.screen.lt.md)
      return this.$q.screen.lt.md
    }
  }
}
