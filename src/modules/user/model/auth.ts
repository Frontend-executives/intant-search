import { createEffect, createEvent, createStore, sample } from 'effector'
import { AUTH } from '@/modules/user/constants/auth'
import Cookies from 'js-cookie'
import { appStarted } from '@core/model/core'

export const authFormSubmitted = createEvent<string>()
export const signedIn = createEvent<boolean>()
export const signedOut = createEvent()

const setCookieAuthFx = createEffect(() => {
  Cookies.set(AUTH.cookieName, AUTH.cookieValue, { expires: 365 })
})
const removeCookieAuthFx = createEffect(() => {
  Cookies.remove(AUTH.cookieName)
})

export const $isSignedIn = createStore(false)
export const $isPasswordValid = createStore(false)

sample({
  clock: appStarted,
  fn: () => Cookies.get(AUTH.cookieName) === AUTH.cookieValue,
  target: $isSignedIn
})

sample({
  clock: authFormSubmitted,
  fn: (query) => query === '0000',
  target: signedIn
})

sample({
  clock: signedIn,
  filter: Boolean,
  target: [$isSignedIn, setCookieAuthFx]
})

sample({
  clock: signedIn,
  target: $isPasswordValid
})

sample({
  clock: signedOut,
  target: [removeCookieAuthFx, $isSignedIn.reinit]
})
