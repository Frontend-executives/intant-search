import { CircleCheck } from 'lucide-react'
import { ReactElement } from 'react'

import { SharedLocales } from '@shared/locales/shared'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import { Button } from '@shared/lib/shad-cn/components/ui/button'

interface Props {
  count: number
}

export const Problems = ({ count }: Props): ReactElement => {
  return (
    <Button variant='outline' asChild>
      <div className='flex gap-2'>
        {count > 0 ? (
          <>
            {SharedLocales.WithProblems}
            <Badge>{count}</Badge>
          </>
        ) : (
          <>
            {SharedLocales.WithoutProblems}
            <CircleCheck className='text-green-600' />
          </>
        )}
      </div>
    </Button>
  )
}
