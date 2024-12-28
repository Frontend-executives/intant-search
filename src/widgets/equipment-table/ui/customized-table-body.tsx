import { cva, cx } from 'class-variance-authority'
import { Link } from 'lucide-react'
import { ReactElement } from 'react'

import { Equipment } from '@shared/api'
import { Relevance } from '@shared/enums/relevance'
import { SharedLocales } from '@shared/locales/shared'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import { Button } from '@shared/lib/shad-cn/components/ui/button'
import {
  TableBody,
  TableCell,
  TableRow
} from '@shared/lib/shad-cn/components/ui/table'

const relevanceVariants = cva('pointer-events-none', {
  variants: {
    isRelevant: {
      true: 'bg-green-600',
      false: 'bg-red-600'
    }
  }
})

const EMPTY_VALUE = '-'

const MODEL_SELECT_CLASSNAME = 'cursor-text select-text'

interface Props {
  equipmentList: Equipment[]
  withModelClassName: string
  withoutModelClassName: string
  rowClassName: string
}

export const CustomizedTableBody = ({
  equipmentList,
  withModelClassName,
  withoutModelClassName,
  rowClassName
}: Props): ReactElement => {
  return (
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
          index
        ) => (
          <TableRow key={index} className={rowClassName}>
            <TableCell className={withoutModelClassName}>{index + 1}</TableCell>
            <TableCell
              className={cx(withModelClassName, MODEL_SELECT_CLASSNAME)}
            >
              {model.toUpperCase()}
            </TableCell>
            <TableCell className={withoutModelClassName}>
              <Badge
                className={relevanceVariants({
                  isRelevant: relevance === Relevance.YES
                })}
              >
                {relevance.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell className={withoutModelClassName}>
              {brand.toUpperCase() || EMPTY_VALUE}
            </TableCell>
            <TableCell
              className={cx(withModelClassName, MODEL_SELECT_CLASSNAME)}
            >
              {hilook.toUpperCase() || EMPTY_VALUE}
            </TableCell>
            <TableCell
              className={cx(withModelClassName, MODEL_SELECT_CLASSNAME)}
            >
              {hiwatch.toUpperCase() || EMPTY_VALUE}
            </TableCell>
            <TableCell
              className={cx(withModelClassName, MODEL_SELECT_CLASSNAME)}
            >
              {hikvision.toUpperCase() || EMPTY_VALUE}
            </TableCell>
            <TableCell
              className={cx(withModelClassName, MODEL_SELECT_CLASSNAME)}
            >
              {replacement.toUpperCase() || EMPTY_VALUE}
            </TableCell>
            <TableCell className={withoutModelClassName}>
              <Button asChild variant='link'>
                <a href={link} target='_blank'>
                  {SharedLocales.ToCell} <Link />
                </a>
              </Button>
            </TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  )
}
