import type { FC } from 'react'

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
]

export default routes
