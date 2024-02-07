import { AvatarContainer } from '@/styles/components/Avatar'
import Image from 'next/image'

export default function Avatar() {
  return (
    <AvatarContainer>
      <Image quality={60} src="/images/avatar.png" width={48} height={48} style={{ maxWidth: '100%', height: 'auto' }}  alt="avatar" />
    </AvatarContainer>
 
  )
}