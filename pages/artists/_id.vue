<template>
  <div>
    <h2>{{ results[0].artistName }}</h2>
    <p>{{ count }}件</p>
    <li v-for="n in count-1" :key="n"><nuxt-link :to="{name: 'songs-id', params: { id: results[n].trackId, previewUrl: results[n].previewUrl }}">{{ results[n].trackName }}</nuxt-link></li>
    <p>{{ results }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ({params}) {
        const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&entity=song&sort=recent`)

        return {
          results: data.results,
          count: data.resultCount
        }
    }
}
</script>
