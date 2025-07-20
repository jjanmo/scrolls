import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { tmdbApi } from '@/apis'
import type { MoviesResponse } from '@/types/tmdb'

const getPopularMovies = ({ page = 1 }: { page?: number } = {}) =>
  tmdbApi.get<MoviesResponse>(`/movie/popular?language=ko-KR&page=${page}`)

export const usePopularMoviesQuery = ({ page = 1 }: { page?: number } = {}) => {
  return useQuery({
    queryKey: ['popularMovies', page],
    queryFn: () => getPopularMovies({ page }).then((res) => res.data),
  })
}

export const useInfinitePopularMoviesQuery = () => {
  return useInfiniteQuery({
    queryKey: ['popularMovies'],
    queryFn: ({ pageParam = 1 }) => getPopularMovies({ page: pageParam }).then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  })
}
