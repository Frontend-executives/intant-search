import Image from 'next/image'
import { ReactElement } from 'react'

import { SignInLocales } from '@app/locales/sign-in'

import { PasswordInput } from '@pages/sign-in/ui/password-input'

import { Typography } from '@shared/ui/typography'

export const SignInPage = (): ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center flex-grow w-full max-w-[800px] gap-6'>
      <Typography type='h1'>{SignInLocales.SignInPageTitle}</Typography>

      <PasswordInput />

      <Typography>{SignInLocales.SignInPageDescription}</Typography>

      <Image src='/password.svg' alt='password' width={300} height={300} />
    </div>
  )
}
