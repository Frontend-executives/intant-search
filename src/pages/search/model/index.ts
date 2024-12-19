import { createEvent, createStore, sample } from 'effector'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { filterEquipmentByQuery } from '@pages/search/lib/filter-equipment-by-query'

import { Equipment } from '@shared/api'
import { $equipmentList } from '@shared/model'

export const searchResultSet = createEvent<string>()
export const replacementSelected = createEvent<string>()
export const routerSet = createEvent<AppRouterInstance>()

export const $router = createStore<null | AppRouterInstance>(null)
export const $searchQuery = createStore<string>('')
export const $foundModels = createStore<Equipment[]>([])

sample({
  clock: routerSet,
  target: $router
})

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
