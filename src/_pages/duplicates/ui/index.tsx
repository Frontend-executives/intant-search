'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { DuplicatesLocales } from '@app/locales/duplicates'

import { $duplicatesList } from '@pages/duplicates/model'

import { EquipmentTable } from '@shared/ui/equipment-table'

export const DuplicatesPage = (): ReactElement => {
  const duplicatesList = useUnit($duplicatesList)

  return (
    <EquipmentTable
      equipmentList={duplicatesList}
      title={DuplicatesLocales.Title}
      description={DuplicatesLocales.Description}
      emptyEquipmentList={{
        title: DuplicatesLocales.EmptyDuplicatesTitle,
        description: DuplicatesLocales.EmptyDuplicatesDescription,
        image: '/slap.svg'
      }}
    />
  )
}
