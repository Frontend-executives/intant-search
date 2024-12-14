import { AnotherEquipmentInfo } from '@/_pages/search/ui/another-equipment-info'
import { Brands } from '@/shared/enums/brands'
import { Equipment } from '@/shared/api'
import { Typography } from '@/shared/ui/typography'
import { ReactElement } from 'react'

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
    <div className="flex flex-col justify-center items-end gap-2">
      {!isRelevant &&
        (!replacement ? (
          <Typography type="small">
            Рекомендуемая замена не предусмотрена
          </Typography>
        ) : (
          <AnotherEquipmentInfo model={replacement} text="Замена" />
        ))}

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
  )
}
