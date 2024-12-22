'use client'

import { ReactElement } from 'react'

import { SharedLocales } from '@shared/locales/shared'
import { Container } from '@shared/ui/container'
import { Notification } from '@shared/ui/notification'

const Error = (): ReactElement => {
  return (
    <Container>
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
    </Container>
  )
}

export default Error
