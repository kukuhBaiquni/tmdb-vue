<script>
import CarouselDisplay from '../components/data-display/carousel/CarouselDisplay.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CarouselDisplay,
  },
  computed: {
    ...mapGetters('movies', {
      movies: 'nowPlayingMovies',
    }),
  },
  mounted() {
    this.$store.dispatch('movies/getNowPlayingMovie')
  },
  methods: {
    ...mapActions({
      getNowPlayingMovie: 'getNowPlayingMovie',
    }),
  },
}
</script>
<template>
  <div class="w-full">
    <div class="max-w-screen-xl mx-auto">
      <h5 class="my-4 text-xl font-bold text-gray-800 uppercase">
        Now Playing
      </h5>
      <CarouselDisplay :data="movies" />
    </div>
  </div>
</template>
