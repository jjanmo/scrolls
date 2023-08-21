import { RecruitItem } from '@/apis/recruits/types'
import Card from './Card'

interface Props {
  recruits: RecruitItem[]
}

export default function List({ recruits }: Props) {
  return (
    <ul className="mx-auto mt-10 grid w-[900px] grid-cols-3 grid-rows-3 justify-items-center gap-x-20 gap-y-8">
      {recruits.map((recruit) => (
        <Card key={recruit.id} {...recruit} />
      ))}
    </ul>
  )
}
