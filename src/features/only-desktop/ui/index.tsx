import { ReactElement, ReactNode } from 'react'
import { Notification } from '@/shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const OnlyDesktop = ({ children }: Props): ReactElement => {
  return (
    <>
      <div className="sm:hidden flex-grow flex flex-col items-center justify-center">
        <Notification
          title={'Ой, а мобильной версии нет'}
          description={'Её украли...'}
          image={'/mobile.svg'}
          button={null}
        />
      </div>
      <div className="hidden sm:flex flex-grow flex-col">{children}</div>
    </>
  )
}
