'use client'

import { $searchQuery } from '../../model'
import { useUnit } from 'effector-react/compat'
import { ReactElement } from 'react'
import { Typography } from '@/shared/ui/typography'

export const EmptyResults = (): ReactElement | null => {
  const searchQuery = useUnit($searchQuery)

  if (searchQuery) {
    return null
  }

  return (
    <div>
      <Typography type={'lead'}>
        Пусто? Введите запрос, и мы начнем искать
      </Typography>
    </div>
  )
}
