import { styled } from '@stitches/react'

export const AvatarContainer = styled('button', {
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    borderRadius: '$circular',
    width: 48,
    height: 48,
  },

  variants: {
    logged: {
      false: {
        borderRadius: '$circular',
        borderWidth: '$thin',
        borderColor: 'transparent',
        borderStyle: 'solid',
        backgroundColor: '$primary-main',
        svg: {
          color: '$primary-contrast',
        },

        '&:focus': {
          borderColor: '$primary-contrast',
          backgroundColor: '$primary-light',
        },

        '&:hover': {
          transition: '0.2s',
          background: '$primary-light',
        },

        '&:active': {
          color: '$primary-dark',
        },

        '&:disabled': {
          background: '$dark-disable',
          color: '$light-secondary',
          cursor: 'not-allowed',
        },
      },
      true: {
        border: '$none',
        backgroundColor: 'transparent',
      },
    },
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
