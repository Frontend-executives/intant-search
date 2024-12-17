import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export const Container = ({ children }: Props) => {
  return (
    <section className='flex-grow p-6 flex flex-col justify-center items-center gap-6'>
      {children}
    </section>
  )
}
