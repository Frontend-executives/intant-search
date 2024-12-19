'use client'

import { ReactElement } from 'react'

import { SharedLocales } from '@shared/locales/shared'
import { Notification } from '@shared/ui/notification'

const Error = (): ReactElement => {
  return (
    <Notification
      notesList={null}
      size='M'
      title={SharedLocales.ErrorPageTitle}
      description={SharedLocales.ErrorPageDescription}
      image='/500.svg'
      button={{
        text: SharedLocales.ErrorPageButton,
        handler: (): void => window.location.reload()
      }}
    />
  )
}

export default Error
