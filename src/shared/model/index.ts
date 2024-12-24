import { createEvent, createStore, sample } from 'effector'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { getGeneralDataQuery } from '@shared/api'
import { Equipment } from '@shared/api'
import { findDuplicates } from '@shared/lib/find-duplicates'
import { findInvalidReplacements } from '@shared/lib/find-invalid-replacements'
import { findObsoletesWithoutReplacement } from '@shared/lib/find-obsoletes-without-replacement'
import { findRelevantsWithReplacement } from '@shared/lib/find-relevants-with-replacement'
import { findSelfReplacement } from '@shared/lib/find-self-replacement'
import { findWithoutBrand } from '@shared/lib/find-without-brand'

export const routerSet = createEvent<AppRouterInstance>()

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

export const $withoutBrandList = $equipmentList.map((equipmentList) =>
  findWithoutBrand(equipmentList)
)

sample({
  clock: routerSet,
  target: $router
})
