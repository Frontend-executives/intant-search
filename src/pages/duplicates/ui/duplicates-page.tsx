'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { DuplicatesLocales } from '@shared/locales/duplicates'
import { $duplicatesList } from '@shared/model'

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
