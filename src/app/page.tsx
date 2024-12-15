import { ReactElement } from 'react'

import { CoreDataProvider } from '@app/providers/core-data-provider'

import { SearchPage } from '@pages/search/ui'

import { Container } from '@shared/ui/container'
import { Header } from '@shared/ui/header'

const Search = (): ReactElement => {
  return (
    <CoreDataProvider>
      <Header />
      <Container>
        <SearchPage />
      </Container>
    </CoreDataProvider>
  )
}

export default Search
