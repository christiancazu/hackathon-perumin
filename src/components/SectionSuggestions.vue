<template>
<div>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      style="height: 96px; width: 96px; font-size: 36px"
      fab
      icon="volume_up"
      color="primary"
      @click="goTo()" />
  </q-page-sticky>
</div>
</template>

<script>
import { scroll } from 'quasar'
const { getScrollTarget, setScrollPosition } = scroll
// takes an element object
function scrollToElement (el) {
  const target = getScrollTarget(el)
  const offset = el.offsetTop
  const duration = 500
  setScrollPosition(target, offset, duration)
}

export default {
  name: 'SectionSuggestions',
  methods: {
    goTo () {
      scrollToElement(document.getElementById('suggestions'))
    }
  }
}
</script>
<style scope>
  .q-btn--fab .q-icon {
    font-size: 48px !important;
  }
</style>
