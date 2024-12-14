'use client'

import { ReactElement, ReactNode } from 'react'
import { useUnit } from 'effector-react'
import { $requestError } from '@/app/model'
import { Notification } from '@/shared/ui/notification'

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
        title='Интернет улетел!'
        description='Но обещал вернуться... На всякий случай проверьте сеть.'
        image='/network-problem.svg'
        button={{
          text: 'Повторить попытку',
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
          '1. Все поля должны быть в формате "Текст".',
          '2. Поле "model" обязательно, без него никак.',
          '3. Поле "relevance" — строго "yes" или "no".',
          '4. Поля "replacement" и "brand" могут быть пустыми, если данных нет.'
        ]}
        title='Нарушен контракт'
        description={`Таблица не соответствует правилам. Ошибок найдено: ${requestError.validationErrors.length} - исправьте их.`}
        image='/broken-contract.svg'
        button={{
          text: 'Обновить',
          handler: (): void => window.location.reload()
        }}
        size='M'
      />
    )
  }

  return (
    <Notification
      notesList={null}
      title='Куда-то не туда...'
      description='Произошла ошибка, которую мы не можем объяснить. Возможно, сервер сейчас пьёт кофе. Попробуйте обновить страницу позже.'
      image='/unknown-request-error.svg'
      button={{
        text: 'Обновить страницу',
        handler: (): void => window.location.reload()
      }}
      size='M'
    />
  )
}
