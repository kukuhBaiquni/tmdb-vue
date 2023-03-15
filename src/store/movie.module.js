import { getMovieNowPlaying } from '../api/movies'
import notify from '../lib/toastify'

const t = {
  SET_NOW_PLAYING_MOVIE: 'SET_NOW_PLAYING_MOVIE'
}

const state = {
  nowPlayingMovies: [],
  searchResults: [],
  filterResults: []
}

const getters = {
  nowPlayingMovies: (_) => _.nowPlayingMovies
}

const mutations = {
  [t.SET_NOW_PLAYING_MOVIE]: (state, payload) => {
    state.nowPlayingMovies = payload
  }
}

const actions = {
  async getNowPlayingMovie(ctx) {
    try {
      const response = await getMovieNowPlaying()
      ctx.commit(t.SET_NOW_PLAYING_MOVIE, response.results)
    } catch(err) {
      console.log(err)
      notify({
        type: 'error',
        message: 'An error occurred!'
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}