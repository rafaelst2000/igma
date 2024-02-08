import { styled } from '@stitches/react'

export const ButtonContainer = styled('button', {
  height: 56,
  minWidth: 160,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$light-contrast',
  fontSize: '$xs',
  fontWeight: '$sb',
  lineHeight: '$lg',
  padding: '0 $inline-xxs',
  borderRadius: '$none',
  background: '$dark-highlight',
  cursor: 'pointer',

  '&:focus': {
    borderWidth: '$thin',
    borderColor: '$primary-main',
    borderStyle: 'solid',
    background: '$dark-main',
  },

  '&:hover': {
    transition: '0.2s',
    background: '$dark-main',
  },

  '&:active': {
    color: '$light-secondary',
  },

  '&:disabled': {
    background: '$dark-disable',
    color: '$light-secondary',
    cursor: 'not-allowed',
  },

  '@media screen and (max-width: 1440px)': {
    height: 48,
    minWidth: 120,
    fontSize: '$xxs',
    padding: '0 $inline-xxxs',
  },
})
