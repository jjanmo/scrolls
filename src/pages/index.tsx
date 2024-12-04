import { useQuery } from '@tanstack/react-query'

import { getPopularMovies } from '@/apis/tmdb'
import Layout from '@/components/Layout'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: () => getPopularMovies(),
  })

  return <Layout>{JSON.stringify(data)}</Layout>
}
