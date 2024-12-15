import { EffectorNext } from '@effector/next'
import type { Metadata } from 'next'
import { ReactElement, ReactNode } from 'react'
import { Toaster } from 'sonner'

import { SharedLocales } from '@app/locales/shared'
import { GeneralRequestErrorProvider } from '@app/providers/general-request-error-provider'
import { NProgressProvider } from '@app/providers/n-progress-provider'
import { OnlyDesktopProvider } from '@app/providers/only-desktop-provider'

import './globals.css'

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
      <body className='min-h-dvh flex flex-col text-gray-700'>
        <EffectorNext>
          <GeneralRequestErrorProvider>
            <NProgressProvider>
              <OnlyDesktopProvider>
                {children}
                <Toaster />
              </OnlyDesktopProvider>
            </NProgressProvider>
          </GeneralRequestErrorProvider>
        </EffectorNext>
      </body>
    </html>
  )
}

export default Layout
