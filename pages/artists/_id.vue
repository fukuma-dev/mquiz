<template>
  <div>
    <h2>{{ results[0].artistName }}</h2>
    <p>{{ count-1 }}件</p>
    <ul>
      <li v-for="n in count-1" :key="n" class="my-2 song-list"><nuxt-link :to="{name: 'songs-id', params: { id: results[n-1].trackId, previewUrl: results[n-1].previewUrl }}" class="song-name">{{ results[n-1].trackName }}</nuxt-link></li>
    </ul>
  </div>
</template>

<style>
.song-list {
  list-style: none;
  border-left: solid 10px cadetblue;
  /* background-color: cadetblue; */
  padding: 5px 0 5px 15px;

}
.song-name {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
}
.song-name:hover {
    opacity: 0.3;
}
</style>

<script>
import axios from 'axios'
import Search from '~/components/Search.vue'

export default {
    async asyncData ({params}) {
        const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp&entity=song`)

        return {
          results: data.results,
          count: data.resultCount
        }
    },
    components: {
      Search
    }
}
</script>
