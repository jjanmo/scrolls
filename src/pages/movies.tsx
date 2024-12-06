import styled from '@emotion/styled'

import Movie from '@/components/Movie'
import { usePopularMoviesQuery } from '@/queries/tmdb'

export default function Movies() {
  const { data, isPending } = usePopularMoviesQuery()

  if (isPending) return <div>Loading...</div>

  return <List>{data?.results.map((movie) => <Movie key={movie.id} {...movie} />)}</List>
}

const List = styled.ul`
  width: fit-content;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(4, 140px);
  gap: 8px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 140px);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 140px);
  }
`
