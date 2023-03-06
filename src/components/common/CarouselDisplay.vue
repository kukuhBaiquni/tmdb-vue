<script>
import { Carousel, Slide } from 'vue3-carousel'
import GENRE from '../../constants/genre'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'CarouselDisplay',
  data: function () {
    return {
      IMAGE_URL: import.meta.env.VITE_IMAGE_URL,
      GENRE,
    }
  },
  computed: {
    genres() {
      return (ids) => {
        const genre = ids.map((id) => this.GENRE[id]).join`, `
        return genre
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
}
</script>

<template>
  <div class="max-w-screen-xl block">
    <Carousel
      :autoplay="5000"
      :items-to-show="2"
      :settings="{ snapAlign: 'start' }"
      :wrap-around="false"
    >
      <Slide v-for="movie in data" :key="movie?.id">
        <div class="mr-4 relative bg-transparent">
          <div
            class="poster-mask w-full h-full absolute left-0 bottom-0 z-10 rounded-xl"
          />
          <img
            :src="`${IMAGE_URL}/original${movie.backdrop_path}`"
            class="w-full h-[350px] object-cover"
            alt="vingo"
          />
          <div class="absolute bottom-4 left-4 z-20 w-1/2">
            <h3 class="text-3xl font-bold text-left">
              {{ movie?.title }}
            </h3>
            <div class="flex gap-1 mt-1">
              <span class="text-xs uppercase">{{
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
