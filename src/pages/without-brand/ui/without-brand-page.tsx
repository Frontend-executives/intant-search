'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { WithoutBrandLocales } from '@shared/locales/without-brand'
import { $withoutBrandList } from '@shared/model'

export const WithoutBrandPage = (): ReactElement => {
  const withoutBrandList = useUnit($withoutBrandList)

  return (
    <EquipmentTable
      emptyEquipmentListTitle={WithoutBrandLocales.EmptyListTitle}
      equipmentList={withoutBrandList}
      title={WithoutBrandLocales.Title}
      description={WithoutBrandLocales.Description}
      emptyEquipmentListDescription={WithoutBrandLocales.EmptyListDescription}
    />
  )
}
