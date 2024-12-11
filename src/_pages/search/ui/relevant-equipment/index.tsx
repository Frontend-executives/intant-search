import { ReactElement } from 'react'
import { Typography } from '@/shared/ui/typography'
import { BadgeCheck } from 'lucide-react'

export const RelevantEquipment = (): ReactElement => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Typography>Оборудование актуально</Typography>
      <BadgeCheck color="#16a34a" />
    </div>
  )
}
