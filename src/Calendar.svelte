<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Loading from './Loading.svelte'
  import Nav from './components/Nav.svelte'
  import { database } from './lib/firebase'
  import CalendarCard from './components/CalendarCard.svelte'

  let day = String(new Date().getDate() - 1)
  if (day > 23) day = 23
  const dataRef = database.ref('data/' + day)

  let data

  onMount(() => {
    dataRef.on('value', snapshot => {
      data = snapshot.val()
    })
  })
</script>

{#if data}
  <section transition:fade={{ duration: 200 }}>
    <Nav />
    <CalendarCard {data} {day} />
  </section>
{:else}
  <Loading />
{/if}

<style lang="postcss">
  :global(body) {
    @apply bg-gradient-to-tl from-warmGray-100 to-warmGray-200;
  }

  section {
    @apply relative h-screen;
  }
</style>
