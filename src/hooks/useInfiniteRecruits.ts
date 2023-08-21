import { API } from '@/apis'
import { RecruitResponse } from '@/apis/recruits/types'
import { AxiosResponse } from 'axios'
import { useMemo } from 'react'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

export const LIMIT_PAGE = 4
export const LIMIT_ITEM_PER_PAGE = 9

export default function useInfiniteRecruits() {
  /** @param pageIndex 0부터 들어옴 */
  const getKey: SWRInfiniteKeyLoader = (pageIndex: number) => {
    if (pageIndex + 1 > LIMIT_PAGE) return null

    return `/jptest?page=${pageIndex + 1}`
  }
  const fetcher = (url: string) => API.get<AxiosResponse<RecruitResponse>>(url).then((res) => res.data.data.recruits)

  const { data, isLoading, isValidating, setSize, size, error } = useSWRInfinite(getKey, fetcher, {
    revalidateFirstPage: false,
  })

  const recruits = useMemo(() => {
    if (data) {
      const flatted = data.flat()
      return flatted
    }

    return []
  }, [data])

  return {
    isLoading,
    isValidating,
    recruits,
    setPage: setSize,
    currentPage: size,
    error,
  }
}
