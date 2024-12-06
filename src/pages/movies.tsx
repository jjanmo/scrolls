import styled from '@emotion/styled'

import Movie from '@/components/Movie'
import { useInfinitePopularMoviesQuery } from '@/queries/tmdb'
import { palette } from '@/styles/theme'

export default function Movies() {
  const { data, isPending, fetchNextPage, hasNextPage } = useInfinitePopularMoviesQuery()
  const movies = data?.pages.flatMap((page) => page.results)

  const handleMoreClick = () => {
    if (hasNextPage) fetchNextPage()
  }
  if (isPending) return <div>Loading...</div>

  return (
    <div>
      <List>{movies?.map((movie, index) => <Movie key={`${movie.id}-${index}`} {...movie} />)}</List>
      <MoreButton onClick={handleMoreClick} disabled={!hasNextPage}>
        {isPending ? 'Loading...' : 'More'}
      </MoreButton>
    </div>
  )
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

const MoreButton = styled.button`
  width: 160px;
  padding: 4px 0;
  display: block;
  margin: 0 auto;
  background-color: ${palette.blue};
  color: ${palette.white};
  border-radius: 4px;
  border-top: 1px solid transparent;

  &:disabled {
    background-color: ${palette.gray02};
    cursor: not-allowed;
  }
`
