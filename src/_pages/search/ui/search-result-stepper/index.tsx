'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { SearchLocales } from '@app/locales/search'

import { $foundModels, $searchQuery } from '@pages/search/model'
import { FoundEquipmentBadge } from '@pages/search/ui/found-equipment-badge'

import { Notification } from '@shared/ui/notification'

export const SearchResultsStepper = (): ReactElement | null => {
  const searchQuery = useUnit($searchQuery)
  const foundModels = useUnit($foundModels)

  const isSearchStarted = Boolean(searchQuery)
  const isSomeResults = foundModels.length > 10
  const isEmptyResults = foundModels.length <= 0

  if (!isSearchStarted) {
    return (
      <Notification
        notesList={null}
        title={SearchLocales.LetsSearchTitle}
        description={SearchLocales.LetsSearchDescription}
        image='/try-to-search.svg'
        button={null}
        size='S'
      />
    )
  } else if (isSearchStarted && isSomeResults) {
    return (
      <Notification
        notesList={null}
        title={`${SearchLocales.SearchResultsSomeTitle1} ${foundModels.length} ${SearchLocales.SearchResultsSomeTitle2}`}
        description={SearchLocales.SearchResultsSomeDescription}
        image='/some-results.svg'
        button={null}
        size='S'
      />
    )
  } else if (isSearchStarted && isEmptyResults) {
    return (
      <Notification
        notesList={null}
        size='S'
        title={SearchLocales.SearchResultsEmptyTitle}
        description={SearchLocales.SearchResultsEmptyDescription}
        image='/empty-search.svg'
        button={null}
      />
    )
  } else {
    return (
      <div className='p-4 rounded-md flex items-center justify-center gap-2 flex-wrap'>
        {foundModels.map((equipment) => {
          return (
            <FoundEquipmentBadge key={equipment.link} equipment={equipment} />
          )
        })}
      </div>
    )
  }
}
