<template>
  <v-container>
    <v-layout>
        <v-text-field v-model="term" v-on:keyup.enter="fetchResults(term)" @change="fetchResults(term)" placeholder="スピッツ" solo></v-text-field>
        <v-btn @click="fetchResults(term)" large>検索</v-btn>
    </v-layout>
    <v-card v-for="n in results" :key="n.artistId" class="my-3 artist-list" :to="`/artists/${n.artistId}`" hover="true">
      <v-card-title>{{ n.artistName }}</v-card-title>
    </v-card>
    <p v-if="count === 0">"{{ term }}"に該当するアーティストが見つかりませんでした</p>
  </v-container>
</template>

<style>
.artist-list {
    list-style: none;
    border-left: solid 10px cadetblue;
    padding: 10px 0 10px 15px;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        term: '',
        results: '',
        count: false,
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
