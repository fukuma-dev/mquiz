<template>
  <div>
    <input v-model="term" placeholder="アーティスト名で検索">
    <button v-on:click="fetchResults(term)">Search</button>
    <ul>
      <li v-for="n in count" :key="n"><nuxt-link :to="`/artists/${results[n-1].artistId}`">{{ results[n-1].artistName }}</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import Play from '~/components/Play.vue'
import axios from 'axios'

export default {
    data() {
      return {
        term: '',
        results: '',
        count: ''
      }
    },
    methods: {
      fetchResults(term) {
        axios.get(`http://itunes.apple.com/search?term=${term}&media=music&entity=musicArtist&attribute=artistTerm&country=JP&lang=ja_jp`)
          .then(response => {
            this.results = response.data.results
            this.count = response.data.resultCount
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
}
</script>
