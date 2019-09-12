<template>
  <div>
    <q-header
      elevated
      class="row justify-center bg-white"
    >
      <q-toolbar class="col-md-10">
        <q-btn
          class="lt-md"
          flat outline dense round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-btn
          :to="`${isScreenMd ? '' : '/'}`"
          flat
          stretch
          no-caps
          :class="{ 'full-width q-pl-none' : isScreenMd }"
          style="max-width: 50px; max-heigth: 24px"
        >

          <!-- <img :src="isScreenMd ? iconImgPath : avatarImgPath"> -->

          <q-toolbar-title
            shrink
            class="on-left text-black"
          >
            {{ appName }}
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <!-- navs links -->
        <q-item
          v-for="nav in navs"
          :key="nav"
          :to="{ name: nav }"
          exact
          v-ripple
          class="gt-sm text-capitalize text-black"
        >
          <q-item-section>
            <q-item-label>{{ $t(nav) }}</q-item-label>
          </q-item-section>
        </q-item>

        <!-- locale-dropdown component -->
        <locale-dropdown gt-sm />

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
export default {
  name: 'TheHeader',

  data () {
    return {
      navs: ['home', 'evaluation', 'how'],
      appName: process.env.APP_NAME,
      leftDrawerOpen: !this.$q.platform.is.desktop,
      avatarImgPath: 'statics/logo.svg',
      iconImgPath: 'statics/icons/ba4dfc0ede2db9337c4fcf82bedf78d6.png'
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
