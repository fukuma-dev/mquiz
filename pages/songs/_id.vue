<template>
  <div>
    <h2>{{ results[0].trackName }} / {{ results[0].artistName }}</h2>
    <audio :src="results[0].previewUrl" controls></audio>
    <v-btn>この曲をプレイリストに追加</v-btn>
    <p>{{ results }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ({params}) {
        const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}`)

        return {
          results: data.results,
        }
    }
}
</script>
