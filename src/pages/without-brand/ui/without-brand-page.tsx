'use client'

import { useUnit } from 'effector-react'
import { TriangleAlert } from 'lucide-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { SharedLocales } from '@shared/locales/shared'
import { WithoutBrandLocales } from '@shared/locales/without-brand'
import { $withoutBrandList } from '@shared/model'

export const WithoutBrandPage = (): ReactElement => {
  const withoutBrandList = useUnit($withoutBrandList)

  return (
    <EquipmentTable
      alert={{
        variant: 'default',
        title: SharedLocales.WarningsTitle,
        description: SharedLocales.WarningsDescription,
        icon: <TriangleAlert />
      }}
      emptyEquipmentListTitle={WithoutBrandLocales.EmptyListTitle}
      equipmentList={withoutBrandList}
      title={WithoutBrandLocales.Title}
      description={WithoutBrandLocales.Description}
      emptyEquipmentListDescription={WithoutBrandLocales.EmptyListDescription}
    />
  )
}
