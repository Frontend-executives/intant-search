import { ReactElement } from 'react'

import { AnotherEquipmentInfo } from '@pages/search/ui/another-equipment-info'

import { Equipment } from '@shared/api'
import { Brands } from '@shared/enums/brands'
import { SearchLocales } from '@shared/locales/search'
import { Typography } from '@shared/ui/typography'

interface Props {
  hikvision: Equipment['hikvision']
  hilook: Equipment['hilook']
  hiwatch: Equipment['hiwatch']
  replacement: Equipment['replacement']
  isRelevant: boolean
}

export const EquipmentAlternatives = ({
  hilook,
  hiwatch,
  hikvision,
  replacement,
  isRelevant
}: Props): ReactElement => {
  return (
    <>
      {!isRelevant &&
        (!replacement ? (
          <Typography type='small'>
            {SearchLocales.ReplacementNotFound}
          </Typography>
        ) : (
          <AnotherEquipmentInfo model={replacement} text='Замена' />
        ))}

      {(hilook || hiwatch || hikvision) && (
        <div className='flex flex-col gap-2 items-end'>
          {hikvision && (
            <AnotherEquipmentInfo
              model={hikvision}
              text={Brands.HIKVISION.toUpperCase()}
            />
          )}
          {hilook && (
            <AnotherEquipmentInfo
              model={hilook}
              text={Brands.HILOOK.toUpperCase()}
            />
          )}
          {hiwatch && (
            <AnotherEquipmentInfo
              model={hiwatch}
              text={Brands.HIWATCH.toUpperCase()}
            />
          )}
        </div>
      )}
    </>
  )
}
