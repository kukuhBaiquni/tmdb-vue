<script>
import { getMovieNowPlaying } from '../api/movies'
import CarouselDisplay from '../components/common/CarouselDisplay.vue'
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
    <header class="bg-gray-800 sticky top-0 z-[1000]">
      <div class="mx-auto flex py-3 max-w-screen-xl justify-between">
        <div class="flex gap-2 items-center">
          <i class="bx bx-camera-movie text-3xl"></i>
          <h3 class="font-bold">Movue</h3>
        </div>
        <div
          class="w-[300px] border border-white border-opacity-70 rounded flex items-center focus-within:border-pink-600 transition-all duration-300"
        >
          <input
            type="search"
            class="h-full w-full bg-transparent px-2"
            placeholder="Search Movies.."
          />
          <i
            class="bx bx-search-alt-2 text-xl px-2 border-l border-white border-opacity-70"
          ></i>
        </div>
        <div class="flex items-center gap-5 text-xl">
          <!-- <i class="bx bxs-cog"></i> -->
          <button type="button" class="relative">
            <i class="bx bxs-sun"></i>
          </button>
          <button type="button" class="relative">
            <div
              class="absolute w-2 h-2 text-[11px] bg-pink-600 rounded-full flex justify-center items-center right-0 top-0.5 font-titillium"
            ></div>
            <i class="bx bxs-bell"></i>
          </button>
          <button type="button" class="relative">
            <i class="bx bxs-user-circle"></i>
          </button>
        </div>
      </div>
      <div class="w-full bg-gray-900 px-3 py-1">
        <div class="max-w-screen-xl mx-auto flex justify-between">
          <ul class="max-w-[350px] text-sm fc gap-4">
            <li>
              <a href="#" class="hover:text-pink-600 t">Genre</a>
            </li>
            <li>Series</li>
            <li>Popular</li>
            <li>Country</li>
            <li>Recommended</li>
          </ul>
          <ul class="flex text-xl gap-1">
            <li v-for="soc in socmed" :key="soc.icon">
              <button
                type="button"
                :title="soc.name"
                :class="createClass(soc.class)"
              >
                <i :class="soc.icon"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
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
