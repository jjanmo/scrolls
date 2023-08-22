import { PropsWithChildren } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Nav />
      <main className="min-h-[calc(100vh-7rem)] pt-[3.5rem]">{children}</main>
      <Footer />
    </div>
  )
}
