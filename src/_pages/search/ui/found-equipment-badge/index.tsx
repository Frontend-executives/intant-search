import { ReactElement } from 'react'
import { Badge } from '@/shared/lib/shad-cn/components/ui/badge'
import { cva } from 'class-variance-authority'
import { Typography } from '@/shared/ui/typography'

const variants = cva('text-white pointer-events-none whitespace-nowrap', {
  variants: {
    relevance: {
      yes: 'bg-green-600',
      no: 'bg-red-600'
    }
  }
})

interface Props {
  children: string
  relevance: 'yes' | 'no'
}

export const FoundEquipmentBadge = ({
  children,
  relevance
}: Props): ReactElement => {
  return (
    <Badge className={variants({ relevance })} variant={'default'}>
      <Typography type={'small'}>{children.toUpperCase()}</Typography>
    </Badge>
  )
}
