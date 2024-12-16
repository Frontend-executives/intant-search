import { ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export const PageContainer = ({ children }: Props): ReactElement => {
  return (
    <div className='max-w-[840px] w-full mx-auto flex flex-col items-center justify-center gap-6 text-center'>
      {children}
    </div>
  )
}
