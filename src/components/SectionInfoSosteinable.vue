<template>
  <u-animate-container id="sustainable">
    <div class="row justify-center q-mx-lg">
    <u-animate
      v-for="(card, index) in cards"
      :key="index"
      name="bounceInUp"
      delay=".5s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false"
      class="col-xs-12 col-md-4 q-my-xl"
    >
      <q-card
        class="q-mx-lg"
        :key="index"
      >
      <img :src="card.src" style="max-height: 240px">

      <q-card-section>
        <div class="text-h6">{{ $t(`tt_${index + 1}`) }}</div>
        <p class="text-subtitle2">{{ $t(`mm_1`) }}</p>
      </q-card-section>

      <q-btn
        class="q-ma-md"
        color="primary"
        text-color="white"
        :label="$t('read_more')"
        size="md"
        push
        @click="dialog = true"
      />
    </q-card>
    </u-animate>
    </div>

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn
            dense flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn
            dense flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn
            dense flat
            icon="close"
            v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <img src="statics/mine/map.jpeg" style="height: 100%; width: 100%">
        </q-card-section>

      </q-card>
    </q-dialog>

  </u-animate-container>
</template>

<script>
export default {
  name: 'SectionInfoSosteinable',
  props: ['title'],
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      cards: [
        { src: 'statics/mine/4.jpg' },
        { src: 'statics/mine/5.jpg' },
        { src: 'statics/mine/6.jpg' }
      ]
    }
  }
}
</script>
