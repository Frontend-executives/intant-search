'use client'

import { useUnit } from 'effector-react'
import { CircleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { SharedLocales } from '@shared/locales/shared'
import { UnverifiedReplacementsLocales } from '@shared/locales/unverified-replacements'
import { $unverifiedReplacementsList } from '@shared/model'

export const UnverifiedReplacementsPage = (): ReactElement => {
  const unverifiedReplacementsList = useUnit($unverifiedReplacementsList)

  return (
    <EquipmentTable
      alert={{
        variant: 'destructive',
        title: SharedLocales.MistakesTitle,
        description: SharedLocales.MistakesDescription,
        icon: <CircleAlert />
      }}
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
