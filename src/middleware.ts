import { NextRequest, NextResponse } from 'next/server'

import { Auth } from '@shared/enums/auth'
import { RouterPaths } from '@shared/router/router-paths'

export function middleware({ cookies, url }: NextRequest) {
  const cookieValue = cookies.get(Auth.KEY)?.value ?? ''
  const isSignedIn = cookieValue === Auth.VALUE

  if (!isSignedIn) {
    return NextResponse.redirect(new URL(RouterPaths.SIGN_IN, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/contract/:path*',
    '/duplicates/:path*',
    '/invalid-replacements/:path*',
    '/obsoletes-without-replacement/:path*',
    '/relevants-with-replacement/:path*',
    '/self-replacement/:path*'
  ]
}
