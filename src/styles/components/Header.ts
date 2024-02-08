import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  position: 'sticky',
  top: 0,
  left: 0,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '0 auto',
  zIndex: 999,
  paddingRight: 24,

  '.logo-container': {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },

  '.logo-content': {
    width: '100%',
    maxWidth: 1672,
    display: 'flex',
    justifyContent: 'flex-end',
  },

  '@media screen and (max-width: 1440px)': {
    '.logo-content': {
      maxWidth: 1344,
    },
  },

  '@media screen and (max-width: 1280px)': {
    '.logo-content': {
      maxWidth: 992,
    },
  },

  '@media screen and (max-width: 1024px)': {
    '.logo-content': {
      maxWidth: '100%',
    },
  },
})