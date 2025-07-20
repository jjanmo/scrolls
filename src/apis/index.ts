import axios from 'axios'

const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY

export const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TMDB_API_KEY}`,
  },
})
