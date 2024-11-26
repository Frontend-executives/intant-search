import { ReactElement, ReactNode } from 'react'
import Image from 'next/image'
import { Typography } from '@/shared/ui/typography'

interface Props {
  children: ReactNode | ReactNode[]
}

export const OnlyDesktop = ({ children }: Props): ReactElement => {
  return (
    <>
      <div className="flex sm:hidden flex-col items-center p-6 gap-6 text-center">
        <Image
          draggable={false}
          src={'/desktop.svg'}
          alt={'desktop'}
          width={400}
          height={400}
        />
        <Typography type="h1">Поиск не работает в мобильной версии</Typography>
        <Typography type="p">По крайней мере пока...</Typography>
      </div>
      <div className="hidden sm:block">{children}</div>
    </>
  )
}
