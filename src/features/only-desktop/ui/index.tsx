import { ReactElement, ReactNode } from 'react'
import { Notification } from '@/shared/ui/notification'

interface Props {
  children: ReactNode | ReactNode[]
}

export const OnlyDesktop = ({ children }: Props): ReactElement => {
  return (
    <>
      <div className={'sm:hidden'}>
        <Notification
          title={'Ой, а мобильной версии нет'}
          description={'Её украли...'}
          image={'/mobile.svg'}
          button={null}
        />
      </div>
      <div className="hidden sm:block">{children}</div>
    </>
  )
}
