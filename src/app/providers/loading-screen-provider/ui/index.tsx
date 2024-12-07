'use client'

import { ReactNode } from 'react'
import { Notification } from '@/shared/ui/notification'
import { useUnit } from 'effector-react'
import { $isLoading } from '@/app/model'

interface Props {
  children: ReactNode
}

export const LoadingScreenProvider = ({ children }: Props) => {
  const isLoading = useUnit($isLoading)

  if (isLoading) {
    return (
      <Notification
        title={'Загружаем...'}
        description={
          'Секундочку, грузим всё, что нужно. И даже то, что не нужно.'
        }
        image={'/loading.svg'}
        button={null}
      />
    )
  }

  return children
}
