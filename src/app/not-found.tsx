'use client'

import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'

import { ROUTER_PATHS } from '@shared/settings/router-paths'
import { Notification } from '@shared/ui/notification'

const NotFound = (): ReactElement => {
  const router = useRouter()

  return (
    <Notification
      notesList={null}
      size='M'
      title='Такой страницы не существует...'
      description='Кажется, вы нашли секретное место! К сожалению, здесь ничего нет...'
      image='/404.svg'
      button={{
        text: 'Вернуться домой',
        handler: (): void => router.push(ROUTER_PATHS.search)
      }}
    />
  )
}

export default NotFound
