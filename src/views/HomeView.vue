<script>
import { getMovieNowPlaying } from '../api/movies'
import CarouselDisplay from '../components/data-display/carousel/CarouselDisplay.vue'
import AppBar from '../components/block/appbar/AppBar.vue'
import clsx from 'clsx'

export default {
  data: function () {
    return {
      movies: [],
      socmed: [
        { name: 'Facebook', icon: 'bx bxl-facebook', class: 'bg-blue-600' },
        { name: 'Instagram', icon: 'bx bxl-instagram', class: 'bg-pink-600' },
        { name: 'Twitter', icon: 'bx bxl-twitter', class: 'bg-cyan-600' },
        { name: 'Whatsapp', icon: 'bx bxl-whatsapp', class: 'bg-green-600' },
        { name: 'Telegram', icon: 'bx bxl-telegram', class: 'bg-blue-800' },
      ],
    }
  },
  components: {
    CarouselDisplay,
    AppBar,
  },
  mounted() {
    this.getMovie()
  },
  computed: {
    createClass() {
      return (cls) => {
        return clsx(cls, 'px-2 fc h-full rounded-sm hover:opacity-80 t')
      }
    },
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
      </div>
    </div>
  </main>
</template>
