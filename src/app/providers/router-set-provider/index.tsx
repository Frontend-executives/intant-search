'use client'

import { useUnit } from 'effector-react'
import { useRouter } from 'next/navigation'
import { ReactElement, ReactNode, useEffect } from 'react'

import { routerSet } from '@shared/model'

interface Props {
  children: ReactNode | ReactNode[]
}

export const RouterSetProvider = ({ children }: Props): ReactElement => {
  const setRouter = useUnit(routerSet)

  const router = useRouter()

  useEffect(() => {
    setRouter(router)
  }, [router, setRouter])

  return <>{children}</>
}
