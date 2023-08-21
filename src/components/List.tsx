import Card from './Card'
import { useRecruits } from '@/apis/recruits'
import Spinner from './iocns/Spinner'

export default function List() {
  const { data, isLoading } = useRecruits({ page: 1 })
  console.log(data)

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center opacity-70">
        <Spinner size={200} />
      </div>
    )

  return (
    <ul className="mx-auto mt-10 grid w-[900px] grid-cols-3 grid-rows-3 justify-items-center gap-x-20 gap-y-8">
      {data?.recruits.map((recruit) => <Card key={recruit.id} {...recruit} />)}
    </ul>
  )
}
