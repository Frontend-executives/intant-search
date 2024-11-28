import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { OnlyDesktop } from '@/features/only-desktop/ui'
import { LoadingScreen } from '@/features/loading-screen/ui'
import { Header } from '@/shared/ui/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'EquipFinder',
  description:
    'Удобное приложение для быстрого поиска оборудования. Пользователи могут легко найти модели по названию, проверять их актуальность и узнавать рекомендуемые замены, если оборудование больше не производится.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <OnlyDesktop>
          <LoadingScreen>
            <Header />
            {children}
          </LoadingScreen>
        </OnlyDesktop>
      </body>
    </html>
  )
}
