import { cva } from 'class-variance-authority'
import { ReactElement } from 'react'

import { ObsoleteEquipment } from '@pages/search/ui/obsolete-equipment'
import { RelevantEquipment } from '@pages/search/ui/relevant-equipment'

import { Relevance } from '@shared/enums/relevance'
import { Equipment } from '@shared/types'
import { Typography } from '@shared/ui/typography'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@shared/lib/shad-cn/components/ui/hover-card'

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

const hoverCardVariants = cva('w-[540px]', {
  variants: {
    relevance: {
      yes: 'border-2 border-green-600',
      no: 'border-2 border-red-600'
    }
  }
})

interface Props {
  equipment: Equipment
}

export const FoundEquipmentBadge = ({
  equipment: {
    relevance,
    replacement,
    brand,
    model,
    hikvision,
    hilook,
    hiwatch
  }
}: Props): ReactElement => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge className={badgeVariants({ relevance })} variant='default'>
          <Typography type='small'>{model.toUpperCase()}</Typography>
        </Badge>
      </HoverCardTrigger>

      <HoverCardContent className={hoverCardVariants({ relevance })}>
        {relevance === Relevance.YES && (
          <RelevantEquipment
            brand={brand}
            model={model}
            hikvision={hikvision}
            hilook={hilook}
            hiwatch={hiwatch}
          />
        )}

        {relevance === Relevance.NO && (
          <ObsoleteEquipment
            replacement={replacement}
            brand={brand}
            hikvision={hikvision}
            hilook={hilook}
            hiwatch={hiwatch}
          />
        )}
      </HoverCardContent>
    </HoverCard>
  )
}
