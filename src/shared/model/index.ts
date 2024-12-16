import { getGeneralDataQuery } from '@app/model'

import { Equipment } from '@shared/api'
import { findDuplicates } from '@shared/lib/find-duplicates'
import { findInvalidReplacements } from '@shared/lib/find-invalid-replacements'

export const $equipmentList = getGeneralDataQuery.$data.map(
  (data): Equipment[] => data?.equipmentList ?? []
)

export const $duplicatesList = $equipmentList.map((equipmentList) =>
  findDuplicates(equipmentList)
)
export const $invalidReplacementsList = $equipmentList.map((equipmentList) =>
  findInvalidReplacements(equipmentList)
)
