<script>
  import { getContext, onMount } from 'svelte'

  const { loginWithGoogle } = getContext('auth')

  let images = []

  const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.setAttribute('src', img.dataset.src)

          observer.disconnect()
        }
      })
    })

    io.observe(target)
  }

  onMount(() => {
    images.forEach(lazyLoad)
  })
</script>

<section>
  <article>
    <div class="background">
      <div class="gray" />
      <div class="red-gradient" />
    </div>
    <div class="form">
      <div class="cardContainer">
        <div class="w-full flex-none">
          <div class="xl:-mr-8">
            <div class="card">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA/CAYAAABw8ZE3AAAIV0lEQVRogcVawWsTTRTf/A+eepCce5DcFEHdg3qQHlYhHqqHVWzBirIHW0WlrGJajFCXkrSaQ1wRcgzbCgUVYRUNgoiRYqxW2rTYiBbpqef3Hcob38y+2d3Ej+87PJKdnZ39vfd+85s3kxiVSgV834cwDMH3fcmCIJDucX1ov17NdV3Jku6jGUkA1PY4oN06gUA54Pjd8zzx6XkeuK4r2gzu5UEQsECCINBGn74IbXp6GiYmJtg+CISLNHdfvZYin9bQKRWoLqpcOwWChuOp1zpnY8HHRTgtVWZnZyPRRBC2bbNcT8v9crm8A14XxW7a1UhxWaDAOfDUHMeJjEXHuXv3Lhi0QxiG0gNxHMcoqnTA66mpKYkKauSSTAWL147j/FEbdQYnmZrOuOdUTncDngaHApakslKpsOBpxCmv6aC6iPn+jtLogCMYSp80VFLHMbiZnpb3SdGbnJyMvW/bNjiOA47jCPDUAXrNRT+iNpwD1Gt6rb6c9qtWq3D+/PnYiFLAqpmmCaZpgmVZkefxWqs26KmO81xkuKipEaPtceAtywLTNLXjOI4TjbyqILqoqQ6oadeBSgKd9By+/8KFC2CUSqXYCKsTc2NjA4rFYkSz04KnWerVCWnCciB1ctdut7W2trYGxWIx1ikd3dIYpVFEbXQLCkb5xYsXseDjrNFowMjIiHay4sRMk0mMvpEkd9R6Ba4aAIjvnU4HBgcHe+K+oZuQnK7+W+DT2OjoKBttKfKXL1+O0EO3AP2X4NvtduwaEQEflwHbtqWBXdeFoaEhkcb/BXxSBwTvOI408JUrV6DRaEAYhsJarRY0m00WSKlUgnK5nBp4vV6PXWci4Dme4733799Lg4dhCI7jQBiGMDs7C7VaTayKKsW2t7cFVx3HgSAIEsGrkpoIPq6jOjhGW608cf/7+PFjCUgYhqIPtuuyhM9wgZQWKd1CEgc+n88LQJ7ngWVZ8PXrV6jVahCGITSbTWkehGEICwsLkU0PLjyWZSVGnlvMWPCcE3RgrPhs2wbf9wVVarWaAMdlaW5uTtRPXMB04LmFSksbmh7kKQcezfd9OHPmjFQbvX79WgKiFn40APipKo2udNDSBh+gEqmLvGmacOfOHTh+/DhYliWB//37t+iPYGu1GlSrVbh37540BpYGSTKpjbzOO07H1ajTiTs+Ph5xtlwui/tq1tC+f/+eWuMTwVMK/fjxQwseee+6rtSOfZ8+fSqc9H1fZPXw4cNsfwo+SS5jwXN819nW1hYMDAxEwBw8eBBM04Rjx45Bs9mEMAwl6fQ8LyKZnU4nlQLGgkcH/naZf/LkCZimKVQHwaOsclFPYgMrlZz9Lfg4w2wkgUcBoRsSLXjU4m6rSRVIL2ZZFrs5URWna9pMT0/H0okDH0cRzmh0cR2wLKv7CatbPHCwbrKRNivq+7mJOzo6+gc8pklNFy2kaFRmZmaExjcaDVhdXWWBLC4uQqPRgLGxsa4jH7fPcF0XjIGBASk9avSfPXsmBn358qXQbCzCsAzm9PrLly9gmiZks1nI5XKQy+VSlcO6aKsHA8bg4CDLMU5p6vW6yAatVarVKuvAnj174MCBA5EDXNT4NOB1GSgUCmBwBRL9TgcNggD27t0rFVpxq+uNGzfg1q1b8OjRI8jn8zA8PCw5Yds23Lx5MwJera+0R9wUqFooceBpfVKv10VBls1moa+vD7LZrOi/a9cuOHXqlHT+WavVRPby+TxcvXpVese5c+dS7aIiasNpqzqR1JIWgQ0NDUEul4ONjQ3RP5PJQH9/v1T/YBRrtRrkcrmIIKh67rr60wyDi3YceOQsbkAo92nUETwaTljXdSGbzUIQBJDNZuH+/fvSM1z1qI28ynN0hFMPBIybb4y86+4cg1AdX1lZkcCj9fX1CYfHxsYifE+SRwn8/v37YWJiQjTQHxHUlFLrdDrCwTdv3kCz2ZR0PJfLseCpWnGLXNwJRgQ895MNOjE5OSkG/fz5c6oFhqMMBY7UiZNJuhGKjTz+oIbRxtMA6ky1WoXV1VUYHx+HI0eOdOVEu90GwzAgk8nA7t27IZPJxNY5OpVhf5PiPFIzodYkhw4dEpTZt28fmKYJHz9+jBxMoT148ABarZY0Dk582q9arUaAx0mm0HlMJ/f7VFxN8u7dO9jc3ISZmZnIvZWVFTh9+jRcu3ZNrM5xGVI5TkFzDgippLRRM9AtTajRgu327dvQbrfhw4cPseDTUMZ1XTD6+/u1D2HUO53OXzmQ1ui76Z8s1PYgCP5wXv2tFdvCMIT5+Xn49OmT9JLl5eVUYNbX12FpaUmsupVKJTV4NYiqA0IqufQEQQCFQgHW1tZ6jmSpVIKfP3+KiVmpVOD69eva2p/jNhd9xGxQbUezLAvCMJTqlF7t1atXsL29DZcuXYK5ubnYvuqfOLg/CEUWKdrJtm04e/ZsZODl5WUoFAqpQdfrdVhfX4d2uw2tVgt834+dO9++fdNSRluYUY+opk5NTcWCe/v2LTx8+BC2trbY+79+/RLg2+0d2Zyfn0+MejcmFinUelpdqtzb3NzsmT7Pnz+HpaUl7X268VDLZ+oY/W4gcLWux8pS1Vi8Z1kWjIyM/PWcSFIabqJ6nrezDRweHo6AR6+xnTtZoNtHar2uCWmpQgXGoPW7SheuzldPC5IOrRYXF/9V8JLOnzx5MnJWztUR3Jm67liO2sWLF6Vr3alBN8A9z4OFhQUwjh49ygKju3eaGdqHUos7gaD/dKJZpd+LxWLXkfd9f4fzauRVgLSNUob+bZHew2ycOHEikVJUUdIApkpTLpfBwLSrdOAcwWt6eISbcVWlsK9KGzqf1Cx0a/8AhK++7wlEAIcAAAAASUVORK5CYII="
                data-src="/images/us.jpg"
                bind:this={images[0]}
                alt="" />
              <div>
                <div>
                  <p>Connecte-toi pour voir ton petit calendrier !</p>
                  <button
                    type="button"
                    on:click|preventDefault={loginWithGoogle}>Connexion avec
                    Google</button>
                </div>
                <footer>
                  <p class="text-red-600">Par moi</p>
                  <p class="text-gray-500">Ton petit copain pref :)</p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <figure>
      <div class="mx-auto lg:max-w-2xl xl:max-w-none">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAABR0lEQVQokY2Rr4oCcRSFjRZhmk1v8k+wigyGH9hE0Wr2HcRo8gHENzBOMAhiEQQR1DSiwg9FuTDBpo/wbZCdcXY3bDjl8t3LueckRIT/KPFzkMvluN1u+L7/G0yn0/i+j6qiqrxeL1SV+/0egdbaEFBVxuMxy+WS0WjEdruNQFXleDyiqtTr9XDh+XwSBAGXyyUC9/s9rVYLay29Xo/NZoO1lsfjwWw2e4P9fp/D4RBeOp/P7HY7VJXr9Yq1Fs/z3s98elRVTqcTQRAgImQyGYrF4htcr9cx0BiDiOA4DiJCuVyOcpxOp1SrVUqlEiJCt9slmUxSq9XigQ+HQ0QE13UxxpDP52m326RSKRaLRbyZyWSC4zg0Gg2MMRQKBTqdTuTxU6vVChHB8zwqlQqqymAwIPFt+FPz+TyMLGzmL7DZbJLNZmOzL5I1U5EW5ImaAAAAAElFTkSuQmCC"
          data-src="/images/advent.jpg"
          bind:this={images[1]}
          alt="Advent Calendar with chococaltes inside" />
      </div>
    </figure>
  </article>
