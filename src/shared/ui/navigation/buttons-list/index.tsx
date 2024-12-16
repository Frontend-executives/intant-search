import Link from 'next/link'
import { ReactElement } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { ROUTER_PATHS } from '@app/settings/router-paths'

import { Button } from '@shared/lib/shad-cn/components/ui/button'

type Link = {
  variant: 'default' | 'outline' | 'destructive'
  isShown: boolean
  type: 'link'
  href: (typeof ROUTER_PATHS)[keyof typeof ROUTER_PATHS]
  text: SharedLocales
  icon: ReactElement
  onClick: null
}

type Button = {
  variant: 'default' | 'outline' | 'destructive'
  isShown: boolean
  type: 'button'
  href: null
  text: SharedLocales
  icon: ReactElement
  onClick: () => void
}

export interface ButtonsListProps {
  buttons: (Link | Button)[]
}

export const ButtonsList = ({ buttons }: ButtonsListProps): ReactElement => {
  return (
    <ul className='flex items-center gap-2'>
      {buttons.map(({ type, icon, text, href, onClick, variant, isShown }) => {
        return isShown ? (
          <li key={text}>
            {type === 'link' && (
              <Button asChild variant={variant}>
                <Link href={href}>
                  {text}
                  {icon}
                </Link>
              </Button>
            )}

            {type === 'button' && (
              <Button variant={variant} onClick={onClick}>
                {text}
                {icon}
              </Button>
            )}
          </li>
        ) : null
      })}
    </ul>
  )
}
