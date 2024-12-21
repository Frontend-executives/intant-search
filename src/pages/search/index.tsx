import { ReactElement } from 'react'

import { SearchLocales } from '@shared/locales/search'
import { Typography } from '@shared/ui/typography'

import { SearchInput } from './ui/search-input'
import { SearchResultsStepper } from './ui/search-result-stepper'

export const SearchPage = (): ReactElement => {
  return (
    <>
      <Typography type='h1'>{SearchLocales.Title}</Typography>
      <Typography>{SearchLocales.Subtitle}</Typography>

      <SearchInput />

      <SearchResultsStepper />
    </>
  )
}
