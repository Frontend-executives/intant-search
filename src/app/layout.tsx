import { EffectorNext } from '@effector/next'
import type { Metadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { Toaster } from 'sonner'

import { SharedLocales } from '@app/locales/shared'
import { CoreDataProvider } from '@app/providers/core-data-provider'
import { GeneralRequestErrorProvider } from '@app/providers/general-request-error-provider'
import { LoadingScreenProvider } from '@app/providers/loading-screen-provider'
import { NProgressProvider } from '@app/providers/n-progress-provider'
import { OnlyDesktopProvider } from '@app/providers/only-desktop-provider'

import { Header } from '@shared/ui/header'

import './globals.css'

export const metadata: Metadata = {
  title: SharedLocales.AppTitle,
  description: SharedLocales.AppDescription
}

const Layout = ({
  children
}: Readonly<{
  children: ReactNode
}>): ReactElement => {
  return (
    <html lang='ru'>
      <body className='min-h-dvh flex flex-col text-gray-700'>
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
