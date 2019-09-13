<template>
  <div>
    <q-scroll-observer @scroll="scrollHandler" />

    <q-header
      id="home"
      :elevated="onScrollHeaderBg"
      class="row justify-center"
      :class="onScrollHeaderBg && $route.path === '/' ? 'fill-color' : 'fill-transparent'"
    >
      <q-toolbar class="col-md-10">
        <q-btn
          class="lt-md text-black"
          flat outline dense round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-btn
          :to="`${isScreenMd ? '' : '/'}`"
          flat stretch no-caps
          :class="{
            'full-width q-pl-none absolute-center' : isScreenMd
          }"
          class="flex"
          style="max-width: 50px; max-heigth: 24px"
        >
          <img
            :src="avatarImgPath"
            :style="isScreenMd ? 'height: 48px' : 'height: 78px'"
          >
        </q-btn>

        <q-space />

        <!-- navs links -->
        <q-item
          v-for="nav in navs"
          :key="nav"
          clickable
          @click="goTo(nav)"
          class="gt-sm text-capitalize"
        >
          <q-item-section>
            <q-item-label
              class="text-h6 font-nav"
              :class="{
                'on-transparent-bg': onScrollHeaderBg,
                'on-color-bg': !onScrollHeaderBg
              }">
              {{ $t(nav) }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown
          :on-scroll-header-bg="onScrollHeaderBg"
          gt-sm />

      </q-toolbar>
    </q-header>

    <!-- sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      :width="160"
      content-class="bg-grey-2"
    >
      <q-list>
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item
          v-for="nav in navs"
          :key="nav"
          :to="{ name: nav }"
          exact
          exact-active-class
          class="text-center text-capitalize text-dark"
        >
          <q-item-section>
            <q-item-label>{{ $t(nav) }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown arrow-right />
      </q-list>
    </q-drawer>

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
  name: 'TheHeader',
  data () {
    return {
      navs: ['home', 'responsability', 'sustainable', 'suggestions'],
      appName: process.env.APP_NAME,
      leftDrawerOpen: false,
      avatarImgPath: 'statics/logo.png',
      iconImgPath: 'statics/icons/ba4dfc0ede2db9337c4fcf82bedf78d6.png',
      sizeVH: 0,
      onScrollHeaderBg: false
    }
  },
  mounted () {
    this.sizeVH = Math.max(document.documentElement.clientHeight, window.innerHeight)
  },
  watch: {
    '$route.path' (val) {
      console.log('val. :', val)
    }
  },
  methods: {
    scrollHandler ({ position }) {
      console.log('info :', position)
      if (position > this.sizeVH) {
        this.onScrollHeaderBg = true
      } else {
        this.onScrollHeaderBg = false
      }
    },
    goTo (el) {
      console.log('el :', el)
      scrollToElement(document.getElementById(el))
    }
  },
  computed: {
    isScreenMd () {
      return this.$q.screen.lt.md
    }
  }
}
</script>

<style lang="stylus" scoped>
.fill-color
  background-color: white
.fill-transparent
  background-color: transparent

/* navs text styles for active/no active link */
/*.q-item {
  color: #000;
  font-size: 16px;
  font-weight: 600;

  &:not(.q-router-link--active) {
    opacity: 1;
    font-weight: 400;
  }
}

.border-primary {
  border: 1px solid $primary;
}*/
</style>
