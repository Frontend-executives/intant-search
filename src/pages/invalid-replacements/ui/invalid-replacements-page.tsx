'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { InvalidReplacementsLocales } from '@shared/locales/invalid-replacements'
import { $invalidReplacementsList } from '@shared/model'

export const InvalidReplacementsPage = (): ReactElement => {
  const invalidReplacementsList = useUnit($invalidReplacementsList)

  return (
    <EquipmentTable
      equipmentList={invalidReplacementsList}
      title={InvalidReplacementsLocales.Title}
      description={InvalidReplacementsLocales.Description}
      emptyEquipmentListDescription={
        InvalidReplacementsLocales.EmptyListDescription
      }
    />
  )
}
