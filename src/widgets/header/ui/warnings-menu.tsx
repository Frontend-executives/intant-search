'use client'

import { useUnit } from 'effector-react'
import { usePathname } from 'next/navigation'
import { ReactElement, useMemo } from 'react'

import { Menu } from '@widgets/header/ui/menu'

import { SharedLocales } from '@shared/locales/shared'
import { $withCommaList, $withoutBrandList } from '@shared/model'
import { RouterPaths } from '@shared/router/router-paths'

export const WarningsMenu = (): ReactElement => {
  const withoutBrandList = useUnit($withoutBrandList)
  const withCommaList = useUnit($withCommaList)

  const pathname = usePathname()

  const equipmentLinks = useMemo(
    () => [
      {
        isActive: pathname === RouterPaths.WITHOUT_BRAND,
        href: RouterPaths.WITHOUT_BRAND,
        text: SharedLocales.WithoutBrand,
        count: withoutBrandList.length
      },
      {
        isActive: pathname === RouterPaths.WITH_COMMA,
        href: RouterPaths.WITH_COMMA,
        text: SharedLocales.WithComma,
        count: withCommaList.length
      }
    ],
    [pathname, withoutBrandList, withCommaList]
  )

  const totalProblemsCount = useMemo(
    () => equipmentLinks.reduce((acc, cur) => acc + cur.count, 0),
    [equipmentLinks]
  )

  return (
    <Menu
      problemsCount={totalProblemsCount}
      equipmentLinks={equipmentLinks}
      withProblemsTitle={SharedLocales.WithWarnings}
      withoutProblemsTitle={SharedLocales.WithoutWarnings}
    />
  )
}
