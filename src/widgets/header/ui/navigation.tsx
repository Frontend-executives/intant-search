'use client'

import { useUnit } from 'effector-react'
import { LogIn, LogOut, ReceiptText, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement } from 'react'

import { signedOut } from '@pages/sign-in/model'

import { MistakesMenu } from '@widgets/header/ui/mistakes-menu'
import { WarningsMenu } from '@widgets/header/ui/warnings-menu'

import { SharedLocales } from '@shared/locales/shared'
import { $isSignedIn } from '@shared/model'
import { RouterPaths } from '@shared/router/router-paths'

import { Button } from '@shared/lib/shad-cn/components/ui/button'

export const Navigation = (): ReactElement => {
  const isSignedIn = useUnit($isSignedIn)
  const signOut = useUnit(signedOut)

  const pathname = usePathname()

  return (
    <nav>
      <ul className='flex items-center gap-2'>
        <li>
          <Button
            asChild
            variant={pathname === RouterPaths.SEARCH ? 'default' : 'outline'}
          >
            <Link href={RouterPaths.SEARCH}>
              {SharedLocales.SearchPage}
              <SearchIcon />
            </Link>
          </Button>
        </li>

        {isSignedIn && (
          <>
            <MistakesMenu />
            <WarningsMenu />

            <li>
              <Button
                asChild
                variant={
                  pathname === RouterPaths.CONTRACT ? 'default' : 'outline'
                }
              >
                <Link href={RouterPaths.CONTRACT}>
                  {SharedLocales.Contract}
                  <ReceiptText />
                </Link>
              </Button>
            </li>
          </>
        )}

        <li>
          {isSignedIn ? (
            <Button variant='destructive' onClick={signOut}>
              {SharedLocales.SignOut}
              <LogOut />
            </Button>
          ) : (
            <Button
              asChild
              variant={pathname === RouterPaths.SIGN_IN ? 'default' : 'outline'}
            >
              <Link href={RouterPaths.SIGN_IN}>
                {SharedLocales.SignIn}
                <LogIn />
              </Link>
            </Button>
          )}
        </li>
      </ul>
    </nav>
  )
}
