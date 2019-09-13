<template>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      class="banner-full-screen"
    >
      <q-carousel-slide
        v-for="(bannerImg, index) in bannerImgs"
        :key="index"
        :img-src="bannerImg.src"
        :name="bannerImg.name"
        class="column no-wrap flex-center"
      >
        <div class="q-mt-md text-center">
          <transition name="fadeOne">
            <div v-show="bannerImg.showTittles" class="container">
              <p class="One">{{ bannerImg.name }}</p>
            </div>
            </transition>
            <transition name="fadeTwo">
            <div v-show="bannerImg.showTittles" class="container">
              <p class="Two">{{ bannerImg.src }}</p>
            </div>
          </transition>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>
<script>
export default {
  name: 'BannerHome',
  data () {
    return {
      slide: 1,
      bannerImgs: [
        { showTittles: false, name: 1, src: 'statics/mine/mine-1.jpg' },
        { showTittles: false, name: 2, src: 'statics/mine/mine-2.jpg' },
        { showTittles: false, name: 3, src: 'statics/mine/mine-3.jpg' }
      ]
    }
  },
  mounted () {
    this.loadTextsBanner()
  },
  methods: {
    loadTextsBanner () {
      setTimeout(() => {
        this.bannerImgs[0].showTittles = true
      }, 1000)
      setTimeout(() => {
        this.bannerImgs[1].showTittles = true
      }, 6000)
      setTimeout(() => {
        this.bannerImgs[2].showTittles = true
      }, 11000)
    }
  }
}
</script>

<style scoped>
.banner-full-screen {
  min-height: 100vh;
  min-width: 100vw;
  /* background-color: #000; */
}
/* .q-carousel__slide {
  filter: opacity(.7);
} */
.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
p {
  text-align: center;
  font-size: 54px;
  overflow: hidden;
  color: white;
  margin: 1px;
  /* filter: opacity(1) !important; */
  text-shadow: 1px 1px 2px black;
}

.Two {
  font-size: 36px;
  font-family: Georgia, serif;
}

.fadeOne-enter-active, .fadeOne-leave-active {
  transition: all 1s ease-out;
}
.fadeOne-enter, .fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active, .fadeTwo-leave-active {
  transition: all 1s ease-out;
}
.fadeTwo-enter, .fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>
