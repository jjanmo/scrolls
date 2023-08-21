import { API } from '@/apis'
import { RecruitResponse } from '@/apis/recruits/types'
import { AxiosResponse } from 'axios'
import { useMemo } from 'react'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

const LIMIT_PAGE = 3 // 0부터 시작 (실제페이지 - 1)

export default function useInfiniteRecruits() {
  const getKey: SWRInfiniteKeyLoader = (pageIndex: number) => {
    if (pageIndex > LIMIT_PAGE) return null

    return `/jptest?page=${pageIndex + 1}`
  }
  const fetcher = (url: string) => API.get<AxiosResponse<RecruitResponse>>(url).then((res) => res.data.data.recruits)

  const { data, isLoading, setSize, size, error } = useSWRInfinite(getKey, fetcher)

  const recruits = useMemo(() => {
    if (data) {
      const flatted = data.flat()
      return flatted
    }

    return []
  }, [data])

  return {
    isLoading,
    recruits,
    setPage: setSize,
    currentPage: size,
    error,
  }
}
