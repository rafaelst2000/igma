import { InputContainer, ErrorMessage } from '@/styles/components/Input'
import { InputHTMLAttributes } from 'react'
import { CSS } from '@stitches/react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
  errorMessage?: string,
  css?: CSS
}

export const Input = ({ error, errorMessage, css, ...props }: InputProps) => {
  return (
    <>
      <InputContainer error={error} css={css}>
        <input {...props} />
      </InputContainer>
      {error && errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  )
}
