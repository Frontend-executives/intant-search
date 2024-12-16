'use client'

import { useUnit } from 'effector-react'
import { ReactElement, ReactNode } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { $requestError } from '@app/model'

import { Notification } from '@shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const GeneralRequestErrorProvider = ({
  children
}: Props): ReactElement => {
  const requestError = useUnit($requestError)

  if (!requestError) return <>{children}</>

  console.log(requestError)

  if (requestError.errorType === 'NETWORK') {
    return (
      <Notification
        notesList={null}
        title={SharedLocales.RequestNetworkErrorTitle}
        description={SharedLocales.RequestNetworkErrorDescription}
        image='/network-problem.svg'
        button={{
          text: SharedLocales.RequestNetworkErrorButton,
          handler: (): void => window.location.reload()
        }}
        size='M'
      />
    )
  }

  if (requestError.errorType === 'INVALID_DATA') {
    return (
      <Notification
        notesList={[
          SharedLocales.RequestInvalidData1,
          SharedLocales.RequestInvalidData2,
          SharedLocales.RequestInvalidData3,
          SharedLocales.RequestInvalidData4,
          SharedLocales.RequestInvalidData5,
          SharedLocales.RequestInvalidData6
        ]}
        title={SharedLocales.RequestInvalidDataErrorTitle}
        description={`${SharedLocales.RequestInvalidDataErrorDescription} ${requestError.validationErrors.length}`}
        image='/broken-contract.svg'
        button={{
          text: SharedLocales.RequestInvalidDataButton,
          handler: (): void => window.location.reload()
        }}
        size='M'
      />
    )
  }

  return (
    <Notification
      notesList={null}
      title={SharedLocales.RequestUnknownErrorTitle}
      description={SharedLocales.RequestUnknownErrorDescription}
      image='/unknown-request-error.svg'
      button={{
        text: SharedLocales.RequestUnknownErrorButton,
        handler: (): void => window.location.reload()
      }}
      size='M'
    />
  )
}
