<template>
  <u-animate-container class="q-my-xl">
    <u-animate
      name="zoomIn"
      delay=".5s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
      class="col-xs-12"
    >
      <h1 class="text-center">{{ text }}</h1>
    </u-animate>
  </u-animate-container>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: ['text']
}
</script>

<style>

</style>
