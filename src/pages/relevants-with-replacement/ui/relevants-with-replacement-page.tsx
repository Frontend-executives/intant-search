'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { RelevantsWithReplacementLocales } from '@shared/locales/relevants-with-replacement'
import { $relevantsWithReplacementList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const RelevantsWithReplacementPage = (): ReactElement => {
  const relevantsWithReplacementList = useUnit($relevantsWithReplacementList)

  return (
    <EquipmentTable
      equipmentList={relevantsWithReplacementList}
      title={RelevantsWithReplacementLocales.Title}
      description={RelevantsWithReplacementLocales.Description}
      emptyEquipmentListDescription={
        RelevantsWithReplacementLocales.EmptyListDescription
      }
    />
  )
}
