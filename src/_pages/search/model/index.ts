import { createEvent, createStore, sample } from 'effector'
import { debug } from 'patronum'

export const searchResultSet = createEvent<string>()

export const $searchQuery = createStore<string>('')

sample({
  clock: searchResultSet,
  target: $searchQuery
})

debug($searchQuery)
