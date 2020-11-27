<script>
  import { getContext } from 'svelte'

  const { logout } = getContext('auth')
</script>

<nav>
  <button type="button" on:click|preventDefault={logout}>Déconnexion</button>
</nav>

<style lang="postcss">
  nav {
    @apply absolute inset-x-0 flex items-baseline justify-end py-4 z-50;

    button {
      @apply py-2 px-4 bg-red-100 text-red-600 rounded-xl transition-colors duration-200 ease-out shadow-lg;

      &:hover,
      &:focus {
        @apply bg-red-50;
      }
    }
  }
</style>
