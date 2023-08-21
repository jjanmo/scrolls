import { RecruitItem } from '@/apis/recruits/types'
import Image from 'next/image'
import Star from './iocns/Star'
import Won from './iocns/Won'
import Bookmark from './iocns/Bookmark'

export default function Card({ id, image, company, title, skills, appeal, reward_text, bookmark }: RecruitItem) {
  const handleClick = (id: number) => () => {
    // TODO 즐겨찾기 리덕스 추가
    console.log(id)
  }

  return (
    <div className="relative h-[378px] w-[294px] overflow-hidden rounded-lg border-[1px] border-gray03">
      <button className="absolute right-3 top-3 z-[1] cursor-pointer" onClick={handleClick(id)}>
        <Bookmark />
      </button>

      <div className="relative h-[180px] w-[294px]">
        <Image src={image} sizes="100%" alt="company thumbnail" fill className="object-cover" priority />d
      </div>

      <div className="px-5 py-2">
        <div className="border-b-[1px] border-gray03 py-2">
          <div className="truncate text-xl font-bold leading-8 text-gray01">{title}</div>
          <div className="truncate text-xs font-normal leading-4 text-gray02">{skills.join(', ')}</div>
        </div>

        <div className="border-b-[1px] border-gray03 py-3">
          <div className="flex items-center pb-2">
            <Image src={company.logo} width={24} height={24} alt="company icon" />
            <span className="px-2 text-base font-bold text-gray01">{company.name}</span>
            <Star isActive={bookmark} size={16} style={{ transform: 'translateY(-1.5px)' }} />
            <div className="mx-1 flex items-center font-bold text-gray01">
              {company.grade} <span className="mx-1 font-normal text-gray02">({company.grade_count})</span>
            </div>
          </div>
          <div className="text-ellipsis text-sm text-gray02">{appeal}</div>
        </div>

        <div className="flex items-center py-2">
          <Won />
          <div className="py- text-sm font-bold">취업 축하금 : {reward_text}</div>
        </div>
      </div>
    </div>
  )
}
