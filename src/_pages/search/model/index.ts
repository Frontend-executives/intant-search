import { createEvent, createStore, sample } from 'effector'

import { $equipmentList } from '@app/model'

import { filterEquipmentByQuery } from '@pages/search/lib/filter-equipment-by-query'

import { Equipment } from '@shared/api'

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
