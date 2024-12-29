'use client'

import { useUnit } from 'effector-react'
import { CircleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { ObsoletesWithoutReplacementLocales } from '@shared/locales/obsoletes-without-replacement'
import { SharedLocales } from '@shared/locales/shared'
import { $obsoletesWithoutReplacementList } from '@shared/model'

export const ObsoletesWithoutReplacementPage = (): ReactElement => {
  const obsoletesWithoutReplacementList = useUnit(
    $obsoletesWithoutReplacementList
  )

  return (
    <EquipmentTable
      alert={{
        variant: 'destructive',
        title: SharedLocales.MistakesTitle,
        description: SharedLocales.MistakesDescription,
        icon: <CircleAlert />
      }}
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
