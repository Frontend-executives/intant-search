'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { SelfReplacementsLocales } from '@shared/locales/self-replacements'
import { $selfReplacementList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const SelfReplacementPage = (): ReactElement => {
  const selfReplacementList = useUnit($selfReplacementList)

  return (
    <EquipmentTable
      equipmentList={selfReplacementList}
      title={SelfReplacementsLocales.Title}
      description={SelfReplacementsLocales.Description}
      emptyEquipmentListDescription={
        SelfReplacementsLocales.EmptyListDescription
      }
    />
  )
}
