import { cva, type VariantProps } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'

const variants = cva('text-current', {
  variants: {
    type: {
      h1: 'text-2xl sm:text-5xl font-extrabold',
      h2: 'text-4xl font-extrabold',
      h3: 'text-3xl font-extrabold',
      h4: 'text-2xl font-extrabold',
      p: 'text-md sm:text-lg font-medium',
      small: 'text-base'
    }
  }
})

interface Props extends VariantProps<typeof variants> {
  children: ReactNode
  className?: string
}

export const Typography = ({
  type = 'p',
  children,
  className
}: Props): ReactElement => {
  return <p className={variants({ type, className })}>{children}</p>
}
