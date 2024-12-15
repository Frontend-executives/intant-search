import { LogIn, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { SharedLocales } from '@app/locales/shared'
import { ROUTER_PATHS } from '@app/settings/router-paths'

import { Button } from '@shared/lib/shad-cn/components/ui/button'

export const Header = (): ReactElement => {
  return (
    <header className='p-6 bg-secondary border-b border-border flex items-center justify-between gap-2'>
      <Image src='/logo.png' width={126} height={18} alt='logo' />
      <div className='flex items-center gap-2'>
        <Button asChild variant='outline'>
          <Link shallow href={ROUTER_PATHS.search}>
            {SharedLocales.SearchPage}
            <SearchIcon />
          </Link>
        </Button>
        <Button asChild variant='outline'>
          <Link shallow href={ROUTER_PATHS.signIn} className='flex items-end'>
            {SharedLocales.SignIn}
            <LogIn />
          </Link>
        </Button>
      </div>
    </header>
  )
}
