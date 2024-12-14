'use client'

import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { ROUTER_PATHS } from '@app/settings/router-paths'

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
        handler: (): void => router.push(ROUTER_PATHS.search)
      }}
    />
  )
}

export default NotFound
