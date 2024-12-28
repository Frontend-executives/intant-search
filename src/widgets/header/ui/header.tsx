import Image from 'next/image'
import { ReactElement } from 'react'

import { Navigation } from './navigation'

export const Header = (): ReactElement => {
  return (
    <>
      <div className='h-[66px] m-6'>1</div>
      <div className='p-6 fixed top-0 left-0 right-0 z-10 bg-white/50 backdrop-blur-md'>
        <header className='p-3 bg-gradient-to-r from-white/70 to-zinc-400/70  flex items-center justify-between gap-2 rounded-2xl border border-border'>
          <Image src='/logo.png' width={126} height={18} alt='logo' />

          <Navigation />
        </header>
      </div>
    </>
  )
}
