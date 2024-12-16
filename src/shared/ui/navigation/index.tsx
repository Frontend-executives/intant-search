'use client'

import { useUnit } from 'effector-react'
import { LogIn, LogOut, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { ROUTER_PATHS } from '@app/settings/router-paths'

import { $isSignedIn, signedOut } from '@pages/sign-in/model'

import { Button } from '@shared/lib/shad-cn/components/ui/button'

export const Navigation = (): ReactElement => {
  const isSignedIn = useUnit($isSignedIn)
  const signOut = useUnit(signedOut)
  const pathname = usePathname()

  return (
    <nav>
      {isSignedIn ? (
        <ul className='flex items-center gap-2'>
          <li>
            <Button variant='destructive' onClick={signOut}>
              {SharedLocales.SignOut}
              <LogOut />
            </Button>
          </li>
        </ul>
      ) : (
        <ul className='flex items-center gap-2'>
          {pathname !== ROUTER_PATHS.search && (
            <li>
              <Button asChild variant='outline'>
                <Link shallow href={ROUTER_PATHS.search}>
                  {SharedLocales.SearchPage}
                  <SearchIcon />
                </Link>
              </Button>
            </li>
          )}

          <li>
            <Button
              asChild
              variant={pathname === ROUTER_PATHS.signIn ? 'default' : 'outline'}
            >
              <Link shallow href={ROUTER_PATHS.signIn}>
                {SharedLocales.SignIn}
                <LogIn />
              </Link>
            </Button>
          </li>
        </ul>
      )}
    </nav>
  )
}
