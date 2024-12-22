import { ReactElement } from 'react'

import { ContractLocales } from '@shared/locales/contract'
import { SharedLocales } from '@shared/locales/shared'
import { Container } from '@shared/ui/container'
import { Notification } from '@shared/ui/notification'
import { Typography } from '@shared/ui/typography'

export const ContractPage = (): ReactElement => {
  return (
    <Container>
      <Typography type='h1'>{ContractLocales.Title}</Typography>
      <Typography>{ContractLocales.Subtitle}</Typography>
      <Typography type='h3'>{ContractLocales.WhatToDoTitle}</Typography>
      <Typography>{ContractLocales.WhatToDoDescription}</Typography>
      <div className='border-2 border-border rounded-2xl'>
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
          description={`${SharedLocales.RequestInvalidDataErrorDescription} *`}
          image='/broken-contract.svg'
          button={null}
          size='S'
        />
      </div>
      <Typography type='h2'>{ContractLocales.Caption}</Typography>
    </Container>
  )
}
