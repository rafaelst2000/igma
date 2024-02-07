import { styled } from '@stitches/react'

export const FooterContainer = styled('footer', {
  maxWidth: '1624px',
  padding: '$stack-xxxl 24px',
  margin: '0 auto',
  borderColor: '#000',

  '.footer-text': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '$stack-sm',

    p: {
      fontSize: '$md',
      $fontWeight: "$md",
      lineHeight: '$lg',
      color: '$dark-main'
    }
  },

  '@media screen and (max-width: 1440px)': {
    padding: '$stack-xxl 24px',
    maxWidth: 1296,

    '.footer-text': {
      p: {
        fontSize: '$xs',
      }
    },
  },

  '@media screen and (max-width: 1280px)': {
    padding: '$stack-xxl 24px',
    maxWidth: 944,

    '.footer-text': {
      p: {
        fontSize: '$xxs',
      }
    },
  },

  '@media screen and (max-width: 1024px)': {
    padding: '$stack-xxl 24px',
    maxWidth: '100%',

    '.footer-text': {
      display: 'block',
  
      p: {
        fontSize: '$xxs',
      },

      'p + p': {
        marginTop: '$stack-nano'
      }
    },
  },
})