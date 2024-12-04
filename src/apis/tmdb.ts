import { tmdbApi } from '.'

export const getPopularMovies = async ({ page = 1 }: { page?: number } = {}) => {
  const response = await tmdbApi.get(`/movie/popular?language=ko-KR&page=${page}`)
  return response.data
}
