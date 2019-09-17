<template>
  <q-page>

    <banner-home />

    <div id="responsability">
      <section-info-home
        v-for="(sih, index) in sectionInfoHome"
        :key="index"
        :reverse="sih.reverse"
        :title="$t(`t_${index + 1}`)"
        :text="$t(`m_${index + 1}`)"
        :src="`statics/mine/${index + 1}.jpg`"
      />
    </div>

    <section-title :text="$t('ttt_1')"/>

    <u-animate-container class="q-my-xl">
    <u-animate
      name="bounceIn"
      delay=".5s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
      class="col-xs-12"
    >
      <div class="q-mx-xl">
        <block-quote type="secondary">
          <p class="text-h5 q-pa-sm">{{ $t('mmm_1') }}</p>
        </block-quote>
      </div>
    </u-animate>
  </u-animate-container>

    <section-info-sosteinable />

    <section-suggestions />

    <div id="suggestions" class="text-center">
      <q-btn
        class="ff"
        style="height: 96px; width: 96px; font-size: 64px"
        fab
        icon="volume_up"
        color="primary" />
        <h1>
          {{ $t('voice_community') }}
        </h1>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      slide: 1,
      isScreenDesktop: this.$q.platform.is.desktop,
      sectionInfoHome: [
        { reverse: false, title: 'foo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { reverse: true, title: 'foo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        { reverse: false, title: 'foo', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }
      ]
    }
  }
}
</script>

<style scope>
.q-page-container {
  padding-top: 0px !important
}
.ff {
  font-size: 64px !important;
}
</style>
