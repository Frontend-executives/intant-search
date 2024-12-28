import { cx } from 'class-variance-authority'
import { ReactElement } from 'react'

import { Brands } from '@shared/enums/brands'
import { SharedLocales } from '@shared/locales/shared'

import {
  TableHead,
  TableHeader,
  TableRow
} from '@shared/lib/shad-cn/components/ui/table'

const HEAD_CELL_CLASSNAME = 'font-bold text-white'

interface Props {
  withModelClassName: string
  withoutModelClassName: string
  rowClassName: string
}

export const CustomizedTableHeader = ({
  withModelClassName,
  withoutModelClassName,
  rowClassName
}: Props): ReactElement => {
  return (
    <TableHeader className='bg-zinc-700 pointer-events-none'>
      <TableRow className={cx(rowClassName)}>
        <TableHead className={cx(withoutModelClassName, HEAD_CELL_CLASSNAME)}>
          #
        </TableHead>
        <TableHead className={cx(withModelClassName, HEAD_CELL_CLASSNAME)}>
          {SharedLocales.Model}
        </TableHead>
        <TableHead className={cx(withoutModelClassName, HEAD_CELL_CLASSNAME)}>
          {SharedLocales.Relevance}
        </TableHead>
        <TableHead className={cx(withoutModelClassName, HEAD_CELL_CLASSNAME)}>
          {SharedLocales.Brand}
        </TableHead>
        <TableHead className={cx(withModelClassName, HEAD_CELL_CLASSNAME)}>
          {Brands.HILOOK.toUpperCase()}
        </TableHead>
        <TableHead className={cx(withModelClassName, HEAD_CELL_CLASSNAME)}>
          {Brands.HIWATCH.toUpperCase()}
        </TableHead>
        <TableHead className={cx(withModelClassName, HEAD_CELL_CLASSNAME)}>
          {Brands.HIKVISION.toUpperCase()}
        </TableHead>
        <TableHead className={cx(withModelClassName, HEAD_CELL_CLASSNAME)}>
          {SharedLocales.Replacement}
        </TableHead>
        <TableHead className={cx(withoutModelClassName, HEAD_CELL_CLASSNAME)}>
          {SharedLocales.CellLink}
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
