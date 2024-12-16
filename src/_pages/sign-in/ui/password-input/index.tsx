'use client'

import { useUnit } from 'effector-react/compat'
import { ReactElement } from 'react'

import { $password } from '@app/model'

import { passwordEntered } from '@pages/sign-in/model'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from '@shared/lib/shad-cn/components/ui/input-otp'

export const PasswordInput = (): ReactElement => {
  const password = useUnit($password)
  const enterPassword = useUnit(passwordEntered)

  const passwordSymbols = password?.split('') ?? []

  return (
    <InputOTP
      maxLength={passwordSymbols.length}
      onChange={enterPassword}
      className=''
    >
      <InputOTPGroup className='flex flex-wrap'>
        {passwordSymbols.map((_, idx) => (
          <InputOTPSlot index={idx} key={idx} className='border-gray-400' />
        ))}
      </InputOTPGroup>
    </InputOTP>
  )
}
