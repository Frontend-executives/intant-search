'use client'

import { useUnit } from 'effector-react'
import { CircleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { SelfReplacementsLocales } from '@shared/locales/self-replacements'
import { SharedLocales } from '@shared/locales/shared'
import { $selfReplacementList } from '@shared/model'

export const SelfReplacementPage = (): ReactElement => {
  const selfReplacementList = useUnit($selfReplacementList)

  return (
    <EquipmentTable
      alert={{
        variant: 'destructive',
        title: SharedLocales.MistakesTitle,
        description: SharedLocales.MistakesDescription,
        icon: <CircleAlert />
      }}
      emptyEquipmentListTitle={SelfReplacementsLocales.EmptyListTitle}
      equipmentList={selfReplacementList}
      title={SelfReplacementsLocales.Title}
      description={SelfReplacementsLocales.Description}
      emptyEquipmentListDescription={
        SelfReplacementsLocales.EmptyListDescription
      }
    />
  )
}
