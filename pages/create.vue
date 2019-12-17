<template>
  <div>
    <button v-on:click="fetchResults('aiko')">Search</button>
    <Result :meta="meta" :count="count"/>
  </div>
</template>

<script>
import Result from '~/components/Result.vue'
import axios from 'axios'

export default {
    data() {
      return {
        meta: [],
        count: 0
      }
    },
    methods: {
      fetchResults(term) {
        axios.get('http://itunes.apple.com/search?term=ohara yuiko&country=JP&lang=ja_jp&media=music&entity=song&attribute=artistTerm&limit=30')
          .then(response => {
            this.meta = response.data.results
            this.count = response.data.resultCount
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    },
    components: {
      Result
    },
}
</script>
