import { wrapper } from '@/store/root'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 200,
        revalidateOnFocus: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default wrapper.withRedux(App)
