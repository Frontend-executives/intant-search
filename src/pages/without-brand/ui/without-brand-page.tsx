'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { WithoutBrandLocales } from '@shared/locales/without-brand'
import { $withoutBrandList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const WithoutBrandPage = (): ReactElement => {
  const withoutBrandList = useUnit($withoutBrandList)

  return (
    <EquipmentTable
      equipmentList={withoutBrandList}
      title={WithoutBrandLocales.Title}
      description={WithoutBrandLocales.Description}
      emptyEquipmentListDescription={WithoutBrandLocales.EmptyListDescription}
    />
  )
}
