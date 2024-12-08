import { createEvent, createStore, sample } from 'effector'
import { debug } from 'patronum'
import { Equipment } from '@/shared/api'
import { $equipmentList } from '@/app/model'
import { filterEquipmentByQuery } from '@/_pages/search/lib/filter-equipment-by-query'

export const searchResultSet = createEvent<string>()

export const $searchQuery = createStore<string>('')
export const $foundModels = createStore<Equipment[]>([])

sample({
  clock: searchResultSet,
  target: $searchQuery
})

sample({
  clock: searchResultSet,
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

debug($searchQuery, $foundModels)
