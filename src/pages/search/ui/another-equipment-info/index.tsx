import { ReactElement } from 'react'

import { SearchAndCopy } from '@pages/search/ui/search-and-copy'

import { Equipment } from '@shared/api'
import { Typography } from '@shared/ui/typography'

interface Props {
  model:
    | Equipment['replacement']
    | Equipment['hikvision']
    | Equipment['hilook']
    | Equipment['hiwatch']
  text: string
}

export const AnotherEquipmentInfo = ({ model, text }: Props): ReactElement => {
  return (
    <div className='flex items-center gap-2 justify-center'>
      <Typography type='small'>
        {text}: <span className='font-bold'>{model.toUpperCase()}</span>
      </Typography>

      <SearchAndCopy model={model} />
    </div>
  )
}
