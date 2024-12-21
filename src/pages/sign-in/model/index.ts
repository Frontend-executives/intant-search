import { createEffect, createEvent, createStore, sample } from 'effector'
import Cookies from 'js-cookie'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { Auth } from '@shared/enums/auth'
import { RouterPaths } from '@shared/enums/router-paths'
import { $isSignedIn, $password, $router } from '@shared/model'

export const passwordEntered = createEvent<string>()
export const signedIn = createEvent()
export const signedOut = createEvent()

const redirectFx = createEffect((router: AppRouterInstance) => {
  router.push(RouterPaths.SEARCH)
})

const signedInFx = createEffect(() => {
  Cookies.set(Auth.KEY, Auth.VALUE)
})
const signedOutFx = createEffect(() => {
  Cookies.remove(Auth.KEY)
})

export const $isWrongPassword = createStore<boolean>(false)

sample({
  clock: passwordEntered,
  source: $password,
  filter: (password, query) => password === query,
  fn: (password, query) => password === query,
  target: signedIn
})

sample({
  clock: passwordEntered,
  source: $password,
  fn: (password, query) => {
    if (!password) return false

    return query.length === password.length && query !== password
  },
  target: $isWrongPassword
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
