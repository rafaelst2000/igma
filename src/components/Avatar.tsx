import { AvatarContainer } from '@/styles/components/Avatar'
import Image from 'next/image'

import avatar from '@/assets/avatar.png'

export default function Avatar() {
  return (
    <AvatarContainer>
      <Image quality={60} src={avatar} style={{ maxWidth: '100%', height: 'auto' }}  alt="avatar" />
    </AvatarContainer>
 
  )
}