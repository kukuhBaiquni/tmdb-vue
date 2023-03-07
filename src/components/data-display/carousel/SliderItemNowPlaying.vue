<script>
import GENRE from '../../../constants/genre'

/**
 * @module components/data-display/carousel/SliderItemNowPlaying
 * @desc Component for wrapping carousel item display
 * @vue-prop {Object} movie - Object data for displayed in carousel item
 * {@link https://developers.themoviedb.org/3/movies/get-now-playing tmdb-api response}
 * @vue-data {Object} GENRE - List data for mapping genre ids
 *
 * @vue-computed {String} genres - Function for merging array of string genre
 * @see {@link constants/genres}
 */

export default {
  name: 'SliderItemNowPlaying',
  data: function () {
    return {
      GENRE,
      IMAGE_URL: import.meta.env.VITE_IMAGE_URL,
    }
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    genres() {
      return (ids) => {
        const genre = ids.map((id) => this.GENRE[id]).join`, `
        return genre
      }
    },
  },
}
</script>

<template>
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
</template>
