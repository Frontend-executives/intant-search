'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { ObsoletesWithoutReplacementLocales } from '@shared/locales/obsoletes-without-replacement'
import { $obsoletesWithoutReplacementList } from '@shared/model'

export const ObsoletesWithoutReplacementPage = (): ReactElement => {
  const obsoletesWithoutReplacementList = useUnit(
    $obsoletesWithoutReplacementList
  )

  return (
    <EquipmentTable
      equipmentList={obsoletesWithoutReplacementList}
      emptyEquipmentListTitle={
        ObsoletesWithoutReplacementLocales.EmptyListTitle
      }
      title={ObsoletesWithoutReplacementLocales.Title}
      description={ObsoletesWithoutReplacementLocales.Description}
      emptyEquipmentListDescription={
        ObsoletesWithoutReplacementLocales.EmptyListDescription
      }
    />
  )
}
