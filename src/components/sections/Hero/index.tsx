import { HeroSection } from '../../../styles/components/sections/Hero'
import Image from 'next/image'

import hero from '@/assets/Image.png'
import igma from '@/assets/logotipoIgma.svg'

export default function Hero() {
  return (
    <HeroSection>
      <div className='hero-container'>
        <div className='hero-image-container'>
          <Image quality={100} src={hero}  alt="hero image" />
        </div>
        
        <div className='hero-info-container'>
          <div className='d-flex align-center hero-info-presentation'>
            <span>Prazer, somos</span>
            <Image quality={85} src={igma} height={30} width={73}  alt="igma logo" />
          </div>
          <h1>Acreditamos em um mundo onde experiências incríveis são essenciais.</h1>
          <h2>Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.</h2>
        </div>
      </div>
    </HeroSection>
  )
}