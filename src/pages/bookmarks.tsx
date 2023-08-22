import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RecruitItem } from '@/apis/recruits/types'
import { RootState } from '@/store/root'
import { bookmarkActions } from '@/store/bookmarkSlice'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Star from '@/components/iocns/Star'

export default function Bookmark() {
  const bookmarks = useSelector<RootState, RecruitItem[]>((state) => state.bookmark.data, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      // 북마크를 리셋하는 이유 : README 참고
      dispatch(bookmarkActions.resetBookmark())
    }
  }, [dispatch])

  return (
    <Layout>
      {bookmarks.length === 0 && (
        <div className="flex h-[calc(100vh-10.5rem)] w-full items-center justify-center text-2xl text-gray02">
          <Star size={40} />
          <span className="mx-6">북마크한 채용공고가 없습니다.</span>
          <Star size={40} />
        </div>
      )}

      {bookmarks.length > 0 && (
        <ul className="mx-auto my-10 grid w-[900px] grid-cols-3 justify-items-center gap-x-20 gap-y-8">
          {bookmarks.map((bookmark) => (
            <Card key={bookmark.id} {...bookmark} />
          ))}
        </ul>
      )}
    </Layout>
  )
}
