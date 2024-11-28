'use client'

import { ReactElement } from 'react'
import { Notification } from '@/shared/ui/notification'
import { useRouter } from 'next/navigation'
import { ROUTER_PATHS } from '@/shared/settings/router-paths'

const NotFound = (): ReactElement => {
  const router = useRouter()

  return (
    <Notification
      title={'Убирайтесь отсюда!'}
      description={'Вы не должны были здесь оказаться. Вернитесь на главную'}
      image={'/404.svg'}
      button={{
        text: 'На главную',
        handler: () => router.push(ROUTER_PATHS.search)
      }}
    />
  )
}

export default NotFound
