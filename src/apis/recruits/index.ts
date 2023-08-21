import useSWR from 'swr'
import { API } from '..'
import { RecruitResponse } from './types'

export const getRecruits = ({ page }: { page: number }) => API.get(`jptest?page=${page}`).then((res) => res.data.data)
export const useRecruits = ({ page }: { page: number }) =>
  useSWR<RecruitResponse>(`@recruit-${page}`, () => getRecruits({ page }))
