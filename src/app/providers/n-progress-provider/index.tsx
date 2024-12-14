'use client'

import { ReactElement, ReactNode } from 'react'
import { AppProgressBar } from 'next-nprogress-bar'

interface Props {
  children: ReactNode | ReactNode[]
}

export const NProgressProvider = ({ children }: Props): ReactElement => {
  return (
    <>
      <AppProgressBar
        color='#2463eb'
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  )
}
