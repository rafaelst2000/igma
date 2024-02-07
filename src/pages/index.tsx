import Head from 'next/head'

import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Clients from '@/components/sections/Clients'

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
      <Clients />
    </HomeContainer>
    </>
 
  )
}