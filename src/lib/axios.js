import axios from 'axios'

// eslint-disable-next-line no-undef
const BASE_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const API = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language:'en-US'
  }
})

API.interceptors.response.use(
  (res) => res?.data || res,
  (err) => {
    if (err.response.status === 401) {
      if (window.location.pathname !== '/') {
        window.location.replace('/')
      }
    }
    return {
      ...(err.response?.data || {}),
      status: err.response?.status,
    }
  }
)

export default API