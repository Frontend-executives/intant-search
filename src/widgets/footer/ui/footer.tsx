'use client'

import { useUnit } from 'effector-react'
import Image from 'next/image'
import { ReactElement } from 'react'

import { SharedLocales } from '@shared/locales/shared'
import { $equipmentList } from '@shared/model'
import { Typography } from '@shared/ui/typography'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@shared/lib/shad-cn/components/ui/tooltip'

export const Footer = (): ReactElement => {
  const equipmentList = useUnit($equipmentList)
  const currentYear = new Date().getFullYear()
  return (
    <footer className='p-6 flex items-center justify-between gap-6 flex-wrap'>
      <div className='flex items-center gap-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image width={24} height={24} src='/tg.svg' alt='' />
            </TooltipTrigger>
            <TooltipContent>
              <a href='https://t.me/@cyril_sv' target='_blank'>
                @cyril_sv
              </a>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Typography>© {currentYear}</Typography>
      </div>

      <Typography>
        {SharedLocales.EquipmentCount} {equipmentList.length}
      </Typography>
    </footer>
  )
}
