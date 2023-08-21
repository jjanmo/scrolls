import Link from 'next/link'
import Logo from './iocns/Logo'
import { useRouter } from 'next/router'

export default function Nav() {
  const { pathname } = useRouter()

  return (
    <header className="relative flex h-14 w-full min-w-[1000px] items-center border-b-[1px] border-gray03">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-14 scale-125">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className="ml-48 flex h-full justify-start">
        <li className={`mx-3 ${pathname === '/' && 'border-b-2 border-green'}`}>
          <Link href="/" className="flex h-full w-full items-center px-5 text-gray01 hover:text-green">
            채용
          </Link>
        </li>
        <li className={`mx-3 ${pathname === '/bookmarks' && 'border-b-2 border-green'}`}>
          <Link href="/bookmarks" className="flex h-full w-full items-center px-5 text-gray01  hover:text-green">
            북마크
          </Link>
        </li>
      </ul>
    </header>
  )
}
