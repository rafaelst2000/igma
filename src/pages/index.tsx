import Head from 'next/head'

import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Clients from '@/components/sections/Clients'
import Newsletter from '@/components/sections/Newsletter'
import Footer from '@/components/Footer'

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
      <Newsletter />
      <Footer />
    </HomeContainer>
    </>
 
  )
}