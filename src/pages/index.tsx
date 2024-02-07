import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'

import Head from 'next/head'
import { HomeContainer } from '@/styles/Home'

export default function Home() {
  return (
    <>
    <Head>
      <title>Igma</title>
    </Head>
    <HomeContainer>
      <Header />
      <Hero />
    </HomeContainer>
    </>
 
  )
}