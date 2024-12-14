import Image from 'next/image'
import { ReactElement } from 'react'

export const Header = (): ReactElement => {
  return (
    <header className='p-6 bg-secondary border-b border-border'>
      <Image src='/logo.png' width={126} height={18} alt='logo' />
    </header>
  )
}
