'use client'

import { useUnit } from 'effector-react'
import { ReactElement, ReactNode, useLayoutEffect } from 'react'

import { $isLoading, appStarted } from '@app/model'

import { SharedLocales } from '@shared/locales/shared'
import { Notification } from '@shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const CoreDataProvider = ({ children }: Props): ReactElement => {
  const isLoading = useUnit($isLoading)
  const startApp = useUnit(appStarted)

  useLayoutEffect(() => {
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
