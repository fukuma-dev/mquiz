<template>
  <div>
    <v-flex xs12 sm6 offset-sm3 lg4 offset-lg4>
      <h2>まいプレイリスト</h2>
      <div v-for="n in results" :key="n.trackId">
        <p>{{ n.track_name }}</p>
        <audio :src="n.preview_url" controls></audio>
      </div>
    </v-flex>
  </div>
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
