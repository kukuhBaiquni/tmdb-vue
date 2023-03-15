
import API from '../lib/axios'

export const getMovieNowPlaying = async (params) => 
  API({
    method: 'GET',
    url: '/movie/now_playing',
    params
  })

export const getMovieUpcoming = async (params) => 
  API({
    method: 'GET',
    url: '/movie/upcoming',
    params
  })

export const searchMovie = async (params) => 
  API({
    method: 'GET',
    url: '/search/movie',
    params
  })