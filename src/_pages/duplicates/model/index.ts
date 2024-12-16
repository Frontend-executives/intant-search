import { $equipmentList } from '@app/model'

import { findDuplicates } from '@pages/duplicates/lib/find-duplicates'

export const $duplicatesList = $equipmentList.map((equipmentList) =>
  findDuplicates(equipmentList)
)
