import { HeaderContainer } from '@/styles/components/Header'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Avatar from './Avatar'

export default function Header() {
  const session = useSession()
  const user = session?.data?.user

  function handleLogin() {
    if (session.status === 'authenticated') {
      signOut()
    } else {
      signIn('google')
    }
  }

  return (
    <HeaderContainer data-aos="fade-down">
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
        <Avatar onClick={handleLogin} image={user?.image ?? ''} />
      </div>
    </HeaderContainer>
  )
}
