import Card from './Card'
import Spinner from './iocns/Spinner'
import { useEffect } from 'react'
import useInfiniteRecruits from '@/hooks/useInfiniteRecruits'

export default function List() {
  const { currentPage, setPage, isLoading, recruits } = useInfiniteRecruits()

  const handleClick = () => {
    setPage(currentPage + 1)
  }

  useEffect(() => {}, [])

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center opacity-70">
        <Spinner size={200} />
      </div>
    )

  return (
    <>
      <button onClick={handleClick}>More</button>
      <ul className="mx-auto mt-10 grid w-[900px] grid-cols-3 grid-rows-3 justify-items-center gap-x-20 gap-y-8">
        {recruits?.map((recruit) => <Card key={recruit.id} {...recruit} />)}
      </ul>
    </>
  )
}
