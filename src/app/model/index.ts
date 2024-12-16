import {
  concurrency,
  createJsonQuery,
  JsonApiRequestError
} from '@farfetched/core'
import { zodContract } from '@farfetched/zod'
import { createEvent, createStore, sample } from 'effector'

import { APP_SCRIPT_URL } from '@app/settings/app-script'

import { Equipment, getGeneralDataQueryResponse } from '@shared/api'

export const appStarted = createEvent()

export const getGeneralDataQuery = createJsonQuery({
  request: {
    method: 'GET',
    url: APP_SCRIPT_URL
  },
  response: {
    contract: zodContract(getGeneralDataQueryResponse)
  }
})

concurrency(getGeneralDataQuery, { strategy: 'TAKE_FIRST' })

export const $equipmentList = getGeneralDataQuery.$data.map(
  (data): Equipment[] => data?.equipmentList ?? []
)
export const $password = getGeneralDataQuery.$data.map(
  (data) => data?.password ?? null
)

export const $isLoading = createStore<boolean>(true)
export const $requestError = createStore<JsonApiRequestError | null>(null)
export const $isDataLoaded = createStore<boolean>(false)

sample({
  clock: appStarted,
  source: $isDataLoaded,
  filter: (isDataLoaded) => !isDataLoaded,
  target: getGeneralDataQuery.start
})

sample({
  clock: getGeneralDataQuery.$succeeded,
  target: $isDataLoaded
})

sample({
  clock: getGeneralDataQuery.$pending,
  target: $isLoading
})

sample({
  clock: getGeneralDataQuery.$failed,
  source: getGeneralDataQuery.$error,
  target: $requestError
})
