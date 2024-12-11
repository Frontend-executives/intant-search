'use client'

import { ReactNode, useEffect } from 'react'
import { useUnit } from 'effector-react'
import { $equipmentList, appStarted } from '@/app/model'

interface Props {
  children: ReactNode
}

export const CoreDataProvider = ({ children }: Props): ReactNode => {
  const onMount = useUnit(appStarted)
  const equipmentList = useUnit($equipmentList)

  useEffect(() => {
    if (!equipmentList.length) {
      onMount()
    }
  }, [equipmentList, onMount])

  return children
}
