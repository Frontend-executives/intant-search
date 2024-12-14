import { ReactElement, ReactNode } from 'react'

import { SharedLocales } from '@app/locales/shared'

import { Notification } from '@shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const OnlyDesktopProvider = ({ children }: Props): ReactElement => {
  return (
    <>
      <div className='sm:hidden flex-grow flex flex-col items-center justify-center'>
        <Notification
          notesList={null}
          size='M'
          title={SharedLocales.OnlyDesktopTitle}
          description={SharedLocales.OnlyDesktopDescription}
          image='/desktop.svg'
          button={null}
        />
      </div>
      <div className='hidden sm:flex flex-grow flex-col'>{children}</div>
    </>
  )
}
