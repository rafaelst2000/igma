import { styled } from '@stitches/react'

export const AvatarContainer = styled('div', {
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$circular',
  
  img: {
    borderRadius: '$circular',
    width: 48,
    height: 48,
  },

  '@media screen and (max-width: 1280px)': {
    width: 40,
    height: 40,

    img: {
      width: 40,
      height: 40,
    },
  },
})