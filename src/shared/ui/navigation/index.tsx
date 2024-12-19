'use client'

import { useUnit } from 'effector-react'
import {
  CircleHelp,
  CopyIcon,
  LogIn,
  LogOut,
  ReceiptText,
  SearchIcon,
  TriangleAlert,
  VideoOff
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement, useMemo } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { ROUTER_PATHS } from '@app/settings/router-paths'

import { $isSignedIn, signedOut } from '@pages/sign-in/model'

import {
  $duplicatesList,
  $invalidReplacementsList,
  $obsoletesWithoutReplacement,
  $relevantsWithReplacement
} from '@shared/model'

import { Badge } from '@shared/lib/shad-cn/components/ui/badge'
import { Button } from '@shared/lib/shad-cn/components/ui/button'

export const Navigation = (): ReactElement => {
  const isSignedIn = useUnit($isSignedIn)
  const signOut = useUnit(signedOut)
  const duplicatesList = useUnit($duplicatesList)
  const invalidReplacementsList = useUnit($invalidReplacementsList)
  const obsoletesWithoutReplacement = useUnit($obsoletesWithoutReplacement)
  const relevantsWithReplacement = useUnit($relevantsWithReplacement)

  const pathname = usePathname()

  const NAVIGATION_BUTTONS = useMemo(
    () =>
      [
        {
          isShown: true,
          variant: pathname === ROUTER_PATHS.search ? 'default' : 'outline',
          type: 'link',
          href: ROUTER_PATHS.search,
          text: SharedLocales.SearchPage,
          icon: <SearchIcon />,
          onClick: null,
          count: null
        },
        {
          isShown: isSignedIn,
          variant: pathname === ROUTER_PATHS.duplicates ? 'default' : 'outline',
          type: 'link',
          href: ROUTER_PATHS.duplicates,
          text: SharedLocales.Duplicates,
          icon: <CopyIcon />,
          onClick: null,
          count: duplicatesList.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === ROUTER_PATHS.invalidReplacements
              ? 'default'
              : 'outline',
          type: 'link',
          href: ROUTER_PATHS.invalidReplacements,
          text: SharedLocales.InvalidReplacements,
          icon: <VideoOff />,
          onClick: null,
          count: invalidReplacementsList.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === ROUTER_PATHS.obsoletesWithoutReplacement
              ? 'default'
              : 'outline',
          type: 'link',
          href: ROUTER_PATHS.obsoletesWithoutReplacement,
          text: SharedLocales.ObsoletesWithoutReplacement,
          icon: <CircleHelp />,
          onClick: null,
          count: obsoletesWithoutReplacement.length || null
        },
        {
          isShown: isSignedIn,
          variant:
            pathname === ROUTER_PATHS.relevantsWithReplacement
              ? 'default'
              : 'outline',
          type: 'link',
          href: ROUTER_PATHS.relevantsWithReplacement,
          text: SharedLocales.RelevantsWithReplacement,
          icon: <TriangleAlert />,
          onClick: null,
          count: relevantsWithReplacement.length || null
        },
        {
          isShown: isSignedIn,
          variant: pathname === ROUTER_PATHS.contract ? 'default' : 'outline',
          type: 'link',
          href: ROUTER_PATHS.contract,
          text: SharedLocales.Contract,
          icon: <ReceiptText />,
          onClick: null,
          count: null
        },
        {
          isShown: !isSignedIn,
          variant: pathname === ROUTER_PATHS.signIn ? 'default' : 'outline',
          type: 'link',
          href: ROUTER_PATHS.signIn,
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
    [pathname, signOut, duplicatesList, invalidReplacementsList, isSignedIn]
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
