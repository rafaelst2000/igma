import { styled } from '@stitches/react'

export const HeaderContainer = styled('header', {
  position: 'sticky',
  top: 0,
  left: 0,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1672px',
  width: '100%',
  margin: '0 auto',
  zIndex: 999,

  '@media screen and (max-width: 1440px)': {
    '.header-content': {
      maxWidth: 1344
    },
  },

  '@media screen and (max-width: 1280px)': {
    '.header-content': {
      maxWidth: 992
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