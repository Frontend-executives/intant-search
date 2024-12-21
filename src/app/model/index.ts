import { JsonApiRequestError } from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'
import { createEffect } from 'effector/compat'
import Cookies from 'js-cookie'

import { Auth } from '@shared/enums/auth'
import { $isSignedIn, getGeneralDataQuery } from '@shared/model'

export const appStarted = createEvent()

const checkAuthFx = createEffect((): boolean => {
  return Cookies.get(Auth.KEY) === Auth.VALUE
})

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
  clock: getGeneralDataQuery.$pending,
  target: $isLoading
})

sample({
  clock: getGeneralDataQuery.$failed,
  source: getGeneralDataQuery.$error,
  target: $requestError
})

sample({
  clock: getGeneralDataQuery.$succeeded,
  target: $isDataLoaded
})

sample({
  clock: appStarted,
  target: checkAuthFx
})

sample({
  clock: checkAuthFx.doneData,
  target: $isSignedIn
})
