import Bookmark from '@/components/iocns/Bookmark'
import { FC } from 'react'

interface Route {
  path: string
  text: string
  icon?: FC
}

const routes: Route[] = [
  {
    path: '/movies',
    text: 'Movies',
  },
  {
    path: '/bookmarks',
    icon: Bookmark,
    text: 'Bookmarks',
  },
]

export default routes
