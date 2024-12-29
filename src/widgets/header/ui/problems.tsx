import { CircleCheck } from 'lucide-react'
import { ReactElement } from 'react'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import { Button } from '@shared/lib/shad-cn/components/ui/button'

interface Props {
  count: number
  withProblemsTitle: string
  withoutProblemsTitle: string
}

export const Problems = ({
  count,
  withoutProblemsTitle,
  withProblemsTitle
}: Props): ReactElement => {
  return (
    <Button variant='outline' asChild>
      <div className='flex gap-2'>
        {count > 0 ? (
          <>
            {withProblemsTitle}
            <Badge className='pointer-events-none'>{count}</Badge>
          </>
        ) : (
          <>
            {withoutProblemsTitle}
            <CircleCheck className='text-green-600' />
          </>
        )}
      </div>
    </Button>
  )
}
