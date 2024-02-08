import { styled } from '@stitches/react'

export const NewsletterSection = styled('section', {
  padding: '0 24px',
  maxWidth: 1672,
  margin: '0 auto',
  display: 'grid',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(400px, 525px) 1fr',
  gap: 162,

  h3: {
    width: '100%',
    fontSize: '$md',
    fontWeight: '$md',
    lineHeight: '$sm',
    textAlign: 'left',
    color: '$dark-main',
  },

  h2: {
    width: '100%',
    fontSize: '$lg',
    fontWeight: '$sb',
    lineHeight: '$lg',
    textAlign: 'left',
    color: '$dark-main',
    padding: '$stack-md 0'
  },

  '.cellphone-horizontal-carrousel': {
    display: 'none'
  },

  '.cellphones-grid': {
    maxWidth: '100%',
 
    display: 'grid',
    justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(4, minmax(161px, 193px))',
    gap: 40,

    '.carrousel-item': {
      maxWidth: '100%',
      display: 'flex !important',
      justifyContent: 'center',
      marginBottom: '40px',

      img: {
        width: '100%',
        height: 'auto',
      }
    },
  },
  
  '@media screen and (max-width: 1440px)': {
    maxWidth: 1344,
    gridTemplateColumns: '421px 1fr',
    gap: 126,

    h3: {
      fontSize: '$xs',
    },
  
    h2: {
      fontSize: '$md',
    },

    '.cellphones-grid': {  
      gridTemplateColumns: 'repeat(4, minmax(113px, 161px))',
      gap: 24,

      '.carrousel-item': {
        marginBottom: '24px',
      },
    },
  },

  '@media screen and (max-width: 1280px)': {
    maxWidth: 992,
    justifyContent: 'space-between',
    gridTemplateColumns: '304px 1fr',
    gap: 99,

    h3: {
      fontSize: '$xxs',
    },
  
    h2: {
      fontSize: '$xs',
    },
  
    '.cellphones-grid': {  
      gridTemplateColumns: 'repeat(4, minmax(90px, 113px))',
      gap: 20,
      
      '.carrousel-item': {
        marginBottom: '20px',
      },
    },
  },

  '@media screen and (max-width: 1024px)': {
    padding: '0 24px',
    maxWidth: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '$stack-xxl',

    h2: {
      fontSize: '$xs',
    },

    h3: {
      fontSize: '$xxs',
    },
    
    '.cellphones-grid': {
      display: 'none'
    },

    '.cellphone-horizontal-carrousel': {
      maxWidth: 'calc(100vw - 48px)',
      display: 'block',
  
      '.carrousel-item': {
        maxWidth: '100%',
        display: 'flex !important',
        alignItems: 'center',
    
  
        img: {
          width: '133px',
          height: '237px',
        }
      },
    },
  }, 
})