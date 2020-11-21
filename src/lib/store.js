import { auth } from './firebase'
import { derived, readable } from 'svelte/store'

export const user = readable(undefined, set => {
  const unsubscribe = auth.onAuthStateChanged(async firebaseUser => {
    if (firebaseUser) {
      const {
        claims: { name, email, picture },
      } = await firebaseUser.getIdTokenResult()
      set({ name, email, picture })
    } else {
      set(null)
    }
  })
  return unsubscribe
})
export const authenticating = derived(user, $user => $user === undefined)
export const authenticated = derived(user, $user => $user !== null)
