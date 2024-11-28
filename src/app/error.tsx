'use client'

import { ReactElement } from 'react'
import { Notification } from '@/shared/ui/notification'

const MyComponent = (): ReactElement => {
  return (
    <Notification
      title={'Ой...'}
      description={
        'Мы столкнулись с проблемой. Пожалуйста, попробуйте обновить страницу или вернитесь позже.'
      }
      image={'/500.svg'}
      button={{
        text: 'Обновить',
        handler: () => window.location.reload()
      }}
    />
  )
}

export default MyComponent
