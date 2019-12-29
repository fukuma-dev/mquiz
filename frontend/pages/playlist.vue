<template>
  <v-container>
    <h2>プレイリスト</h2>
    <div v-for="n in results" :key="n.trackId">
      <p>{{ n.track_name }}</p>
      <audio :src="n.preview_url" controls preload="auto"></audio>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
      submit () {
        console.log(trackid)
      },
    },
    async asyncData ({params}) {
        const { data } = await axios.get(`http://localhost:3000/tracks`)

        return {
          results: data,
        }
    }
}
</script>
