import { usePopularMoviesQuery } from '@/queries/tmdb'

export default function Movies() {
  const { data, isPending } = usePopularMoviesQuery()

  return (
    <>
      <div>This is Movie Page</div>
      {isPending ? <div>Loading...</div> : JSON.stringify(data)}
    </>
  )
}
