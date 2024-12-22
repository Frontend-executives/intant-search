'use client'

import { cva } from 'class-variance-authority'
import { useUnit } from 'effector-react'
import { LogIn, LogOut, ReceiptText, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement, useMemo } from 'react'

import { signedOut } from '@pages/sign-in/model'

import { SharedLocales } from '@shared/locales/shared'
import {
  $duplicatesList,
  $invalidReplacementsList,
  $isSignedIn,
  $obsoletesWithoutReplacementList,
  $relevantsWithReplacementList,
  $selfReplacementList
} from '@shared/model'
import { RouterPaths } from '@shared/router/router-paths'
import { Typography } from '@shared/ui/typography'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import { Button } from '@shared/lib/shad-cn/components/ui/button'
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

export const Navigation = (): ReactElement => {
  const isSignedIn = useUnit($isSignedIn)
  const signOut = useUnit(signedOut)
  const duplicatesList = useUnit($duplicatesList)
  const invalidReplacementsList = useUnit($invalidReplacementsList)
  const obsoletesWithoutReplacementList = useUnit(
    $obsoletesWithoutReplacementList
  )
  const relevantsWithReplacementList = useUnit($relevantsWithReplacementList)
  const selfReplacementList = useUnit($selfReplacementList)

  const pathname = usePathname()

  const navigationLinks = useMemo(
    () =>
      [
        {
          isActive: pathname === RouterPaths.DUPLICATES,
          href: RouterPaths.DUPLICATES,
          text: SharedLocales.Duplicates,
          count: duplicatesList.length
        },
        {
          isActive: pathname === RouterPaths.INVALID_REPLACEMENTS,
          href: RouterPaths.INVALID_REPLACEMENTS,
          text: SharedLocales.InvalidReplacements,
          count: invalidReplacementsList.length
        },
        {
          isActive: pathname === RouterPaths.OBSOLETES_WITHOUT_REPLACEMENT,
          href: RouterPaths.OBSOLETES_WITHOUT_REPLACEMENT,
          text: SharedLocales.ObsoletesWithoutReplacement,
          count: obsoletesWithoutReplacementList.length
        },
        {
          isActive: pathname === RouterPaths.RELEVANTS_WITH_REPLACEMENT,
          href: RouterPaths.RELEVANTS_WITH_REPLACEMENT,
          text: SharedLocales.RelevantsWithReplacement,
          count: relevantsWithReplacementList.length
        },
        {
          isActive: pathname === RouterPaths.SELF_REPLACEMENT,
          href: RouterPaths.SELF_REPLACEMENT,
          text: SharedLocales.SelfReplacement,
          count: selfReplacementList.length
        }
      ] as const,
    [
      pathname,
      duplicatesList,
      invalidReplacementsList,
      obsoletesWithoutReplacementList,
      selfReplacementList,
      relevantsWithReplacementList
    ]
  )

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
            <DropdownMenu>
              <li>
                <DropdownMenuTrigger>
                  <Button variant='outline'>
                    Проблемы
                    <Badge>
                      {navigationLinks.reduce((acc, cur) => acc + cur.count, 0)}
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
              </li>
              <DropdownMenuContent>
                {navigationLinks.map(({ href, text, count, isActive }) => (
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
