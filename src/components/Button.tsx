import { ButtonContainer } from '@/styles/components/Button'
import { ButtonHTMLAttributes } from 'react'
import { CSS } from '@stitches/react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  css?: CSS
}

export const Button = ({ label, css, ...props }: ButtonProps) => {
  return (
    <ButtonContainer css={css} {...props}>
      {label}
    </ButtonContainer>
  )
}
