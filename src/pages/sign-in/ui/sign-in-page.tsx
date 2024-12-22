'use client'

import { useUnit } from 'effector-react'
import Image from 'next/image'
import { ReactElement } from 'react'

import { SharedLocales } from '@shared/locales/shared'
import { SignInLocales } from '@shared/locales/sign-in'
import { Typography } from '@shared/ui/typography'

import { $isWrongPassword } from '../model/index'
import { PasswordInput } from './password-input'

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
