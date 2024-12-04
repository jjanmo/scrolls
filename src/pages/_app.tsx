import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '@/store/root'
import { globalStyles } from '@/styles/globalStyle'

const queryClient = new QueryClient()

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}
