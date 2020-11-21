<script>
  import { getContext } from 'svelte'

  const { logout } = getContext('auth')
</script>

<nav>
  <button type="button" on:click|preventDefault={logout}>Déconnexion</button>
</nav>

<style lang="postcss">
  nav {
    @apply flex items-baseline justify-end py-4;

    button {
      @apply py-2 px-4 border-2 border-red-500 text-red-500 rounded-xl transition-colors duration-200 ease-out;

      &:hover,
      &:focus {
        @apply bg-red-100 text-red-900;
      }
    }
  }
</style>
