import { css } from '@emotion/react'
import Link from 'next/link'

import Logo from '@/components/icons/Logo'
import routes from '@/constants/routes'
import { HEADER_HEIGHT, MAX_WIDTH } from '@/constants/styles'
import { palette } from '@/styles/theme'

export default function Header() {
  return (
    <header css={containerStyle}>
      <div css={contentStyle}>
        <div css={logoWrapperStyle}>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <ul css={navStyle}>
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

const containerStyle = css`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${HEADER_HEIGHT}px;
  border-bottom: 1px solid ${palette.theme1};
  color: ${palette.theme4};
  background-color: ${palette.white};
`
const contentStyle = css`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  height: 100%;
  padding: 0 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const logoWrapperStyle = css`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const navStyle = css`
  display: flex;
  gap: 20px;
  list-style: none;
`
