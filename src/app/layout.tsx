import type { Metadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { Header } from '@/shared/ui/header'
import { EffectorNext } from '@effector/next'
import './globals.css'
import { CoreDataProvider } from '@/app/providers/core-data-provider'
import { OnlyDesktopProvider } from '@/app/providers/only-desktop-provider'
import { LoadingScreenProvider } from '@/app/providers/loading-screen-provider'
import { Toaster } from 'sonner'
import { NProgressProvider } from '@/app/providers/n-progress-provider'
import { GeneralRequestErrorProvider } from '@/app/providers/general-request-error-provider'

export const metadata: Metadata = {
  title: 'Поиск оборудования',
  description:
    'Приложение для быстрого поиска оборудования. Пользователи могут легко найти модели по названию, проверять их актуальность и узнавать рекомендуемые замены, если оборудование больше не производится.'
}

const Layout = ({
  children
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang="ru">
      <body className="min-h-dvh flex flex-col text-gray-700">
        <OnlyDesktopProvider>
          <EffectorNext>
            <GeneralRequestErrorProvider>
              <CoreDataProvider>
                <LoadingScreenProvider>
                  <Header />
                  <NProgressProvider>{children}</NProgressProvider>
                  <Toaster />
                </LoadingScreenProvider>
              </CoreDataProvider>
            </GeneralRequestErrorProvider>
          </EffectorNext>
        </OnlyDesktopProvider>
      </body>
    </html>
  )
}

export default Layout
