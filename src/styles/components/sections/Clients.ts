import { styled } from '@stitches/react'

export const ClientsSection = styled('section', {
  padding: '98px 24px',
  maxWidth: 1624,
  margin: '0 auto',
  display: 'grid',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(400px, 525px) 937px',
  gap: 'auto',

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
    maxWidth: 1296,
    gridTemplateColumns: '421px 749px',
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
    maxWidth: 944,
    justifyContent: 'space-between',
    gridTemplateColumns: '304px 544px',

    h2: {
      fontSize: '$xs',
    },
  
    '.clients-grid': {
      columnGap: 0,
      justifyContent: 'center',

      img: {
        width: 170,
        height: 124
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
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: 0,

      img: {
        width: 170,
        height: 124,
        justifySelf: 'center',
      }
    },
  },
})