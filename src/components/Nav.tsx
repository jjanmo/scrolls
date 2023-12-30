import { useRouter } from 'next/router'
import Link from 'next/link'
import Logo from './iocns/Logo'

export default function Nav() {
  const { pathname } = useRouter()

  return (
    <header className="fixed top-0 z-10 flex h-14 w-full min-w-[1000px] items-center border-b-[1px] border-gray03 bg-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-14 scale-125">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className="ml-48 flex h-full justify-start">
        <li className={`mx-3 border-b-2 ${pathname === '/' ? 'border-theme3' : 'border-transparent'}`}>
          <Link href="/" className="hover:text-theme3 flex h-full w-full items-center px-5 text-gray01 transition-all">
            Dev JD
          </Link>
        </li>
        <li className={`mx-3 border-b-2 ${pathname === '/bookmarks' ? 'border-theme3' : 'border-transparent'} `}>
          <Link
            href="/bookmarks"
            className="hover:text-theme3 flex h-full w-full items-center px-5  text-gray01 transition-all"
          >
            Bookmarks
          </Link>
        </li>

        <li className={`mx-3 border-b-2  ${pathname === '/movies' ? 'border-theme3' : 'border-transparent'}`}>
          <Link
            href="/movies"
            className="hover:text-theme3 flex h-full w-full items-center px-5  text-gray01 transition-all"
          >
            Movies
          </Link>
        </li>
      </ul>
    </header>
  )
}
