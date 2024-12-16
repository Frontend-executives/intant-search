'use client'

import { useUnit } from 'effector-react'
import { CopyIcon, LogIn, LogOut, ReceiptText, SearchIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ReactElement, useMemo } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { ROUTER_PATHS } from '@app/settings/router-paths'

import { $isSignedIn, signedOut } from '@pages/sign-in/model'

import {
  ButtonsList,
  ButtonsListProps
} from '@shared/ui/navigation/buttons-list'

export const Navigation = (): ReactElement => {
  const isSignedIn = useUnit($isSignedIn)
  const signOut = useUnit(signedOut)

  const pathname = usePathname()

  const SIGNED_OUT_NAVIGATION_BUTTONS: ButtonsListProps['buttons'] = useMemo(
    () => [
      {
        variant: pathname === ROUTER_PATHS.search ? 'default' : 'outline',
        isShown: pathname !== ROUTER_PATHS.search,
        type: 'link',
        href: ROUTER_PATHS.search,
        text: SharedLocales.SearchPage,
        icon: <SearchIcon />,
        onClick: null
      },
      {
        variant: pathname === ROUTER_PATHS.signIn ? 'default' : 'outline',
        isShown: true,
        type: 'link',
        onClick: null,
        text: SharedLocales.SignIn,
        icon: <LogIn />,
        href: ROUTER_PATHS.signIn
      }
    ],
    [pathname]
  )

  const SIGNED_IN_NAVIGATION_BUTTONS: ButtonsListProps['buttons'] = useMemo(
    () => [
      {
        variant: pathname === ROUTER_PATHS.search ? 'default' : 'outline',
        isShown: pathname !== ROUTER_PATHS.search,
        type: 'link',
        href: ROUTER_PATHS.search,
        text: SharedLocales.SearchPage,
        icon: <SearchIcon />,
        onClick: null
      },
      {
        variant: pathname === ROUTER_PATHS.duplicates ? 'default' : 'outline',
        isShown: true,
        type: 'link',
        href: ROUTER_PATHS.duplicates,
        text: SharedLocales.Duplicates,
        icon: <CopyIcon />,
        onClick: null
      },
      {
        variant: pathname === ROUTER_PATHS.contract ? 'default' : 'outline',
        isShown: true,
        type: 'link',
        href: ROUTER_PATHS.contract,
        text: SharedLocales.Contract,
        icon: <ReceiptText />,
        onClick: null
      },
      {
        variant: 'destructive',
        isShown: true,
        type: 'button',
        onClick: signOut,
        text: SharedLocales.SignOut,
        icon: <LogOut />,
        href: null
      }
    ],
    [pathname, signOut]
  )

  return (
    <nav>
      {isSignedIn ? (
        <ButtonsList buttons={SIGNED_IN_NAVIGATION_BUTTONS} />
      ) : (
        <ButtonsList buttons={SIGNED_OUT_NAVIGATION_BUTTONS} />
      )}
    </nav>
  )
}
