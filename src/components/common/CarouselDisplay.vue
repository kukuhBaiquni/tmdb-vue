<script>
import { Carousel, Slide } from 'vue3-carousel'
import GENRE from '../../constants/genre'
import 'vue3-carousel/dist/carousel.css'
import clsx from 'clsx'

/**
 * @module components/common/CarouselDisplay
 * @desc Component for displaying data
 * @vue-prop {Array} [data=[]] - Slides to display in carousel
 * @vue-data {String} IMAGE_URL - Static url prefix for displaying image from tmdb
 */

export default {
  name: 'CarouselDisplay',
  data: function () {
    return {
      IMAGE_URL: import.meta.env.VITE_IMAGE_URL,
      GENRE,
      currentPage: 1,
    }
  },
  computed: {
    genres() {
      return (ids) => {
        const genre = ids.map((id) => this.GENRE[id]).join`, `
        return genre
      }
    },
    activeDot() {
      return (index) => {
        return clsx(
          'rounded-full h-2 t',
          this.currentPage === index - 1 ? 'w-8 bg-pink-600' : 'w-3 bg-gray-400'
        )
      }
    },
  },
  components: {
    Carousel,
    Slide,
  },
  props: {
    data: {
      default: () => [],
      type: Array,
    },
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
    slideStart(prop) {
      this.currentPage = prop.slidingToIndex
    },
    slideTo(index) {
      this.$refs.carousel.slideTo(index - 1)
    },
  },
}
</script>

<template>
  <div class="max-w-screen-xl block relative group">
    <Carousel
      v-model="currentPage"
      @slide-start="slideStart"
      ref="carousel"
      :autoplay="3000"
      :items-to-show="2"
      :settings="{ snapAlign: 'start' }"
      :wrap-around="true"
    >
      <Slide v-for="movie in data" :key="movie?.id">
        <div class="relative bg-transparent">
          <div class="overflow-hidden">
            <div
              class="poster-mask w-full h-full absolute left-0 bottom-0 z-10 rounded-xl"
            />
            <img
              :src="`${IMAGE_URL}/original${movie.backdrop_path}`"
              class="w-full h-[350px] object-cover"
              alt="vingo"
            />
          </div>
          <div class="absolute bottom-4 left-4 z-20">
            <h3 class="text-3xl font-bold text-left">
              {{ movie?.title }}
            </h3>
            <div class="flex gap-1 mt-1">
              <span class="text-xs uppercase text-left">{{
                genres(movie.genre_ids)
              }}</span>
              <!-- <div v-for="id in movie.genre_ids" :key="id">
              </div> -->
            </div>
            <button
              type="button"
              class="flex items-center justify-center bg-pink-600 py-1 px-4 rounded mt-2 text-sm"
            >
              Watch Trailler
              <i class="bx bx-play-circle text-xl ml-2"></i>
            </button>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="flex justify-between absolute top-1/2 z-50 w-full">
      <button
        @click="prev"
        type="button"
        class="hover:bg-opacity-70 rounded-full fc t translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      >
        <i class="bx bx-chevron-left text-5xl"></i>
      </button>
      <button
        @click="next"
        type="button"
        class="hover:bg-opacity-70 rounded-full fc t -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      >
        <i class="bx bx-chevron-right text-5xl"></i>
      </button>
    </div>
    <div class="fc gap-1 mt-4">
      <button
        @click="slideTo(page)"
        :title="data[page - 1].title"
        type="button"
        v-for="page in data.length"
        :class="activeDot(page)"
        :key="page"
      ></button>
    </div>
  </div>
  <div>
    <h6 class="text-xl mb-4 font-bold">Popular Movies</h6>
    <div v-for="movie in data" :key="movie.id">
      <div class="flex gap-4 mb-4">
        <div class="overflow-hidden rounded-xl">
          <img
            :src="`${IMAGE_URL}/original${movie.backdrop_path}`"
            class="w-[110px] h-[150px] object-cover hover:transform hover:scale-125 t"
            alt="vingo"
          />
        </div>
        <h6>{{ movie.title }}</h6>
      </div>
    </div>
  </div>
</template>
