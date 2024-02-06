import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  background: 'transparent',
  width: '100%',
  height: 80,

  '.logo-container': {
    width: 120,
    position: 'absolute',
    left: 0,
  }, 

  '.header-content': {
    maxWidth: 1624,
    height: '100%',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  '@media screen and (max-width: 1440px)': {
    '.header-content': {
      maxWidth: 1296
    },
  },

  '@media screen and (max-width: 1280px)': {
    '.header-content': {
      maxWidth: 944
    },

    '.logo-container': {
      width: '80px !important',
    }
  },

  '@media screen and (max-width: 1024px)': {
    '.logo-container': {
      width: 'calc(100% - 20px)',
    }
  },
})