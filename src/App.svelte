<script>
  import Tailwind from './Tailwind.svelte'
  import AuthProvider from './AuthProvider.svelte'
  import Login from './Login.svelte'
  import Calendar from './Calendar.svelte'
  import Loading from './Loading.svelte'
  import { authenticating, authenticated } from './lib/store'
</script>

<Tailwind />

<main>
  <AuthProvider>
    {#if $authenticating}
      <Loading />
    {:else if $authenticated}
      <Calendar />
    {:else}
      <Login />
    {/if}
  </AuthProvider>
</main>

<style lang="postcss">
  :global(html) {
    @apply bg-white text-gray-500 antialiased;
  }
  main {
    @apply max-w-screen-lg mx-auto;
    @screen xl {
      @apply max-w-screen-xl;
    }
  }
</style>
