'use client'

import { useUnit } from 'effector-react'
import { TriangleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { SharedLocales } from '@shared/locales/shared'
import { WithCommaLocales } from '@shared/locales/with-comma'
import { $withCommaList } from '@shared/model'

export const WithCommaPage = (): ReactElement => {
  const withCommaList = useUnit($withCommaList)

  return (
    <EquipmentTable
      alert={{
        variant: 'default',
        title: SharedLocales.WarningsTitle,
        description: SharedLocales.WarningsDescription,
        icon: <TriangleAlert />
      }}
      emptyEquipmentListTitle={WithCommaLocales.EmptyListTitle}
      equipmentList={withCommaList}
      title={WithCommaLocales.Title}
      description={WithCommaLocales.Description}
      emptyEquipmentListDescription={WithCommaLocales.EmptyListDescription}
    />
  )
}
