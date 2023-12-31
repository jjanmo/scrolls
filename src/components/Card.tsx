import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { cloneDeep } from 'lodash'
import { RecruitItem } from '@/apis/recruits/types'
import { bookmarkActions } from '@/store/bookmarkSlice'
import Star from './iocns/Star'
import Won from './iocns/Won'
import Bookmark from './iocns/Bookmark'

export default function Card(props: RecruitItem) {
  const { pathname } = useRouter()
  const { id, image, company, title, skills, appeal, reward_text, reward, bookmark } = props

  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState<boolean>(bookmark)

  const handleClick = () => {
    if (isActive) {
      dispatch(bookmarkActions.deleteBookmark({ id }))
    } else {
      const newItem = cloneDeep(props)
      dispatch(bookmarkActions.addBookmark({ data: newItem }))
    }
    setIsActive((prev) => !prev)
  }

  return (
    <div className="relative h-[378px] w-[294px] overflow-hidden rounded-lg border-[1px] border-gray03">
      {pathname === '/' && (
        <button className="absolute right-3 top-3 z-[1] cursor-pointer" onClick={handleClick}>
          <Bookmark isActive={isActive} />
        </button>
      )}

      <div className="relative h-[180px] w-[294px]">
        <Image src={image} sizes="100%" alt="company thumbnail" fill className="object-cover" priority />
      </div>

      <div className="px-5 py-2">
        <div className="border-b-[1px] border-gray03 py-2">
          <div className="truncate text-xl font-bold leading-8 text-gray01">{title}</div>
          <div className="truncate text-xs font-normal leading-4 text-gray02">{skills.join(', ')}</div>
        </div>

        <div className="border-b-[1px] border-gray03 py-3">
          <div className="flex items-center pb-2">
            <div className="relative h-[24px] w-[24px]">
              <Image src={company.logo} sizes="100%" fill className="object-cover" alt="company icon" />
            </div>
            <span className="truncate px-2 text-base font-bold text-gray01">{company.name}</span>
            <Star size={16} style={{ transform: 'translateY(-1.5px)' }} />
            <div className="mx-1 flex items-center font-bold text-gray01">
              {company.grade} <span className="mx-1 font-normal text-gray02">({company.grade_count})</span>
            </div>
          </div>
          <div className="text-ellipsis text-sm text-gray02">{appeal}</div>
        </div>

        <div className="flex items-center py-2">
          <Won />
          <div className="py- text-sm font-bold">취업 축하금 : {reward_text || `${reward / 10000} 만원`}</div>
        </div>
      </div>
    </div>
  )
}
