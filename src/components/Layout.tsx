import type { FC, PropsWithChildren } from 'react'

import { css } from '@emotion/react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAX_WIDTH } from '@/constants/styles'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

const mainStyle = css`
  max-width: ${MAX_WIDTH}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  padding: 20px;
  margin: auto;
`
