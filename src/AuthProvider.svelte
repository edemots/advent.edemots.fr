<script>
  import { setContext } from 'svelte'
  import { auth, googleAuthProvider } from './lib/firebase'

  const loginWithGoogle = () => auth.signInWithPopup(googleAuthProvider)
  const logout = () => auth.signOut()

  setContext('auth', { loginWithGoogle, logout })
</script>

<slot />
