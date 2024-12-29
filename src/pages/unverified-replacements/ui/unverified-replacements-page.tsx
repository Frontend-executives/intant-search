'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { UnverifiedReplacementsLocales } from '@shared/locales/unverified-replacements'
import { $unverifiedReplacementsList } from '@shared/model'

export const UnverifiedReplacementsPage = (): ReactElement => {
  const unverifiedReplacementsList = useUnit($unverifiedReplacementsList)

  return (
    <EquipmentTable
      emptyEquipmentListTitle={UnverifiedReplacementsLocales.EmptyListTitle}
      equipmentList={unverifiedReplacementsList}
      title={UnverifiedReplacementsLocales.Title}
      description={UnverifiedReplacementsLocales.Description}
      emptyEquipmentListDescription={
        UnverifiedReplacementsLocales.EmptyListDescription
      }
    />
  )
}
