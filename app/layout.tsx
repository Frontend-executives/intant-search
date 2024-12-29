import { EffectorNext } from '@effector/next'
import type { Metadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { Toaster } from 'sonner'

import { CoreDataProvider } from '@app/providers/core-data-provider'
import { GeneralRequestErrorProvider } from '@app/providers/general-request-error-provider'
import { NProgressProvider } from '@app/providers/n-progress-provider'
import { OnlyDesktopProvider } from '@app/providers/only-desktop-provider'
import { RouterSetProvider } from '@app/providers/router-set-provider'

import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'

import { SharedLocales } from '@shared/locales/shared'

import '@app/styles/globals.css'

export const metadata: Metadata = {
  title: SharedLocales.AppTitle,
  description: SharedLocales.AppDescription
}

const Layout = async ({
  children
}: Readonly<{
  children: ReactNode
}>): Promise<ReactElement> => {
  return (
    <html lang='ru'>
      <body className='min-h-dvh flex flex-col text-zinc-700'>
        <EffectorNext>
          <GeneralRequestErrorProvider>
            <NProgressProvider>
              <OnlyDesktopProvider>
                <CoreDataProvider>
                  <RouterSetProvider>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                  </RouterSetProvider>
                </CoreDataProvider>
              </OnlyDesktopProvider>
            </NProgressProvider>
          </GeneralRequestErrorProvider>
        </EffectorNext>
      </body>
    </html>
  )
}

export default Layout
