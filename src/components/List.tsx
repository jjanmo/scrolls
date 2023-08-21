import Card from './Card'
import Spinner from './iocns/Spinner'
import { useCallback, useEffect, useState } from 'react'
import useInfiniteRecruits, { LIMIT_PAGE } from '@/hooks/useInfiniteRecruits'
import useIntersection from '@/hooks/useIntersection'

export default function List() {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false)
  const { currentPage, setPage, isLoading, recruits } = useInfiniteRecruits()

  const onIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && currentPage <= LIMIT_PAGE) {
          setShouldLoadMore(true)
        } else {
          setShouldLoadMore(false)
        }
      })
    },
    [currentPage]
  )
  const { target } = useIntersection<HTMLDivElement>({ onIntersection })

  useEffect(() => {
    if (shouldLoadMore) {
      setPage((prev) => prev + 1)
    }
  }, [setPage, shouldLoadMore])

  if (isLoading)
    return (
      <div className="flex h-[calc(100vh-220px)] w-full items-center justify-center opacity-70">
        <Spinner size={200} />
      </div>
    )

  return (
    <>
      <ul className="mx-auto mt-10 grid w-[900px] grid-cols-3 grid-rows-3 justify-items-center gap-x-20 gap-y-8">
        {recruits?.map((recruit) => <Card key={recruit.id} {...recruit} />)}
      </ul>

      <div ref={target}></div>
      {shouldLoadMore && (
        <div className="flex w-full justify-center pt-10">
          <Spinner size={50} />
        </div>
      )}
    </>
  )
}
