'use client'

import { Input } from '@/shared/lib/shad-cn/components/ui/input'
import { useUnit } from 'effector-react'
import { $searchQuery, searchResultSet } from '../../model'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'
import { ReactElement } from 'react'
import { Eraser } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/shared/lib/shad-cn/components/ui/tooltip'

export const SearchInput = (): ReactElement => {
  const onSearchResult = useUnit(searchResultSet)
  const searchQuery = useUnit($searchQuery)

  return (
    <div className='flex gap-2 py-6'>
      <Input
        type='text'
        placeholder='Введите модель...'
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
          <TooltipContent>Сбросить результаты поиска</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
