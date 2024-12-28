'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { SelfReplacementsLocales } from '@shared/locales/self-replacements'
import { $selfReplacementList } from '@shared/model'

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
