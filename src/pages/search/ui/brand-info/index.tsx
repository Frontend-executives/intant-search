import { ReactElement } from 'react'

import { Brands } from '@shared/enums/brands'
import { SearchLocales } from '@shared/locales/search'
import { Equipment } from '@shared/types'
import { Typography } from '@shared/ui/typography'

const TYPOGRAPHY_CLASS_NAME = 'font-semibold text-gray-500'

interface Props {
  brand: Equipment['brand']
}

export const BrandInfo = ({ brand }: Props): ReactElement | null => {
  const upperCasedBrand = brand.toUpperCase()

  return (
    <div className='flex flex-col items-center gap-2'>
      {!brand && (
        <Typography type='small' className={TYPOGRAPHY_CLASS_NAME}>
          {SearchLocales.UnknownBrand}
        </Typography>
      )}

      {brand === Brands.HIKVISION && (
        <Typography className={TYPOGRAPHY_CLASS_NAME} type='small'>
          {SearchLocales.Brand} {upperCasedBrand}
        </Typography>
      )}

      {brand === Brands.HILOOK && (
        <Typography className={TYPOGRAPHY_CLASS_NAME} type='small'>
          {SearchLocales.Brand} {upperCasedBrand}
        </Typography>
      )}

      {brand === Brands.HIWATCH && (
        <Typography className={TYPOGRAPHY_CLASS_NAME} type='small'>
          {SearchLocales.Brand} {upperCasedBrand}
        </Typography>
      )}
    </div>
  )
}
