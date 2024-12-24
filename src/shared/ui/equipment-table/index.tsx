import { cx } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import { ReactElement } from 'react'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { SharedLocales } from '@shared/locales/shared'
import { Notification } from '@shared/ui/notification'
import { Typography } from '@shared/ui/typography'

import { Button } from '@shared/lib/shad-cn/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@shared/lib/shad-cn/components/ui/table'

const LINK_STYLES = 'shrink-0 text-center flex items-center justify-center'
const RELEVANCE_STYLES = 'shrink-0 text-center flex items-center justify-center'
const WITH_MODEL_CELLS_STYLES = 'flex items-center'
const BRAND_STYLES = 'text-center flex items-center justify-center'

const ROW_STYLES = 'grid grid-cols-[1fr_96px_96px_1fr_1fr_1fr_1fr_160px]'
const CELL_STYLES = 'py-1 px-2'

const EMPTY_CELL_SYMBOL = '-'

interface Props {
  equipmentList: Equipment[]
  title: string
  description: string
  emptyEquipmentListDescription: string
}

export const EquipmentTable = ({
  equipmentList,
  title,
  description,
  emptyEquipmentListDescription
}: Props): ReactElement => {
  return (
    <div className='w-full flex flex-col gap-6 text-center  p-6'>
      <Typography type='h1'>{title}</Typography>

      {equipmentList.length ? (
        <>
          <Typography className='my-6'>{description}</Typography>

          <Table className='border text-left'>
            <TableHeader className='bg-secondary'>
              <TableRow className={ROW_STYLES}>
                <TableHead className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}>
                  Model
                </TableHead>
                <TableHead className={cx(RELEVANCE_STYLES, CELL_STYLES)}>
                  Relevance
                </TableHead>
                <TableHead className={cx(BRAND_STYLES, CELL_STYLES)}>
                  Brand
                </TableHead>
                <TableHead className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}>
                  {Brands.HILOOK.toUpperCase()}
                </TableHead>
                <TableHead className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}>
                  {Brands.HIWATCH.toUpperCase()}
                </TableHead>
                <TableHead className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}>
                  {Brands.HIKVISION.toUpperCase()}
                </TableHead>
                <TableHead className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}>
                  Replacement
                </TableHead>
                <TableHead className={cx(LINK_STYLES, CELL_STYLES)}>
                  {SharedLocales.CellLink}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {equipmentList.map(
                (
                  {
                    model,
                    relevance,
                    brand,
                    hilook,
                    hiwatch,
                    hikvision,
                    replacement,
                    link
                  },
                  idx
                ) => (
                  <TableRow key={`${model}${idx}`} className={ROW_STYLES}>
                    <TableCell
                      className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}
                    >
                      {model.toUpperCase()}
                    </TableCell>
                    <TableCell className={cx(RELEVANCE_STYLES, CELL_STYLES)}>
                      {relevance.toUpperCase()}
                    </TableCell>
                    <TableCell className={cx(BRAND_STYLES, CELL_STYLES)}>
                      {brand || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell
                      className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}
                    >
                      {hilook.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell
                      className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}
                    >
                      {hiwatch.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell
                      className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}
                    >
                      {hikvision.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell
                      className={cx(WITH_MODEL_CELLS_STYLES, CELL_STYLES)}
                    >
                      {replacement.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell className={cx(LINK_STYLES, CELL_STYLES)}>
                      <Button asChild className='w-full' variant='link'>
                        <a href={link} target='_blank'>
                          {SharedLocales.ToCell}
                          <ArrowRight />
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </>
      ) : (
        <Notification
          title={SharedLocales.EmptyTableTitle}
          description={emptyEquipmentListDescription}
          image='/slap.svg'
          button={null}
          size='S'
          notesList={null}
        />
      )}
    </div>
  )
}
