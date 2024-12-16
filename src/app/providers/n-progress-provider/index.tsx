'use client'

import { AppProgressBar } from 'next-nprogress-bar'
import { ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export const NProgressProvider = ({ children }: Props): ReactElement => {
  return (
    <>
      <AppProgressBar
        height='4px'
        color='#2463eb'
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  )
}
