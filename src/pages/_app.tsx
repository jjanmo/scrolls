import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '@/store/root'
import { Global } from '@emotion/react'
import { globalStyles } from '@/styles/globalStyle'

export default function App({ Component, ...pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Provider>
  )
}
