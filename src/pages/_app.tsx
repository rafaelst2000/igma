import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
globalStyles()

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      throttleDelay: 300,
    })
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
