import { styled } from '@stitches/react'

export const HeroSection = styled('section', {
  maxWidth: 1672,
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '$stack-xxxl 24px 0',

  '.hero-container': {
    padding: '0 109px 0',
    display: 'grid',
    gridTemplateColumns: '525px 663px',
    gap: 162,
    justifyContent: 'center',

    '.hero-image-container': {
      maxWidth: '100%',
      position: 'relative',
      
      img: {
        maxWidth: '100%',
        height: 'auto',
      },

      '&::after': {
        content: "url('/images/vectorHero.svg')",
        display: 'block',
        width: 60,
        height: 157,
        position: 'absolute',
        left: '-16px',
        top: '50%',
        transform: 'translateY(-50%)',
      }
    },

    '.hero-info-container': {
      '.hero-info-presentation': {
        gap: '$inline-xxxs',

        span: {
          color: '$dark-main',
          fontSize: '$md',
          fontWeight: '$md',
          lineHeight: '$sm',
        }
      },

      h1: {
        padding: '$stack-xl 0 $stack-md',
        color: '$dark-highlight',
        fontSize: '$xxl',
        fontWeight: '$sb',
        lineHeight: '$sm',
      },

      h2: {
        color: '$dark-main',
        fontSize: '$lg',
        fontWeight: '$sb',
        lineHeight: '$lg',
      },
    }
  },

  '@media screen and (max-width: 1440px)': {
    '.hero-container': {
      gridTemplateColumns: '422px 532px',
      gap: 125,

      '.hero-image-container': {

        '&::after': {
          transform: 'translateY(-89%)',
        }
      },
   
      '.hero-info-container': {
        '.hero-info-presentation': {  
          span: {
            fontSize: '$xs',
          }
        },
  
        h1: {
          fontSize: '$xl',
        },
  
        h2: {
          fontSize: '$md',
        },
      }
    },
  },

  '@media screen and (max-width: 1280px)': {
    '.hero-container': {
      gap: 96,
      gridTemplateColumns: '304px 384px',
      
      '.hero-image-container': {

        '&::after': {
          transform: 'translateY(-50%)',
        }
      },

      '.hero-info-container': {
        '.hero-info-presentation': {  
          span: {
            fontSize: '$xxs',
          }
        },
  
        h1: {
          padding: '$stack-xl 0 $stack-xs',
          fontSize: '$lg',
        },
  
        h2: {
          fontSize: '$xs',
        },
      }
    },
  },

  '@media screen and (max-width: 1024px)': {
    paddingTop: '$stack-xxs',
    '.hero-container': {
      padding: '0',
      gridTemplateColumns: '1fr',
      gap: '$stack-xxl',

      '.hero-image-container': {
        order: '2',
        height: '560px',
        maxWidth: '366px',
        paddingLeft: '24px',
        marginLeft: 'auto',

        '&::after': {
          left: '8px',
        }
      },

      '.hero-info-container': {
        padding: '0 24px 0'
      }
    },
    
  },
})