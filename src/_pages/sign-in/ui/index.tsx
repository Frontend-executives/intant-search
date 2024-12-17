'use client'

import { useUnit } from 'effector-react'
import Image from 'next/image'
import { ReactElement } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { SignInLocales } from '@app/locales/sign-in'

import { $isWrongPassword } from '@pages/sign-in/model'
import { PasswordInput } from '@pages/sign-in/ui/password-input'

import { Typography } from '@shared/ui/typography'

export const SignInPage = (): ReactElement => {
  const isWrongPassword = useUnit($isWrongPassword)

  return (
    <>
      {isWrongPassword ? (
        <Typography type='h1' className='text-red-500'>
          {SharedLocales.WrongPassword}
        </Typography>
      ) : (
        <Typography type='h1'>{SignInLocales.SignInPageTitle}</Typography>
      )}

      <PasswordInput />

      <Typography>{SignInLocales.SignInPageDescription}</Typography>

      <Image src='/password.svg' alt='password' width={300} height={300} />
    </>
  )
}
