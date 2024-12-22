import { ReactElement } from 'react'

import { SearchLocales } from '@shared/locales/search'
import { Container } from '@shared/ui/container'
import { Typography } from '@shared/ui/typography'

import { SearchInput } from './search-input'
import { SearchResultsStepper } from './search-result-stepper'

export const SearchPage = (): ReactElement => {
  return (
    <Container>
      <Typography type='h1'>{SearchLocales.Title}</Typography>
      <Typography>{SearchLocales.Subtitle}</Typography>

      <SearchInput />

      <SearchResultsStepper />
    </Container>
  )
}
