import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { ReactElement } from 'react'

import { Problems } from '@widgets/header/ui/problems'

import { RouterPaths } from '@shared/router/router-paths'
import { Typography } from '@shared/ui/typography'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@shared/lib/shad-cn/components/ui/dropdown-menu'

const variants = cva('flex gap-2 items-center px-3 py-1 rounded-sm w-full', {
  variants: {
    isActive: {
      true: 'bg-primary text-white',
      false: ''
    }
  }
})

interface Props {
  problemsCount: number
  withProblemsTitle: string
  withoutProblemsTitle: string
  equipmentLinks: {
    isActive: boolean
    href: RouterPaths
    text: string
    count: number
  }[]
}

export const Menu = ({
  problemsCount,
  withoutProblemsTitle,
  withProblemsTitle,
  equipmentLinks
}: Props): ReactElement => {
  return (
    <DropdownMenu>
      <li>
        <DropdownMenuTrigger>
          <Problems
            count={problemsCount}
            withoutProblemsTitle={withoutProblemsTitle}
            withProblemsTitle={withProblemsTitle}
          />
        </DropdownMenuTrigger>
      </li>
      <DropdownMenuContent>
        {equipmentLinks.map(({ href, text, count, isActive }) => (
          <DropdownMenuItem key={href}>
            <Link href={href} className={variants({ isActive })}>
              <Typography type='small'>{text}</Typography>
              {count > 0 && (
                <Badge variant={isActive ? 'secondary' : 'default'}>
                  {count}
                </Badge>
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
