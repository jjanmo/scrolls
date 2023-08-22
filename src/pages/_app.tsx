import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { store } from '@/store/root'
import '@/styles/globals.css'

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          dedupingInterval: 200,
          revalidateOnFocus: false,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  )
}
