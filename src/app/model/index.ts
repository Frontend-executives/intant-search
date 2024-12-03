import { createEvent, createStore, sample } from 'effector'
import { concurrency, createJsonQuery } from '@farfetched/core'
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

export const $isLoading = createStore(false)

sample({
  clock: appStarted,
  target: getGeneralDataQuery.start
})

sample({
  clock: getGeneralDataQuery.$pending,
  target: $isLoading
})
