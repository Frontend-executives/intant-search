import { ReactElement } from 'react'

import { SearchLocales } from '@app/locales/search'

import { Typography } from '@shared/ui/typography'

import { SearchInput } from './search-input'
import { SearchResultsStepper } from './search-result-stepper'

export const SearchPage = (): ReactElement => {
  return (
    <div className='max-w-[800px] flex flex-col gap-6 pt-6'>
      <Typography type='h1'>{SearchLocales.Title}</Typography>
      <Typography>{SearchLocales.Subtitle}</Typography>

      <SearchInput />
      <SearchResultsStepper />
    </div>
  )
}
