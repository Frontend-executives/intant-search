'use client'

import { useUnit } from 'effector-react'
import { Eraser } from 'lucide-react'
import { ReactElement } from 'react'

import { SearchLocales } from '@app/locales/search'

import { Button } from '@shared/lib/shad-cn/components/ui/button'
import { Input } from '@shared/lib/shad-cn/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@shared/lib/shad-cn/components/ui/tooltip'

import { $searchQuery, searchResultSet } from '../../model'

export const SearchInput = (): ReactElement => {
  const onSearchResult = useUnit(searchResultSet)
  const searchQuery = useUnit($searchQuery)

  return (
    <div className='flex gap-2 py-6 w-full'>
      <Input
        type='text'
        placeholder={SearchLocales.InputPlaceholder}
        value={searchQuery.toUpperCase()}
        onChange={(evt) => onSearchResult(evt.target.value)}
      />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size='icon'
              disabled={!searchQuery}
              onClick={(): void => {
                onSearchResult('')
              }}
            >
              <Eraser />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{SearchLocales.ResetSearchResults}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
