import { createEvent, createStore, sample } from 'effector'

import { filterEquipmentByQuery } from '@pages/search/lib/filter-equipment-by-query'

import { $equipmentList } from '@shared/model'
import { Equipment } from '@shared/types'

export const searchResultSet = createEvent<string>()
export const replacementSelected = createEvent<string>()

export const $searchQuery = createStore<string>('')
export const $foundModels = createStore<Equipment[]>([])

sample({
  clock: searchResultSet,
  target: $searchQuery
})

sample({
  clock: $searchQuery,
  source: $equipmentList,
  filter: Boolean,
  fn: (equipmentList, query) => {
    return filterEquipmentByQuery({
      searchQuery: query,
      equipmentList
    })
  },
  target: $foundModels
})

sample({
  clock: replacementSelected,
  target: $searchQuery
})
