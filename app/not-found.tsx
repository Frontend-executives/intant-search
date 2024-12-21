'use client'

import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'

import { SharedLocales } from '@shared/locales/shared'
import { RouterPaths } from '@shared/router/router-paths'
import { Notification } from '@shared/ui/notification'

const NotFound = (): ReactElement => {
  const router = useRouter()

  return (
    <Notification
      notesList={null}
      size='M'
      title={SharedLocales.NotFoundPageTitle}
      description={SharedLocales.NotFoundPageDescription}
      image='/404.svg'
      button={{
        text: SharedLocales.NotFoundPageButton,
        handler: (): void => router.push(RouterPaths.SEARCH)
      }}
    />
  )
}

export default NotFound
