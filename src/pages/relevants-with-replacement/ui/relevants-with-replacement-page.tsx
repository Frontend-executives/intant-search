'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { $relevantsWithReplacementList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const RelevantsWithReplacementPage = (): ReactElement => {
  const relevantsWithReplacementList = useUnit($relevantsWithReplacementList)

  return (
    <EquipmentTable
      equipmentList={relevantsWithReplacementList}
      title='Актуальные с заменой'
      description='Здесь указаны актуальные с заменой модели'
      emptyEquipmentListDescription='отлично, больше актуальные нет'
    />
  )
}
