import { createEvent, createStore, sample } from 'effector'

export const signedIn = createEvent<string>()
export const signedOut = createEvent()

export const $isSignedIn = createStore(false)
export const $isPasswordErrorShown = createStore(false)

sample({
  clock: signedIn,
  filter: Boolean,
  fn: (password) => {
    return password === '0000'
  },
  target: $isSignedIn
})

sample({
  clock: signedIn,
  fn: (password) => !(password === '0000'),
  target: $isPasswordErrorShown
})

sample({
  clock: signedOut,
  fn: () => false,
  target: $isSignedIn
})
