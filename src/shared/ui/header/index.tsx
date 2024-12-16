import Image from 'next/image'
import { ReactElement } from 'react'

import { Navigation } from '@shared/ui/navigation'

export const Header = (): ReactElement => {
  return (
    <header className='p-6 bg-gradient-to-r from-white to-zinc-400  flex items-center justify-between gap-2'>
      <Image src='/logo.png' width={126} height={18} alt='logo' />

      <Navigation />
    </header>
  )
}
