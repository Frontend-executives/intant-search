import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { CustomizedTableBody } from '@widgets/equipment-table/ui/customized-table-body'

import { Equipment } from '@shared/api'
import { SharedLocales } from '@shared/locales/shared'
import { Notification } from '@shared/ui/notification'
import { Typography } from '@shared/ui/typography'

import { Table } from '@shared/lib/shad-cn/components/ui/table'

import { CustomizedTableHeader } from './customized-table-header'

const CELL_CLASSNAME = 'flex items-center text-left py-0'
const CELL_WITHOUT_MODEL_CLASSNAME = cx(CELL_CLASSNAME, 'justify-center')
const CELL_WITH_MODEL_CLASSNAME = cx(CELL_CLASSNAME, 'justify-start')

const ROW_CLASSNAME =
  'grid grid-cols-[80px_1fr_120px_120px_1fr_1fr_1fr_1fr_160px]'

interface Props {
  equipmentList: Equipment[]
  title: string
  description: string
  emptyEquipmentListDescription: string
}

export const EquipmentTable = ({
  title,
  description,
  equipmentList,
  emptyEquipmentListDescription
}: Props): ReactElement => {
  if (equipmentList.length <= 0) {
    return (
      <Notification
        title={SharedLocales.EmptyTableTitle}
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
    <div className='w-full flex-grow flex-col text-center p-6'>
      <Typography type='h1'>
        {title} {problemsCount}
      </Typography>

      <Typography className='my-6'>{description}</Typography>

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
