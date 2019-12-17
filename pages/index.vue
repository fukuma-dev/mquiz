<template>
  <div>
    <Play :src="src" :results="results" :random="random"/>
  </div>
</template>

<script>
import Play from '~/components/Play.vue'
import axios from 'axios'

export default {
    async asyncData ({}) {
        const random = Math.floor( Math.random() * 10 ) + 1
        const { data } = await axios.get(`http://itunes.apple.com/search?term=ohara yuiko&country=JP&lang=ja_jp&media=music&entity=song&attribute=artistTerm&limit=30`)
          return {
            results: data.results,
            src: data.results[random].previewUrl,
            random: random
          }
    },
    components: {
      Play
    },
}
</script>
