'use client'

import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'

import { RouterPaths } from '@shared/enums/router-paths'
import { SharedLocales } from '@shared/locales/shared'
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
