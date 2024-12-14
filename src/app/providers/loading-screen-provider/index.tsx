'use client'

import { useUnit } from 'effector-react'
import { ReactNode } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { $isLoading } from '@app/model'

import { Notification } from '@shared/ui/notification'

interface Props {
  children: ReactNode
}

export const LoadingScreenProvider = ({ children }: Props) => {
  const isLoading = useUnit($isLoading)

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

  return children
}
