'use client'

import { ReactElement } from 'react'
import { Notification } from '@/shared/ui/notification'

const Error = (): ReactElement => {
  return (
    <Notification
      notesList={null}
      size="M"
      title="Что-то пошло не так..."
      description="Сервер устал и ушёл пить кофе. Обновите страницу или подождите, он скоро вернётся"
      image="/500.svg"
      button={{
        text: 'Обновить',
        handler: (): void => window.location.reload()
      }}
    />
  )
}

export default Error
