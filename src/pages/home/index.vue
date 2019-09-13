<template>
  <q-page>

    <banner-home />

    <div class="row justify-center q-gutter-md">
      <u-animate-container>
        <u-animate
          v-for="(card, index) in cards"
          :key="index"
          name="rollIn"
          delay="0s"
          duration="1s"
          :iteration="1"
          :offset="0"
          animateClass="animated"
          :begin="false"
        >
          <q-card
          :key="index"
          class="col-md-2"
        >
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-card-section>
            lorem
          </q-card-section>
        </q-card>
        </u-animate>
      </u-animate-container>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      slide: 1,
      cards: [
        { foo: 'bar' },
        { foo: 'bar' },
        { foo: 'bar' },
        { foo: 'bar' },
        { foo: 'bar' },
        { foo: 'bar' },
        { foo: 'bar' },
        { foo: 'bar' }
      ]
    }
  }
}
</script>

<style>
</style>
