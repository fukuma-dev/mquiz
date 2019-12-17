<template>
  <v-container>
    <v-layout>
        <v-text-field v-model="term" placeholder="スピッツ" solo></v-text-field>
        <v-btn v-on:click="fetchResults(term)">検索</v-btn>
    </v-layout>
    <ul>
      <li v-for="n in count" :key="n"><nuxt-link :to="`/artists/${results[n-1].artistId}`"><span class="title">{{ results[n-1].artistName }}</span></nuxt-link></li>
    </ul>
  </v-container>
</template>

<script>
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
