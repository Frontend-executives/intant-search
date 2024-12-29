'use client'

import { useUnit } from 'effector-react'
import { CircleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { RelevantsWithReplacementLocales } from '@shared/locales/relevants-with-replacement'
import { SharedLocales } from '@shared/locales/shared'
import { $relevantsWithReplacementList } from '@shared/model'

export const RelevantsWithReplacementPage = (): ReactElement => {
  const relevantsWithReplacementList = useUnit($relevantsWithReplacementList)

  return (
    <EquipmentTable
      alert={{
        variant: 'destructive',
        title: SharedLocales.MistakesTitle,
        description: SharedLocales.MistakesDescription,
        icon: <CircleAlert />
      }}
      emptyEquipmentListTitle={RelevantsWithReplacementLocales.EmptyListTitle}
      equipmentList={relevantsWithReplacementList}
      title={RelevantsWithReplacementLocales.Title}
      description={RelevantsWithReplacementLocales.Description}
      emptyEquipmentListDescription={
        RelevantsWithReplacementLocales.EmptyListDescription
      }
    />
  )
}
