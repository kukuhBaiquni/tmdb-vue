import { createStore } from 'vuex'

import movieModule from './movie.module'

export default createStore({
  modules: {
    movies: movieModule
  }
})