'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { DuplicatesLocales } from '@shared/locales/duplicates'
import { $duplicatesList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const DuplicatesPage = (): ReactElement => {
  const duplicatesList = useUnit($duplicatesList)

  return (
    <EquipmentTable
      equipmentList={duplicatesList}
      title={DuplicatesLocales.Title}
      description={DuplicatesLocales.Description}
      emptyEquipmentListDescription={DuplicatesLocales.EmptyListDescription}
    />
  )
}
