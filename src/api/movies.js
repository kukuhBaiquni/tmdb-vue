
import API from './'

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