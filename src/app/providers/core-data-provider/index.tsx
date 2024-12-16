'use client'

import { useUnit } from 'effector-react'
import { ReactElement, ReactNode, useEffect } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { $isLoading, appStarted } from '@app/model'

import { Notification } from '@shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const CoreDataProvider = ({ children }: Props): ReactElement => {
  const isLoading = useUnit($isLoading)

  const startApp = useUnit(appStarted)

  useEffect(() => {
    startApp()
  }, [startApp])

  if (isLoading) {
    return (
      <Notification
        notesList={null}
        size='M'
        title={SharedLocales.LoadingTitle}
        description={SharedLocales.LoadingDescription}
        image='/loading.svg'
        button={null}
      />
    )
  }

  return <>{children}</>
}
