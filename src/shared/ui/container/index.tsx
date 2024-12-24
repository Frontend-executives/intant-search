import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <section
      className={cx(
        'flex-grow flex flex-col items-center justify-center gap-4 text-center p-6 mx-auto w-full max-w-4xl',
        className
      )}
    >
      {children}
    </section>
  )
}
