import useSWR from 'swr'
import { API } from '..'
import { RecruitResponse } from './types'
import { AxiosResponse } from 'axios'

export const getRecruits = ({ page }: { page: number }) =>
  API.get<AxiosResponse<RecruitResponse>>(`/jptest?page=${page}`).then((res) => res.data.data)

export const useRecruits = ({ page }: { page: number }) => useSWR(`@recruit-${page}`, () => getRecruits({ page }))
