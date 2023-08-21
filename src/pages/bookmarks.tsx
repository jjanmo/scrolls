import { RecruitItem } from '@/apis/recruits/types'
import Layout from '@/components/Layout'
import { RootState } from '@/store/root'
import { shallowEqual, useSelector } from 'react-redux'

export default function Bookmark() {
  const bookmarks = useSelector<RootState, RecruitItem[]>((state) => state.bookmark.data, shallowEqual)
  console.log(bookmarks)

  return <Layout>{!bookmarks || (bookmarks.length === 0 && <div>북마크한 채용공고가 없습니다.</div>)}</Layout>
}
