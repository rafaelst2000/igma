import { styled } from '@stitches/react'

export const InputContainer = styled('div', {
  background: 'transparent',
  borderBottom: '2px solid $dark-highlight',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: '$dark-highlight',
  transition: '0.2s',

  '&:focus-within': {
    border: '1px solid $primary-main',
    borderBottom: '2px solid $dark-highlight',
  },

  '&:hover': {
    borderBottom: '3px solid $dark-highlight',
  },

  variants: {
    error: {
      true: {
        borderBottomColor: '$error-main',
      },
    },
  },

  input: {
    height: 64,
    flex: 1,
    border: 'none',
    color: '$dark-highlight',
    fontSize: '$md',
    fontWeight: '$md',
    lineHeight: '$xl',
    background: 'transparent',

    '&:focus': {
      fontWeight: '$sb',
      outline: 'none',
    },
  },

  '@media screen and (max-width: 1440px)': {
    input: {
      height: 56,
      fontSize: '$xs',
    },
  },
})

export const ErrorMessage = styled('span', {
  color: '$error-dark',
  fontSize: '$xxxs',
  fontWeight: '$md',
  lineHeight: '$lg',
})
