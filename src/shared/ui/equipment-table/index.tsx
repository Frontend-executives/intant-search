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
    <div className='w-full flex flex-col gap-6 text-center'>
      <Typography type='h1'>{title}</Typography>

      {equipmentList.length ? (
        <>
          <Typography>{description}</Typography>

          <Table className='border text-left'>
            <TableHeader className='bg-secondary'>
              <TableRow className={ROW_STYLES}>
                <TableHead className={WITH_MODEL_CELLS_STYLES}>Model</TableHead>
                <TableHead className={RELEVANCE_STYLES}>Relevance</TableHead>
                <TableHead className={BRAND_STYLES}>Brand</TableHead>
                <TableHead className={WITH_MODEL_CELLS_STYLES}>
                  {Brands.HILOOK.toUpperCase()}
                </TableHead>
                <TableHead className={WITH_MODEL_CELLS_STYLES}>
                  {Brands.HIWATCH.toUpperCase()}
                </TableHead>
                <TableHead className={WITH_MODEL_CELLS_STYLES}>
                  {Brands.HIKVISION.toUpperCase()}
                </TableHead>
                <TableHead className={WITH_MODEL_CELLS_STYLES}>
                  Replacement
                </TableHead>
                <TableHead className={LINK_STYLES}>
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
                    <TableCell className={WITH_MODEL_CELLS_STYLES}>
                      {model.toUpperCase()}
                    </TableCell>
                    <TableCell className={RELEVANCE_STYLES}>
                      {relevance.toUpperCase()}
                    </TableCell>
                    <TableCell className={BRAND_STYLES}>
                      {brand || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell className={WITH_MODEL_CELLS_STYLES}>
                      {hilook.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell className={WITH_MODEL_CELLS_STYLES}>
                      {hiwatch.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell className={WITH_MODEL_CELLS_STYLES}>
                      {hikvision.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell className={WITH_MODEL_CELLS_STYLES}>
                      {replacement.toUpperCase() || EMPTY_CELL_SYMBOL}
                    </TableCell>
                    <TableCell className={LINK_STYLES}>
                      <Button asChild className='w-full'>
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
