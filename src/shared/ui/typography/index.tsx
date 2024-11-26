import { ReactElement, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva('text-gray-700', {
  variants: {
    type: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: '',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground'
    }
  }
})

interface Props extends VariantProps<typeof variants> {
  children: ReactNode
}

export const Typography = ({ type, children }: Props): ReactElement => {
  return <p className={variants({ type })}>{children}</p>
}
