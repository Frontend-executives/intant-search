import { concurrency, createJsonQuery } from '@farfetched/core'
import { zodContract } from '@farfetched/zod'
import { createEvent, createStore, sample } from 'effector'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { Equipment, getGeneralDataQueryResponse } from '@shared/api'
import { APP_SCRIPT_URL } from '@shared/config/app-script'
import { findDuplicates } from '@shared/lib/find-duplicates'
import { findInvalidReplacements } from '@shared/lib/find-invalid-replacements'
import { findObsoletesWithoutReplacement } from '@shared/lib/find-obsoletes-without-replacement'
import { findRelevantsWithReplacement } from '@shared/lib/find-relevants-with-replacement'
import { findSelfReplacement } from '@shared/lib/find-self-replacement'

export const routerSet = createEvent<AppRouterInstance>()

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

export const $router = createStore<null | AppRouterInstance>(null)
export const $isSignedIn = createStore<boolean>(false)

export const $equipmentList = getGeneralDataQuery.$data.map(
  (data): Equipment[] => data?.equipmentList ?? []
)
export const $password = getGeneralDataQuery.$data.map(
  (data) => data?.password ?? null
)

export const $duplicatesList = $equipmentList.map((equipmentList) =>
  findDuplicates(equipmentList)
)
export const $invalidReplacementsList = $equipmentList.map((equipmentList) =>
  findInvalidReplacements(equipmentList)
)
export const $obsoletesWithoutReplacementList = $equipmentList.map(
  (equipmentList) => findObsoletesWithoutReplacement(equipmentList)
)
export const $relevantsWithReplacementList = $equipmentList.map(
  (equipmentList) => findRelevantsWithReplacement(equipmentList)
)
export const $selfReplacementList = $equipmentList.map((equipmentList) =>
  findSelfReplacement(equipmentList)
)

sample({
  clock: routerSet,
  target: $router
})
