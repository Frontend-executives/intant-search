import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
}

export const Container = ({ children }: Props) => {
  return (
    <section className='flex-grow flex flex-col items-center justify-center gap-4 text-center p-6 m-auto w-full max-w-4xl'>
      {children}
    </section>
  )
}
