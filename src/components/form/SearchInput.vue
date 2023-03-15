<script>
import { debounce } from 'throttle-debounce'
import InputBase from './InputBase.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchInput',
  data() {
    return {
      isInputFocused: false,
    }
  },
  components: {
    InputBase,
  },
  computed: {
    ...mapGetters('movies', {
      movies: 'searchResults',
    }),
  },
  methods: {
    debounceInput: debounce(500, async function (e) {
      const { value } = e.target
      if (value) {
        this.getSearchMovie({
          query: value,
          include_adult: true,
        })
      }
    }),
    ...mapActions('movies', {
      getSearchMovie: 'getSearchMovie',
    }),
    onEnter(evt) {
      // do something
      if (evt?.key === 'Enter') {
        console.log(this.movies)
        this.onEnter()
      }
    },
    onFocus() {
      this.isInputFocused = true
      console.log('focus')
    },
    onBlur() {
      this.isInputFocused = false
    },
  },
}
</script>

<template>
  <div class="relative">
    <InputBase
      type="search"
      name="search"
      :onInput="debounceInput"
      :onEnter="onEnter"
      :onFocus="onFocus"
      :onBlur="onBlur"
    >
      <template #icon>
        <i
          class="bx bx-search-alt-2 text-xl px-2 border-l border-white border-opacity-70"
        ></i>
      </template>
    </InputBase>
    <div
      v-if="movies.length && isInputFocused"
      class="absolute h-[400px] w-full bg-white top-[42px] text-gray-800 overflow-y-auto"
    >
      <ul>
        <li
          v-for="movie in movies"
          :key="movie.id"
          class="p-2 hover:bg-gray-200"
        >
          {{ movie.title }} ({{ new Date(movie.release_date).getFullYear() }})
        </li>
      </ul>
    </div>
  </div>
</template>
