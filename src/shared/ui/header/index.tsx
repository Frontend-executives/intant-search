import { ReactElement } from 'react'
import Image from 'next/image'

export const Header = (): ReactElement => {
  return (
    <header className="p-6 bg-secondary">
      <Image src={'/logo.png'} width={180} height={26} alt={'logo'} />
    </header>
  )
}
