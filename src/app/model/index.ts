import { createEvent, createStore, sample } from 'effector'
import {
  concurrency,
  createJsonQuery,
  JsonApiRequestError
} from '@farfetched/core'
import { APP_SCRIPT_URL } from '@/shared/settings/app-script'
import { zodContract } from '@farfetched/zod'
import { getGeneralDataQueryResponse } from '@/shared/api'

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
  (data) => data?.equipmentList ?? []
)

export const $isLoading = createStore(true)
export const $requestError = createStore<JsonApiRequestError | null>(null)

sample({
  clock: appStarted,
  target: getGeneralDataQuery.start
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
