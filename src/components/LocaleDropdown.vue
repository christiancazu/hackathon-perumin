<template>
  <q-btn-dropdown
    :label="locale"
    :menu-anchor="menuAnchor"
    flat stretch
    icon="language"
    class="text-h6"
    :class="{
      'gt-sm': gtSm,
      'arrow-right full-width q-py-md': arrowRight,
      'on-transparent-bg': onScrollHeaderBg,
      'on-color-bg': !onScrollHeaderBg
    }"
    :style="arrowRight ? 'text-shadow: none' : ''"
  >
    <q-list separator>
      <q-item
        v-for="(value, index) in locales" :key="index"
        clickable v-close-popup
        class="text-center"
      >
        <q-item-section>
          <q-item-label @click="setLocale(value)">
            {{ value | languageName }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </q-btn-dropdown>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LocaleDropdown',

  props: {
    gtSm: { type: Boolean, default: false }, // gt-sm class mode
    arrowRight: { type: Boolean, default: false }, // custom arrow direction
    onScrollHeaderBg: { type: Boolean, default: false }
  },
  computed: {
    ...mapState('i18n', ['locale', 'locales']),

    // bottom right is for default from quasar
    menuAnchor () {
      return this.arrowRight ? 'top left' : 'bottom right'
    }
  },
  methods: {
    // change locale language
    setLocale (locale) {
      this.$store.commit('i18n/SET_LOCALE', locale)
    }
  },
  filters: {
    languageName (val) {
      return val === 'en' ? 'English' : val === 'es' ? 'Español' : 'Quechua'
    }
  }
}
</script>

<style lang="stylus">
/* nav dropdown opacity no active */
.q-btn__content {
  // opacity: .8
}
/* customs modifications to arrow direction on dropdown */
/* dropdown arrow */

</style>
