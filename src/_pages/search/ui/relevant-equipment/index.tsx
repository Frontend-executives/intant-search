import { ReactElement } from 'react'
import { Typography } from '@/shared/ui/typography'
import { BadgeCheck } from 'lucide-react'
import { Brands } from '@/shared/enums/brands'
import { BrandInfo } from '@/_pages/search/ui/brand-info'
import { Equipment } from '@/shared/api'
import { Button } from '@/shared/lib/shad-cn/components/ui/button'
import { EquipmentAlternatives } from '@/_pages/search/ui/equipment-alternatives'

const HIKVISION_SEARCH_URL = 'https://www.hikvision.com/en/search/?q='

interface Props {
  brand: Equipment['brand']
  model: Equipment['model']
  hikvision: Equipment['hikvision']
  hilook: Equipment['hilook']
  hiwatch: Equipment['hiwatch']
}

export const RelevantEquipment = ({
  model,
  brand,
  hikvision,
  hiwatch,
  hilook
}: Props): ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='flex items-center justify-center gap-2'>
        <Typography>Оборудование актуально</Typography>
        <BadgeCheck color='#16a34a' />
      </div>

      <BrandInfo brand={brand} />

      <EquipmentAlternatives
        isRelevant
        replacement=''
        hiwatch={hiwatch}
        hilook={hilook}
        hikvision={hikvision}
      />

      {brand === Brands.HIKVISION && (
        <Button asChild>
          <a target='_blank' href={`${HIKVISION_SEARCH_URL}${model}`}>
            Посмотреть на официальном сайте
          </a>
        </Button>
      )}
    </div>
  )
}
