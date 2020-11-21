<script>
  import Loader from './components/Loader.svelte'
</script>

<section>
  <Loader />
</section>

<style lang="postcss">
  section {
    @apply absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-400 to-red-500;
  }
</style>
