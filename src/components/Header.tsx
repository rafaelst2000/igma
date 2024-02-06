import { HeaderContainer } from '@/styles/components/Header'
import Image from 'next/image'

import headerLogo from '@/assets/LogoHeader.svg'
import Avatar from './Avatar'

export default function Header() {
  return (
    <HeaderContainer>
     {/*  <div className='logo-container'>
        <Image src={headerLogo} style={{ maxWidth: '100%', height: 'auto' }}  alt="logo header" />
      </div> */}
      <div className='header-content'>
        <Avatar />
      </div>
    </HeaderContainer>
 
  )
}