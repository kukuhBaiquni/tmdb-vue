
import API from './'
/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
export const getMovieNowPlaying = async (params) => 
  API({
    method: 'GET',
    url: '/movie/now_playing',
    params
  })