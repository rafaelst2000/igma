import { AvatarContainer } from '@/styles/components/Avatar'
import { User } from 'phosphor-react'
import Image from 'next/image'

interface AvatarProps {
  onClick: () => void
  image?: string
}

export default function Avatar({ onClick, image = '' }: AvatarProps) {
  return (
    <AvatarContainer aria-label="user login" logged={!!image} onClick={onClick}>
      {image ? (
        <Image
          quality={60}
          src={image}
          width={48}
          height={48}
          style={{ maxWidth: '100%', height: 'auto' }}
          alt="user image"
        />
      ) : (
        <User size={24} />
      )}
    </AvatarContainer>
  )
}
