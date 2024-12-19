'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { ObsoletesWithoutReplacementLocales } from '@app/locales/obsoletes-without-replacement'

import { $obsoletesWithoutReplacementList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const ObsoletesWithoutReplacementPage = (): ReactElement => {
  const obsoletesWithoutReplacementList = useUnit(
    $obsoletesWithoutReplacementList
  )

  return (
    <EquipmentTable
      equipmentList={obsoletesWithoutReplacementList}
      title={ObsoletesWithoutReplacementLocales.Title}
      description={ObsoletesWithoutReplacementLocales.Description}
      emptyEquipmentListDescription={
        ObsoletesWithoutReplacementLocales.EmptyListDescription
      }
    />
  )
}
