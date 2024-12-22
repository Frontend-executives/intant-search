import Image from 'next/image'
import { ReactElement } from 'react'

import { Navigation } from '@shared/ui/navigation'

export const Header = (): ReactElement => {
  return (
    <header className='p-3 bg-gradient-to-r from-white to-zinc-300  flex items-center justify-between gap-2 m-6 rounded-2xl border border-border'>
      <Image src='/logo.png' width={126} height={18} alt='logo' />

      <Navigation />
    </header>
  )
}
