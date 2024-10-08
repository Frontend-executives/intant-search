import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { ROUTES_PATHS } from './routes-paths'
import { $isSignedIn } from '@/modules/user/model/auth'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  const shouldProtectRoute = to.meta.requiresAuth
  const isSignedIn = $isSignedIn.getState()
  const isSignInPage = to.path === ROUTES_PATHS.signIn

  if (isSignedIn && isSignInPage) {
    return next({ path: ROUTES_PATHS.search })
  }

  if (!isSignedIn && shouldProtectRoute) {
    return next({ path: ROUTES_PATHS.signIn })
  }

  next()
})

$isSignedIn.watch(async (isSignedIn) => {
  const currentRoute = router.currentRoute.value
  const shouldProtectRoute = currentRoute.meta.requiresAuth

  if (!isSignedIn && shouldProtectRoute) {
    await router.push({ path: ROUTES_PATHS.signIn })
  }
})
