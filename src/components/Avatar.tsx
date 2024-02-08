import { AvatarContainer } from '@/styles/components/Avatar'
import Image from 'next/image'
import { User } from 'phosphor-react'

interface AvatarProps {
  onClick: () => void
  image?: string
}

export default function Avatar({ onClick, image = '' }: AvatarProps) {
  return (
    <AvatarContainer logged={!!image} onClick={onClick}>
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
