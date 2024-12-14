import { ReactElement } from 'react'
import { Brands } from '@/shared/enums/brands'
import { Typography } from '@/shared/ui/typography'
import { Equipment } from '@/shared/api'

const TYPOGRAPHY_CLASS_NAME = 'font-semibold text-gray-500'

interface Props {
  brand: Equipment['brand']
}

export const BrandInfo = ({ brand }: Props): ReactElement | null => {
  const upperCasedBrand = brand.toUpperCase()

  return (
    <div className={'flex items-center gap-2 w-36'}>
      {!brand && (
        <Typography type={'small'} className={TYPOGRAPHY_CLASS_NAME}>
          Бренд неизвестен
        </Typography>
      )}

      {brand === Brands.HIKVISION && (
        <Typography className={TYPOGRAPHY_CLASS_NAME} type={'small'}>
          Бренд: {upperCasedBrand}
        </Typography>
      )}

      {brand === Brands.HILOOK && (
        <Typography className={TYPOGRAPHY_CLASS_NAME} type={'small'}>
          Бренд: {upperCasedBrand}
        </Typography>
      )}

      {brand === Brands.HIWATCH && (
        <Typography className={TYPOGRAPHY_CLASS_NAME} type={'small'}>
          Бренд: {upperCasedBrand}
        </Typography>
      )}
    </div>
  )
}
