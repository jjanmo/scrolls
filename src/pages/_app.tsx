import { css } from '@emotion/css'
import { Global } from '@emotion/react'
import { HydrationBoundary, QueryClient, QueryClientProvider, type DehydratedState } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAX_WIDTH } from '@/constants/styles'
import { globalStyles } from '@/styles/globalStyle'

interface AppPropsWithDehydratedState extends AppProps {
  dehydratedState: DehydratedState
}

const queryClient = new QueryClient()

export default function App({ Component, ...pageProps }: AppPropsWithDehydratedState) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Global styles={globalStyles} />
        <>
          <Header />
          <main css={mainStyle}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}

const mainStyle = css`
  max-width: ${MAX_WIDTH}px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px);
  padding: 20px;
  margin: auto;
`
