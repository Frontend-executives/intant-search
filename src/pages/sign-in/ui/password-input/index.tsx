'use client'

import { cva } from 'class-variance-authority'
import { useUnit } from 'effector-react/compat'
import { ReactElement } from 'react'

import { $isWrongPassword, passwordEntered } from '@pages/sign-in/model'

import { SharedLocales } from '@shared/locales/shared'
import { $password } from '@shared/model'
import { Typography } from '@shared/ui/typography'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@shared/lib/shad-cn/components/ui/input-otp'

const otpVariants = cva('mt-6', {
  variants: {
    isWrongPassword: {
      true: 'border-red-600 shadow-xl shadow-red-100',
      false: 'border-gray-400'
    }
  }
})

const wrongPasswordVariants = cva('text-red-600 transition-opacity', {
  variants: {
    isWrongPassword: {
      true: 'opacity-1',
      false: 'opacity-0'
    }
  }
})

export const PasswordInput = (): ReactElement => {
  const password = useUnit($password)
  const enterPassword = useUnit(passwordEntered)
  const isWrongPassword = useUnit($isWrongPassword)

  const passwordSymbols = password?.split('') ?? []

  return (
    <>
      <InputOTP maxLength={passwordSymbols.length} onChange={enterPassword}>
        <InputOTPGroup className='flex flex-wrap'>
          {passwordSymbols.map((_, idx) => (
            <InputOTPSlot
              index={idx}
              key={idx}
              className={otpVariants({ isWrongPassword })}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      <Typography
        type='h4'
        className={wrongPasswordVariants({ isWrongPassword })}
      >
        {SharedLocales.WrongPassword}
      </Typography>
    </>
  )
}
