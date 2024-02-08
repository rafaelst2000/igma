import { HeaderContainer } from '@/styles/components/Header'
import Image from 'next/image'

import Avatar from './Avatar'

export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <Image
          src="/images/LogoHeader.svg"
          width={120}
          height={42}
          style={{ maxWidth: '100%' }}
          alt="logo header"
        />
      </div>
      <div className="logo-content">
        <Avatar />
      </div>
    </HeaderContainer>
  )
}
