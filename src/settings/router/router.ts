import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { ROUTES_PATHS } from './routes-paths'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const shouldProtectRoute = to.meta.requiresAuth
  const isSignedIn = true
  const isSignInPage = to.path === ROUTES_PATHS.signIn

  if (isSignedIn && isSignInPage) {
    return next({ path: ROUTES_PATHS.search })
  }

  if (!isSignedIn && shouldProtectRoute) {
    return next({ path: ROUTES_PATHS.signIn })
  }

  next()
})
