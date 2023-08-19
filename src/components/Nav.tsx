import Link from 'next/link'
import Logo from './iocns/Logo'
import { useRouter } from 'next/router'

export default function Nav() {
  const { pathname } = useRouter()

  return (
    <header className="border-gray03 relative flex h-14 w-full items-center border-b-[1px] bg-green-50">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-14 scale-125">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className="ml-48 flex h-full justify-start">
        <li className={`mx-3 ${pathname === '/' && 'border-green border-b-2'}`}>
          <Link href="/" className="text-gray01 hover:text-green flex h-full w-full items-center px-5">
            채용
          </Link>
        </li>
        <li className={`mx-3 ${pathname === '/favorites' && 'border-green border-b-2'}`}>
          <Link href="/favorites" className="text-gray01 hover:text-green flex h-full w-full items-center  px-5">
            즐겨찾기
          </Link>
        </li>
      </ul>
    </header>
  )
}
