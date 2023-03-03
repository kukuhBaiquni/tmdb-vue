<script>
import { getMovieNowPlaying } from '../api/movies'

export default {
  mounted() {
    this.getMovie()
  },
  methods: {
    async getMovie() {
      const response = await getMovieNowPlaying()
      console.log(response)
    },
  },
}
</script>
<template>
  <main class="bg-red-300 w-full h-full">vovo</main>
</template>
