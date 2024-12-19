import { ReactElement } from 'react'

import { ContractPage } from '@pages/contract/ui'

import { PageContainer } from '@shared/ui/page-container'

const Contract = (): ReactElement => {
  return (
    <PageContainer>
      <ContractPage />
    </PageContainer>
  )
}

export default Contract
