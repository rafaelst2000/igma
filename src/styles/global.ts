import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    'box-sizing': 'border-box',
  },

  html: {
    'scroll-behavior': 'smooth',
  },
/* 
  '::-webkit-scrollbar-track': {
    borderRadius: 999,
    backgroundColor: '$gray-700',
  },

  '::-webkit-scrollbar': {
    width: 6,
    backgroundColor: '$gray-700',
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: 999,
    backgroundColor: '$gray-600',
  }, */

  'body, button, input, textarea': {
    fontFamily: '$jakarta',
  },

  body: {
    backgroundColor: '$background-01',
    color: '$dark-main',
  },

  ul: {
    listStyle: 'none',
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
    outline: 'none',
  },

  '.d-flex': {
    display: 'flex',
  },

  '.align-center': {
    alignItems: 'center',
  } 
})
