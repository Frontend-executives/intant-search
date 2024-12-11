import { ReactElement } from 'react'
import { Badge } from '@/shared/lib/shad-cn/components/ui/badge'
import { cva } from 'class-variance-authority'
import { Typography } from '@/shared/ui/typography'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/shared/lib/shad-cn/components/ui/hover-card'
import { RelevantEquipment } from '@/_pages/search/ui/relevant-equipment'
import { ObsoleteEquipment } from '@/_pages/search/ui/obsolete-equipment'

const badgeVariants = cva(
  'text-white whitespace-nowrap transition-colors hover:cursor-help',
  {
    variants: {
      relevance: {
        yes: 'bg-green-600 hover:bg-green-700',
        no: 'bg-red-600 hover:bg-red-700'
      }
    }
  }
)

const hoverCardVariants = cva('w-[420px]', {
  variants: {
    relevance: {
      yes: 'border-2 border-green-600',
      no: 'border-2 border-red-600'
    }
  }
})

interface Props {
  children: string
  relevance: 'yes' | 'no'
  replacement: string
}

export const FoundEquipmentBadge = ({
  children,
  relevance,
  replacement
}: Props): ReactElement => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge className={badgeVariants({ relevance })} variant={'default'}>
          <Typography type={'small'}>{children.toUpperCase()}</Typography>
        </Badge>
      </HoverCardTrigger>

      <HoverCardContent className={hoverCardVariants({ relevance })}>
        {relevance === 'yes' && <RelevantEquipment />}

        {relevance === 'no' && <ObsoleteEquipment replacement={replacement} />}
      </HoverCardContent>
    </HoverCard>
  )
}
