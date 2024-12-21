'use client'

import { useUnit } from 'effector-react'
import {
  CircleHelp,
  CopyIcon,
  LogIn,
  LogOut,
  ReceiptText,
  RotateCw,
  SearchIcon,
  TriangleAlert,
  VideoOff
} from 'lucide-react'
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

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import { Button } from '@shared/lib/shad-cn/components/ui/button'

export const Navigation = (): ReactElement => {
  const isSignedIn = useUnit($isSignedIn)
  const signOut = useUnit(signedOut)
  const duplicatesList = useUnit($duplicatesList)
  const invalidReplacementsList = useUnit($invalidReplacementsList)
  const obsoletesWithoutReplacementList = useUnit(
    $obsoletesWithoutReplacementList
  )
  const relevantsWithReplacementList = useUnit($relevantsWithReplacementList)
  const selftReplacementList = useUnit($selfReplacementList)

  const pathname = usePathname()

  const NAVIGATION_BUTTONS = useMemo(
    () =>
      [
        {
          isShown: true,
          variant: pathname === RouterPaths.SEARCH ? 'default' : 'outline',
          type: 'link',
          href: RouterPaths.SEARCH,
          text: SharedLocales.SearchPage,
          icon: <SearchIcon />,
          onClick: null,
          count: null
        },
        {
          isShown: isSignedIn,
          variant: pathname === RouterPaths.DUPLICATES ? 'default' : 'outline',
          type: 'link',
          href: RouterPaths.DUPLICATES,
          text: SharedLocales.Duplicates,
          icon: <CopyIcon />,
          onClick: null,
          count: duplicatesList.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === RouterPaths.INVALID_REPLACEMENTS
              ? 'default'
              : 'outline',
          type: 'link',
          href: RouterPaths.INVALID_REPLACEMENTS,
          text: SharedLocales.InvalidReplacements,
          icon: <VideoOff />,
          onClick: null,
          count: invalidReplacementsList.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === RouterPaths.OBSOLETES_WITHOUT_REPLACEMENT
              ? 'default'
              : 'outline',
          type: 'link',
          href: RouterPaths.OBSOLETES_WITHOUT_REPLACEMENT,
          text: SharedLocales.ObsoletesWithoutReplacement,
          icon: <CircleHelp />,
          onClick: null,
          count: obsoletesWithoutReplacementList.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === RouterPaths.RELEVANTS_WITH_REPLACEMENT
              ? 'default'
              : 'outline',
          type: 'link',
          href: RouterPaths.RELEVANTS_WITH_REPLACEMENT,
          text: SharedLocales.RelevantsWithReplacement,
          icon: <TriangleAlert />,
          onClick: null,
          count: relevantsWithReplacementList.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === RouterPaths.SELF_REPLACEMENT ? 'default' : 'outline',
          type: 'link',
          href: RouterPaths.SELF_REPLACEMENT,
          text: SharedLocales.SelfReplacement,
          icon: <RotateCw />,
          onClick: null,
          count: selftReplacementList.length || null
        },
        {
          isShown: isSignedIn,
          variant: pathname === RouterPaths.CONTRACT ? 'default' : 'outline',
          type: 'link',
          href: RouterPaths.CONTRACT,
          text: SharedLocales.Contract,
          icon: <ReceiptText />,
          onClick: null,
          count: null
        },
        {
          isShown: !isSignedIn,
          variant: pathname === RouterPaths.SIGN_IN ? 'default' : 'outline',
          type: 'link',
          href: RouterPaths.SIGN_IN,
          text: SharedLocales.SignIn,
          icon: <LogIn />,
          onClick: null,
          count: null
        },
        {
          isShown: isSignedIn,
          variant: 'destructive',
          type: 'button',
          onClick: signOut,
          text: SharedLocales.SignOut,
          icon: <LogOut />,
          href: null,
          count: null
        }
      ] as const,
    [
      pathname,
      signOut,
      duplicatesList,
      invalidReplacementsList,
      obsoletesWithoutReplacementList,
      selftReplacementList,
      relevantsWithReplacementList,
      isSignedIn
    ]
  )

  return (
    <nav>
      <ul className='flex items-center gap-2'>
        {NAVIGATION_BUTTONS.map(
          ({ type, icon, text, href, onClick, variant, count, isShown }) => {
            return isShown ? (
              <li key={text}>
                {type === 'link' && (
                  <Button asChild variant={variant} className='relative'>
                    <Link href={href}>
                      {text}
                      {icon}

                      {count && (
                        <Badge
                          className='absolute bottom-[-14px]'
                          variant='destructive'
                        >
                          {count}
                        </Badge>
                      )}
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
          }
        )}
      </ul>
    </nav>
  )
}
