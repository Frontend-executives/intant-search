import { getGeneralDataQuery } from '@app/model'

import { Equipment } from '@shared/api'
import { findDuplicates } from '@shared/lib/find-duplicates'
import { findInvalidReplacements } from '@shared/lib/find-invalid-replacements'
import { findObsoletesWithoutReplacement } from '@shared/lib/find-obsoletes-without-replacement'
import { findRelevantsWithReplacement } from '@shared/lib/find-relevants-with-replacement'

export const $equipmentList = getGeneralDataQuery.$data.map(
  (data): Equipment[] => data?.equipmentList ?? []
)

export const $duplicatesList = $equipmentList.map((equipmentList) =>
  findDuplicates(equipmentList)
)
export const $invalidReplacementsList = $equipmentList.map((equipmentList) =>
  findInvalidReplacements(equipmentList)
)
export const $obsoletesWithoutReplacement = $equipmentList.map(
  (equipmentList) => findObsoletesWithoutReplacement(equipmentList)
)
export const $relevantsWithReplacement = $equipmentList.map((equipmentList) =>
  findRelevantsWithReplacement(equipmentList)
)
