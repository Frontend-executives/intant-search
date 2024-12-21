import { ReactElement } from 'react'

import { SearchPage } from '@pages/search'

import { PageContainer } from '@shared/ui/page-container'

const Search = (): ReactElement => {
  return (
    <PageContainer>
      <SearchPage />
    </PageContainer>
  )
}

export default Search
