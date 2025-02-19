import { ReactElement, ReactNode } from 'react'

import { SharedLocales } from '@shared/locales/shared'
import { Notification } from '@shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const OnlyDesktopProvider = ({ children }: Props): ReactElement => {
  return (
    <>
      <div className='lg:hidden flex-grow flex'>
        <Notification
          notesList={null}
          size='M'
          title={SharedLocales.OnlyDesktopTitle}
          description={SharedLocales.OnlyDesktopDescription}
          image='/desktop.svg'
          button={null}
        />
      </div>
      <div className='hidden lg:flex flex-grow flex-col'>{children}</div>
    </>
  )
}
