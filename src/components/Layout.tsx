import { PropsWithChildren } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navigation />
      <main className="min-h-[calc(100vh-7rem)] pt-[3.5rem]">{children}</main>
      <Footer />
    </div>
  )
}
