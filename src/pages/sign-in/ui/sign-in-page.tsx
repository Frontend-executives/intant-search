import Image from 'next/image'
import { ReactElement } from 'react'

import { SignInLocales } from '@shared/locales/sign-in'
import { Container } from '@shared/ui/container'
import { Typography } from '@shared/ui/typography'

import { PasswordInput } from './password-input'

export const SignInPage = (): ReactElement => {
  return (
    <Container>
      <Typography type='h1'>{SignInLocales.SignInPageTitle}</Typography>

      <PasswordInput />

      <Typography>{SignInLocales.SignInPageDescription}</Typography>

      <Image src='/password.svg' alt='password' width={300} height={300} />
    </Container>
  )
}
