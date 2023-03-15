import { getMovieNowPlaying, searchMovie } from '../api/movies'
import notify from '../lib/toastify'

const t = {
  SET_NOW_PLAYING_MOVIE: 'SET_NOW_PLAYING_MOVIE',
  SET_SEARCH_MOVIE: 'SET_SEARCH_MOVIE'
}

const state = {
  nowPlayingMovies: [],
  searchResults: [],
  filterResults: []
}

const getters = {
  nowPlayingMovies: _ => _.nowPlayingMovies,
  searchResults: _ => _.searchResults
}

const mutations = {
  [t.SET_NOW_PLAYING_MOVIE]: (state, payload) => {
    state.nowPlayingMovies = payload
  },
  [t.SET_SEARCH_MOVIE]: (state, payload) => {
    state.searchResults = payload
  }
}

const actions = {
  async getNowPlayingMovie(ctx) {
    try {
      const response = await getMovieNowPlaying()
      ctx.commit(t.SET_NOW_PLAYING_MOVIE, response.results)
    } catch(err) {
      notify({
        type: 'error',
        message: 'An error occurred!'
      })
    }
  },
  async getSearchMovie(ctx, params) {
    try {
      const response = await searchMovie(params)
      ctx.commit(t.SET_SEARCH_MOVIE, response.results)
    } catch(err) {
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