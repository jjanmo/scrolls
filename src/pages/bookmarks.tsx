import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RecruitItem } from '@/apis/recruits/types'
import { RootState } from '@/store/root'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Star from '@/components/iocns/Star'
import { useEffect } from 'react'
import { bookmarkActions } from '@/store/bookmarkSlice'

export default function Bookmark() {
  const bookmarks = useSelector<RootState, RecruitItem[]>((state) => state.bookmark.data, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      // 북마크를 리셋하는 이유 : README 참고
      dispatch(bookmarkActions.resetBookmark())
    }
  }, [])

  return (
    <Layout>
      {bookmarks?.length === 0 && (
        <div className="flex min-h-[calc(100vh-220px)] w-full items-center justify-center text-2xl text-gray02">
          <Star size={40} />
          <span className="mx-6">북마크한 채용공고가 없습니다.</span>
          <Star size={40} />
        </div>
      )}

      {bookmarks.length > 0 && (
        <ul className="mx-auto mt-10 grid min-h-[calc(100vh-220px)] w-[900px] grid-cols-3 justify-items-center gap-x-20 gap-y-8">
          {bookmarks.map((bookmark) => (
            <Card key={bookmark.id} {...bookmark} />
          ))}
        </ul>
      )}
    </Layout>
  )
}
