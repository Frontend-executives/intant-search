import { BadgeX } from 'lucide-react'
import { ReactElement } from 'react'

import { BrandInfo } from '@pages/search/ui/brand-info'
import { EquipmentAlternatives } from '@pages/search/ui/equipment-alternatives'

import { Equipment } from '@shared/api'
import { Typography } from '@shared/ui/typography'

interface Props {
  replacement: Equipment['replacement']
  brand: Equipment['brand']
  hikvision: Equipment['hikvision']
  hilook: Equipment['hilook']
  hiwatch: Equipment['hiwatch']
}

export const ObsoleteEquipment = ({
  replacement,
  brand,
  hikvision,
  hiwatch,
  hilook
}: Props): ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='flex items-center justify-center gap-2'>
        <Typography>Оборудование снято с производства</Typography>
        <BadgeX color='#dc2625' />
      </div>

      <BrandInfo brand={brand} />

      <EquipmentAlternatives
        isRelevant={false}
        replacement={replacement}
        hiwatch={hiwatch}
        hilook={hilook}
        hikvision={hikvision}
      />
    </div>
  )
}
