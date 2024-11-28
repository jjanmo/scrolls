import Link from 'next/link'
import Logo from './iocns/Logo'
import routes from '@/constants/routes'
import styled from '@emotion/styled'

export default function Navigation() {
  return (
    <Header>
      <LogoWrapper>
        <Link href="/">
          <Logo />
        </Link>
      </LogoWrapper>
      <RouteList>
        {routes.map((route) => (
          <RouteItem key={route.path}>
            <Link href={route.path}>{route.text}</Link>
          </RouteItem>
        ))}
      </RouteList>
    </Header>
  )
}

const Header = styled.header`
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RouteList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const RouteItem = styled.li``
