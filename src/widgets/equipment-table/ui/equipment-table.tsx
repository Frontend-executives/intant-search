import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { CustomizedTableBody } from '@widgets/equipment-table/ui/customized-table-body'

import { Equipment } from '@shared/api'
import { Notification } from '@shared/ui/notification'
import { Typography } from '@shared/ui/typography'

import {
  Alert,
  AlertDescription,
  AlertTitle
} from '@shared/lib/shad-cn/components/ui/alert'
import { Table } from '@shared/lib/shad-cn/components/ui/table'

import { CustomizedTableHeader } from './customized-table-header'

const CELL_CLASSNAME = 'flex items-center text-left py-0 break-all'
const CELL_WITHOUT_MODEL_CLASSNAME = cx(CELL_CLASSNAME, 'justify-center')
const CELL_WITH_MODEL_CLASSNAME = cx(CELL_CLASSNAME, 'justify-start')

const ROW_CLASSNAME =
  'grid grid-cols-[80px_1fr_140px_140px_1fr_1fr_1fr_1fr_160px]'

interface Props {
  equipmentList: Equipment[]
  title: string
  description: string
  emptyEquipmentListDescription: string
  emptyEquipmentListTitle: string
  alert: {
    title: string
    description: string
    icon: ReactElement
    variant: 'default' | 'destructive'
  }
}

export const EquipmentTable = ({
  title,
  description,
  equipmentList,
  emptyEquipmentListDescription,
  emptyEquipmentListTitle,
  alert
}: Props): ReactElement => {
  if (equipmentList.length <= 0) {
    return (
      <Notification
        title={emptyEquipmentListTitle}
        description={emptyEquipmentListDescription}
        image='/slap.svg'
        button={null}
        size='M'
        notesList={null}
      />
    )
  }

  const problemsCount = `(${equipmentList.length})`

  return (
    <div className='w-full flex-grow flex flex-col gap-6 text-center px-6 pb-6'>
      <Alert
        variant={alert.variant}
        className='w-full max-w-3xl text-start ml-auto'
      >
        {alert.icon}
        <AlertTitle>{alert.title}</AlertTitle>
        <AlertDescription>{alert.description}</AlertDescription>
      </Alert>

      <Typography type='h1'>
        {title} {problemsCount}
      </Typography>

      <Typography>{description}</Typography>

      <Table>
        <CustomizedTableHeader
          withModelClassName={CELL_WITH_MODEL_CLASSNAME}
          withoutModelClassName={CELL_WITHOUT_MODEL_CLASSNAME}
          rowClassName={ROW_CLASSNAME}
        />

        <CustomizedTableBody
          rowClassName={ROW_CLASSNAME}
          equipmentList={equipmentList}
          withModelClassName={CELL_WITH_MODEL_CLASSNAME}
          withoutModelClassName={CELL_WITHOUT_MODEL_CLASSNAME}
        />
      </Table>
    </div>
  )
}
