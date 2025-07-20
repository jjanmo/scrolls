import styled from '@emotion/styled'
import Link from 'next/link'

import Logo from '@/components/iocns/Logo'
import routes from '@/constants/routes'
import { HEADER_HEIGHT, MAX_WIDTH } from '@/constants/styles'
import { palette } from '@/styles/theme'

export default function Header() {
  return (
    <Container>
      <Content>
        <LogoWrapper>
          <Link href="/">
            <Logo />
          </Link>
        </LogoWrapper>

        <Nav>
          {routes.map((route) => (
            <RouteItem key={route.path}>
              <Link href={route.path}>{route.text}</Link>
            </RouteItem>
          ))}
        </Nav>
      </Content>
    </Container>
  )
}

const Container = styled.header`
  height: ${HEADER_HEIGHT}px;
  color: ${palette.theme4};
  border-bottom: 1px solid ${palette.theme1};
`
const Content = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  height: 100%;
  padding: 0 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Nav = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const RouteItem = styled.li``
