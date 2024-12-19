'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { $relevantsWithReplacement } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const RelevantsWithReplacementPage = (): ReactElement => {
  const relevantsWithReplacement = useUnit($relevantsWithReplacement)

  return (
    <EquipmentTable
      equipmentList={relevantsWithReplacement}
      title='Актуальные с заменой'
      description='Здесь указаны актуальные с заменой модели'
      emptyEquipmentListDescription='отлично, больше актуальные нет'
    />
  )
}
