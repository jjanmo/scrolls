import { useRecruits } from '@/apis/recruits'
import Layout from '@/components/Layout'
import List from '@/components/List'

export default function Home() {
  const { data } = useRecruits({ page: 1 })
  console.log(data)

  return <Layout>{data && <List {...data} />}</Layout>
}
