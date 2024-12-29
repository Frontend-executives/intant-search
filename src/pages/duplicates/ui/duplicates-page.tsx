'use client'

import { useUnit } from 'effector-react'
import { CircleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { DuplicatesLocales } from '@shared/locales/duplicates'
import { SharedLocales } from '@shared/locales/shared'
import { $duplicatesList } from '@shared/model'

export const DuplicatesPage = (): ReactElement => {
  const duplicatesList = useUnit($duplicatesList)

  return (
    <EquipmentTable
      alert={{
        variant: 'destructive',
        title: SharedLocales.MistakesTitle,
        description: SharedLocales.MistakesDescription,
        icon: <CircleAlert />
      }}
      emptyEquipmentListTitle={DuplicatesLocales.EmptyListTitle}
      equipmentList={duplicatesList}
      title={DuplicatesLocales.Title}
      description={DuplicatesLocales.Description}
      emptyEquipmentListDescription={DuplicatesLocales.EmptyListDescription}
    />
  )
}
