import { useQuery } from '@tanstack/react-query'

import { tmdbApi } from '@/apis'
import type { MoviesResponse } from '@/types/tmdb'

const getPopularMovies = ({ page = 1 }: { page?: number } = {}) =>
  tmdbApi.get<MoviesResponse>(`/movie/popular?language=ko-KR&page=${page}`)

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ['popularMovies'],
    queryFn: () => getPopularMovies().then((res) => res.data),
  })
}
