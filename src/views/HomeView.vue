<script>
import { getMovieNowPlaying } from '../api/movies'
import CarouselDisplay from '../components/data-display/carousel/CarouselDisplay.vue'
import AppBar from '../components/block/appbar/AppBar.vue'
import InputBase from '../components/form/InputBase.vue'

export default {
  data: function () {
    return {
      movies: [],
    }
  },
  components: {
    CarouselDisplay,
    AppBar,
    InputBase,
  },
  mounted() {
    this.getMovie()
  },
  methods: {
    async getMovie() {
      const response = await getMovieNowPlaying()
      this.movies = response.results
    },
  },
}
</script>
<template>
  <main class="w-full h-full">
    <AppBar />
    <div class="w-full">
      <div class="max-w-screen-xl mx-auto">
        <h5 class="my-4 text-xl font-bold text-gray-800 uppercase">
          Now Playing
        </h5>
        <CarouselDisplay :data="movies" />
        <InputBase
          className="w-[300px] border border-white border-opacity-70 rounded flex items-center focus-within:border-pink-600 t"
        />
      </div>
    </div>
  </main>
</template>
