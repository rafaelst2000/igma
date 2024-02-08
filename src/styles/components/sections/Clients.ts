import { styled } from '@stitches/react'

export const ClientsSection = styled('section', {
  padding: '98px 24px',
  maxWidth: 1672,
  margin: '0 auto',
  display: 'grid',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(400px, 525px) 1fr',
  gap: '162px',

  h2: {
    width: '100%',
    fontSize: '$lg',
    fontWeight: '$sb',
    lineHeight: '$lg',
    textAlign: 'left',
    color: '$dark-main',
  },

  '.clients-grid': {
    maxWidth: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 242px)',
    justifyContent: 'space-between',
  },
  
  '@media screen and (max-width: 1440px)': {
    padding: '94px 24px',
    maxWidth: 1344,
    gridTemplateColumns: '421px 1fr',
    gap: '126px',

    h2: {
      fontSize: '$md',
    },
  
    '.clients-grid': {
      gridTemplateColumns: 'repeat(3, 210px)',

      img: {
        width: 210,
        height: 153
      }
    },
  },

  '@media screen and (max-width: 1280px)': {
    padding: '$stack-xxl 24px',
    maxWidth: 992,
    justifyContent: 'space-between',
    gridTemplateColumns: '304px 1fr',
    gap: 99,

    h2: {
      fontSize: '$xs',
    },
  
    '.clients-grid': {
      columnGap: 0,
      justifyContent: 'center',
      gridTemplateColumns: 'repeat(3, 1fr)',

      img: {
        width: '100%',
        height: 'auto',
      }
    },
  },

  '@media screen and (max-width: 1024px)': {
    padding: '$stack-xxl 24px',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$stack-sm',

    h2: {
      width: '100%',
      fontSize: '$xs',
    },
  
    '.clients-grid': {
      maxWidth: '100%',
      gridTemplateColumns: 'repeat(2, 1fr) !important',
      columnGap: 0,

      img: {
        width: '100%',
        height: 124,
        justifySelf: 'center',
      }
    },
  },
})