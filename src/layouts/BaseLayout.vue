<template>
  <q-layout view="lHh Lpr lFf">

    <the-header />

    <q-page-container>

      <transition
        name="page"
        mode="out-in">

        <router-view />

      </transition>

    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'BaseLayout'
}
</script>
