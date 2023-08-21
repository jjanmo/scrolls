import { PropsWithChildren } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
