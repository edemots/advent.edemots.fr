<script>
  import { storage } from '../lib/firebase'

  export let data
  export let day

  let src
  const storageRef = storage.ref()
  const color = `bg-${data.color}-800`
  const imageNumber = (+day < 9 ? '0' : '') + (+day + 1)

  storageRef
    .child(`day${imageNumber}.jpg`)
    .getDownloadURL()
    .then(url => {
      src = url
    })
</script>

<article>
  <main>
    <div class={color}>
      <h1>{data.title}</h1>
      <blockquote><q>{data.description}</q></blockquote>
    </div>
    <img {src} alt={data.title} />
  </main>
  <aside><span /></aside>
</article>

<style lang="postcss">
  article {
    @apply grid grid-cols-5 grid-rows-1 h-full;

    main {
      @apply relative grid grid-cols-9 grid-rows-5 col-start-1 col-span-3 items-center z-20;

      div {
        @apply relative col-start-5 col-span-5 row-start-2 row-span-3 bg-opacity-95 rounded-3xl shadow-lg p-4 z-30;
        @screen lg {
          @apply py-4;
        }
        @screen xl {
          @apply py-8;
        }

        h1 {
          @apply font-display font-semibold text-3xl text-warmGray-100 mb-4;
        }

        q {
          @apply font-serif text-2xl text-warmGray-200;
        }
      }

      img {
        @apply col-start-1 col-span-5 row-span-full rounded-3xl shadow-xl;
      }
    }

    aside {
      @apply col-start-3 col-span-3;

      span {
        @apply absolute inset-y-0 w-full bg-no-repeat bg-left-bottom bg-cover z-0;
        background-image: url('/images/Thur.svg');
      }
    }
  }
</style>
