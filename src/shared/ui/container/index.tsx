import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export const Container = ({ children }: Props) => {
  return (
    <section className='flex-grow p-6 flex flex-col gap-6 items-center text-center'>
      {children}
    </section>
  )
}
