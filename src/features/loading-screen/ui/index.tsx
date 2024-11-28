import { ReactNode } from 'react'
import { Notification } from '@/shared/ui/notification'

interface Props {
  children: ReactNode
}

export const LoadingScreen = ({ children }: Props) => {
  const isLoading = false

  if (isLoading) {
    return (
      <Notification
        title={'Загрузка'}
        description={'Подождите...'}
        image={'/loading.svg'}
        button={null}
      />
    )
  }

  return children
}
