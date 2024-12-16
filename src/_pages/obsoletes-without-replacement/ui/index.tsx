'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { ObsoletesWithoutReplacementLocales } from '@app/locales/obsoletes-without-replacement'

import { $obsoletesWithoutReplacement } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const ObsoletesWithoutReplacementPage = (): ReactElement => {
  const obsoletesWithoutReplacement = useUnit($obsoletesWithoutReplacement)

  return (
    <EquipmentTable
      equipmentList={obsoletesWithoutReplacement}
      title={ObsoletesWithoutReplacementLocales.Title}
      description={ObsoletesWithoutReplacementLocales.Description}
      emptyEquipmentListDescription={
        ObsoletesWithoutReplacementLocales.EmptyListDescription
      }
    />
  )
}
