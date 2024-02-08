import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'

import AOS from 'aos'
import 'aos/dist/aos.css'
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      throttleDelay: 300,
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
