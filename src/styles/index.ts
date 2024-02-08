import { createStitches } from '@stitches/react'
import { Plus_Jakarta_Sans as plusJakartaSans } from 'next/font/google'

const jakarta = plusJakartaSans({
  subsets: ['latin'],
  weight: ['800', '700', '600', '400', '300'],
  display: 'swap',
})

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      'primary-light': '#F3C96F',
      'primary-main': '#F1BC4B',
      'primary-dark': '#A88334',
      'primary-contrast': '#211E1E',
      'primary-background': '#FDF4E3',

      'secondary-light': '#F38F6F',
      'secondary-main': '#F1734B',
      'secondary-dark': '#A85034',
      'secondary-contrast': '#211E1E',
      'secondary-background': '#FDE9E3',

      'tertiary-light': '#9E604C',
      'tertiary-main': '#863920',
      'tertiary-dark': '#5D2716',
      'tertiary-contrast': '#F0EFEE',
      'tertiary-background': '#F4E5E1',

      'dark-secondary': '#565454',
      'dark-main': '#333333',
      'dark-highlight': '#211E1E',
      'dark-contrast': '#FFFFFF',
      'dark-disable': '#AEAEAE',

      'light-secondary': '#F5F5F5',
      'light-main': '#EDEDED',
      'light-highlight': '#D6D5D5',
      'light-contrast': '#FFFFFF',

      'background-01': '#FFFFFF',

      'error-light': '#ef5350',
      'error-main': '#D32F2F',
      'error-dark': '#C62828',
    },

    fonts: {
      jakarta: `${jakarta.style.fontFamily}, sans-serif`,	
    },

    fontSizes: {
      'xxxs': '12px',
      'xxs': '14px',
      'xs': '16px',
      'sm': '20px',
      'md': '24px',
      'lg': '32px',
      'xl': '40px',
      'xxl': '48px',
      'xxxl': '64px',
      'display': '80px',
      'giant': '96px',
    },

    lineHeights: {
      'xxs': '100%',
      'xs': '115%',
      'sm': '120%',
      'md': '133%',
      'lg': '150%',
      'xl': '175%',
    },

    fontWeights: {
      'md': '500',
      'sb': '600',
    },

    letterSpacings: {
      'default': '0px',
      'sm': '-1px',
      'md': '-2px',
      'lg': '-3px'
    },

    borderWidths: {
      'none': '0px',
      'hairline': '1px',
      'sm': '2px',
      'thick': '3px',
      'heavy': '4px'
    },

    radii: {
      'none': '0px',
      'sm': '8px',
      'md': '16px',
      'lg': '24px',
      'pill': '500px',
      'circular': '50%',
    },

    space: {
      'inline-squarck': '4px',
      'inline-nano': '8px',
      'inline-xxxs': '16px',
      'inline-xxs': '24px',
      'inline-xs': '32px',
      'inline-sm': '40px',
      'inline-md': '48px',
      'inline-lg': '64px',
      'inline-xl': '80px',

      'stack-squarck': '4px',
      'stack-nano': '8px',
      'stack-xxxs': '16px',
      'stack-xxs': '24px',
      'stack-xs': '32px',
      'stack-sm': '40px',
      'stack-md': '48px',
      'stack-lg': '56px',
      'stack-xl': '64px',
      'stack-xxl': '80px',
      'stack-xxxl': '120px',
      'stack-huge': '160px',
      'stack-giant': '200px',
    }
  },
})
