import { ROUTES_PATHS } from './routes-paths'
import {
  DuplicatePage,
  InvalidReplacementPage,
  NotFoundPage,
  ObsoleteWithoutReplacementPage,
  RelevantWithReplacementPage,
  SearchPage,
  SelfReplacementPage,
  SignInPage,
  WithoutBrandPage
} from '@/pages'

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
    component: NotFoundPage,
    meta: { requiresAuth: false }
  }
]
