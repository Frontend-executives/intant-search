'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { EquipmentTable } from '@widgets/equipment-table'

import { WithCommaLocales } from '@shared/locales/with-comma'
import { $withCommaList } from '@shared/model'

export const WithCommaPage = (): ReactElement => {
  const withCommaList = useUnit($withCommaList)

  return (
    <EquipmentTable
      equipmentList={withCommaList}
      title={WithCommaLocales.Title}
      description={WithCommaLocales.Description}
      emptyEquipmentListDescription={WithCommaLocales.EmptyListDescription}
    />
  )
}
