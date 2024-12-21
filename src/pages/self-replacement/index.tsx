'use client'

import { useUnit } from 'effector-react'
import { ReactElement } from 'react'

import { $selfReplacementList } from '@shared/model'
import { EquipmentTable } from '@shared/ui/equipment-table'

export const SelfReplacementPage = (): ReactElement => {
  const selfReplacementList = useUnit($selfReplacementList)

  return (
    <EquipmentTable
      equipmentList={selfReplacementList}
      title='Заменены сами ан себя'
      description='здесь отображаются замененные сами на себя'
      emptyEquipmentListDescription='больше ничего на себя не заменено'
    />
  )
}
