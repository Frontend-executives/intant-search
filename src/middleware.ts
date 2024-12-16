import { NextRequest, NextResponse } from 'next/server'

import { AUTH } from '@app/settings/auth'
import { ROUTER_PATHS } from '@app/settings/router-paths'

export function middleware({ cookies, url }: NextRequest) {
  const cookieValue = cookies.get(AUTH.cookieKey)?.value ?? ''
  const isSignedIn = cookieValue === AUTH.cookiePassValue

  if (!isSignedIn) {
    return NextResponse.redirect(new URL(ROUTER_PATHS.signIn, url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/contract/:path*',
    '/duplicates/:path*',
    '/invalid-replacements/:path*',
    '/obsoletes-without-replacement/:path*'
  ]
}
