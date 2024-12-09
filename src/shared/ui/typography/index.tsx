import { ReactElement, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

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
}

export const Typography = ({ type = 'p', children }: Props): ReactElement => {
  return <p className={variants({ type })}>{children}</p>
}
