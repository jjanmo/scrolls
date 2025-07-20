import { Global } from '@emotion/react'
import { HydrationBoundary, QueryClient, QueryClientProvider, type DehydratedState } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