</section>

<style lang="postcss">
  section {
    @apply h-screen flex items-center;

    article {
      @apply w-full grid grid-cols-login grid-rows-login;

      @screen sm {
        @apply grid-cols-login-sm;
      }
      @screen xl {
        @apply grid-cols-login-xl grid-rows-login-xl;
      }

      .background {
        @apply col-start-1 col-end-2 row-start-1 row-span-full flex -ml-8 pr-4;
        @screen sm {
          @apply col-start-2 col-end-3 ml-0 pr-0;
        }
        @screen lg {
          @apply col-start-1 col-span-full py-10;
        }
        @screen xl {
          @apply col-start-1 col-end-5 row-start-2 row-end-5 py-16;
        }

        .gray {
          @apply bg-gray-100 w-full flex-none rounded-3xl;
        }

        .red-gradient {
          @apply w-full flex-none -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-red-400 to-red-500 -rotate-1;
          @screen sm {
            @apply -rotate-2;
          }
        }
      }

      .form {
        @apply relative col-start-1 col-end-2 row-start-2 row-end-3 self-center pr-8 pb-6 -mt-6;
        @screen sm {
          @apply col-start-2 col-end-3 px-6 -mt-10;
        }
        @screen md {
          @apply px-8 pb-8 -mt-16;
        }
        @screen lg {
          @apply col-start-1 col-span-full px-0 pb-0 -mt-32;
        }
        @screen xl {
          @apply col-start-2 col-end-3 row-start-3 row-end-4 mt-0;
        }

        .cardContainer {
          @apply max-w-xl flex items-center justify-center h-112;
          @screen lg {
            margin-left: calc(50% - 187px);
          }
          @screen xl {
            @apply max-w-none;
          }

          .card {
            @apply relative z-10 overflow-hidden bg-white rounded-r-xl shadow-xl pt-8;
            @screen sm {
              @apply rounded-xl;
            }
            @screen md {
              @apply flex items-center p-0;
            }

            img {
              @apply w-32 h-32 rounded-full mx-auto flex-none object-cover;
              @screen md {
                @apply w-48 h-auto rounded-none;
              }
            }

            div {
              @apply text-center space-y-8 md:space-y-0;
              @screen md {
                @apply text-left;
              }

              div {
                @apply pt-6 space-y-4;
                @screen md {
                  @apply p-8;
                }

                p {
                  @apply text-gray-900 text-lg font-semibold font-display;
                }

                button {
                  @apply py-3 px-6 bg-red-500 text-white rounded-xl transition-colors duration-200 ease-out;

                  &:hover,
                  &:focus {
                    @apply bg-red-400;
                  }
                }
              }
            }

            footer {
              @apply bg-gray-100 px-8 py-3;
            }
          }
        }
      }

      figure {
        @apply relative col-start-1 col-span-full row-start-1 row-end-2 self-center pt-8;
        @screen md {
          @apply px-8;
        }
        @screen lg {
          @apply px-0 col-start-1 pt-0;
        }
        @screen xl {
          @apply col-start-3 col-end-4 row-start-2 row-end-5;
        }

        img {
          @apply relative w-full h-128 shadow-2xl object-cover;
          @screen md {
            @apply rounded-xl;
          }
        }
      }
    }
  }
</style>
