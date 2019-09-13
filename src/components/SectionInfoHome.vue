<template>
  <u-animate-container>
  <div
    :class="{
      'q-pa-xl' : !$q.screen.lt.md,
      'reverse': reverse
    }"
    class="row justify-center"
  >
    <u-animate
      :name="bounceDirectionNoReverse"
      delay="0s"
      duration="1s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
      class="col-xs-12 col-md-6 q-my-xl"
    >
      <q-parallax
        :src="src"
      >
      </q-parallax>
    </u-animate>
    <u-animate
      :name="bounceDirectionReverse"
      delay="0s"
      duration="1s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
      class="col-xs-12 col-md-6"
    >
      <section class="q-px-xl text-h6 text-justify">
        <div class="font-info">
          <h4 class="text-bold text-accent">
            {{ title }}
          </h4>
          <p>{{ text }}</p>
        </div>
        <q-btn
          class="q-mt-xl"
          color="primary"
          text-color="white"
          :label="$t('read_more')"
          size="xl"
          push
        />
      </section>
    </u-animate>
  </div>
  </u-animate-container>
</template>

<script>

export default {
  name: 'SectionInfoHome',
  props: {
    reverse: {
      type: Boolean, default: false
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    src: {
      type: String
    }
  },
  mounted () {
    // scrollToElement(document.getElementById('info-home'))
  },
  computed: {
    bounceDirectionReverse () {
      return this.reverse ? 'bounceInLeft' : 'bounceInRight'
    },
    bounceDirectionNoReverse () {
      return !this.reverse ? 'bounceInLeft' : 'bounceInRight'
    }
  }
}
</script>

<style>
</style>
