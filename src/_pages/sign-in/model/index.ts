import { createEffect, createEvent, createStore, sample } from 'effector'
import Cookies from 'js-cookie'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { $password, appStarted } from '@app/model'
import { AUTH } from '@app/settings/auth'
import { ROUTER_PATHS } from '@app/settings/router-paths'

import { $router } from '@pages/search/model'

export const passwordEntered = createEvent<string>()
export const signedIn = createEvent()
export const signedOut = createEvent()

const redirectFx = createEffect((router: AppRouterInstance) => {
  router.push(ROUTER_PATHS.search)
})

const signedInFx = createEffect(() => {
  Cookies.set(AUTH.cookieKey, AUTH.cookiePassValue)
})
const signedOutFx = createEffect(() => {
  Cookies.remove(AUTH.cookieKey)
})

export const $isSignedIn = createStore<boolean>(false)

sample({
  clock: appStarted,
  filter: () => Cookies.get(AUTH.cookieKey) === AUTH.cookiePassValue,
  fn: () => true,
  target: $isSignedIn
})

sample({
  clock: passwordEntered,
  source: $password,
  filter: (password, query) => password === query,
  fn: (password, query) => password === query,
  target: signedIn
})

sample({
  clock: signedIn,
  fn: () => true,
  target: [$isSignedIn, signedInFx]
})

sample({
  clock: [signedIn, signedOut],
  source: $router,
  filter: Boolean,
  target: redirectFx
})

sample({
  clock: signedOut,
  fn: () => false,
  target: [$isSignedIn, signedOutFx]
})
