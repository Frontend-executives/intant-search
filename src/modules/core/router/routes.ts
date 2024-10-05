import { ROUTES_PATHS } from './routes-paths'
import { SearchPage } from '@search/components'
import { SignInPage } from '@auth/components'
import { DuplicatePage } from '@duplicate/components'
import { InvalidReplacementPage } from '@invalid-replacement/components'
import { ObsoleteWithoutReplacementPage } from '@obsolete-without-replacement/components'
import { RelevantWithReplacementPage } from '@relevant-with-replacement/components'
import { SelfReplacementPage } from '@self-replacement/components'
import { WithoutBrandPage } from '@without-brand/components'
import { NotFound } from '@core/components'

export const routes = [
  { path: ROUTES_PATHS.search, component: SearchPage, meta: { requiresAuth: false } },
  { path: ROUTES_PATHS.signIn, component: SignInPage, meta: { requiresAuth: false } },
  { path: ROUTES_PATHS.duplicate, component: DuplicatePage, meta: { requiresAuth: true } },
  {
    path: ROUTES_PATHS.invalidReplacement,
    component: InvalidReplacementPage,
    meta: { requiresAuth: true }
  },
  {
    path: ROUTES_PATHS.obsoleteWithoutReplacement,
    component: ObsoleteWithoutReplacementPage,
    meta: { requiresAuth: true }
  },
  {
    path: ROUTES_PATHS.relevantWithReplacement,
    component: RelevantWithReplacementPage,
    meta: { requiresAuth: true }
  },
  {
    path: ROUTES_PATHS.selfReplacement,
    component: SelfReplacementPage,
    meta: { requiresAuth: true }
  },
  {
    path: ROUTES_PATHS.withoutBrand,
    component: WithoutBrandPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { requiresAuth: false }
  }
]
