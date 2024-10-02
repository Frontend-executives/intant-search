import { ROUTES_PATHS } from './routes-paths'
import { SearchPage } from '@search/components'
import { SignInPage } from '@auth/components'
import { DuplicatePage } from '@duplicate/components'
import { InvalidReplacementPage } from '@invalid-replacement/components'
import { ObsoleteWithoutReplacementPage } from '@obsolete-without-replacement/components'
import { RelevantWithReplacementPage } from '@relevant-with-replacement/components'
import { SelfReplacementPage } from '@self-replacement/components'
import { WithoutBrandPage } from '@without-brand/components'

export const routes = [
  { path: ROUTES_PATHS.public.search, component: SearchPage },
  { path: ROUTES_PATHS.public.signIn, component: SignInPage },
  { path: ROUTES_PATHS.private.duplicate, component: DuplicatePage },
  { path: ROUTES_PATHS.private.invalidReplacement, component: InvalidReplacementPage },
  {
    path: ROUTES_PATHS.private.obsoleteWithoutReplacement,
    component: ObsoleteWithoutReplacementPage
  },
  {
    path: ROUTES_PATHS.private.relevantWithReplacement,
    component: RelevantWithReplacementPage
  },
  {
    path: ROUTES_PATHS.private.selfReplacement,
    component: SelfReplacementPage
  },
  {
    path: ROUTES_PATHS.private.withoutBrand,
    component: WithoutBrandPage
  }
]
