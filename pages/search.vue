<template>
  <v-container>
    <v-layout>
        <v-text-field v-model="term" placeholder="スピッツ" solo></v-text-field>
        <v-btn v-on:click="fetchResults(term)">検索</v-btn>
    </v-layout>
    <ul>
      <li v-for="n in results" :key="n.artistId" class="my-2 artist-list"><nuxt-link :to="`/artists/${n.artistId}`" class="artist-name">{{ n.artistName }}</nuxt-link></li>
    </ul>
  </v-container>
</template>

<style>
.artist-list {
  list-style: none;
  border-left: solid 10px cadetblue;
  /* background-color: cadetblue; */
  padding: 5px 0 5px 15px;

}
.artist-name {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
}
.artist-name:hover {
    opacity: 0.3;
}
</style>

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
