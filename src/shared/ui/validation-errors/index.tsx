import { ReactElement } from 'react'

import { Equipment } from '@shared/api'
import { SharedLocales } from '@shared/locales/shared'
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

interface Props {
  errors: string[]
  response: {
    password: string
    equipmentList: Equipment[]
  }
}

export const ValidationErrors = ({ errors, response }: Props): ReactElement => {
  const equipmentList = response.equipmentList

  return (
    <div className='w-full max-w-[800px] mx-auto'>
      <Typography type='h2' className='text-center p-6'>
        {SharedLocales.ValidationErrorsTitle} ({errors.length})
      </Typography>
      <Table>
        <TableHeader className='bg-secondary'>
          <TableRow>
            <TableHead>{SharedLocales.ValidationErrorsColumn}</TableHead>
            <TableHead>{SharedLocales.ValidationErrorsDescription}</TableHead>
            <TableHead className='text-center'>
              {SharedLocales.CellLink}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {errors.map((error, index) => {
            const [errorMessage, path] = error.split(', path: ')
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, rowIndex, columnName] = path.split('.')
            const equipmentWithErrors = equipmentList[Number(rowIndex)]

            return (
              <TableRow key={index}>
                <TableCell>{columnName}</TableCell>
                <TableCell>{errorMessage}</TableCell>
                <TableCell>
                  <Button asChild className='w-full' variant='link'>
                    <a target='_blank' href={equipmentWithErrors.link}>
                      {SharedLocales.ToCell}
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
