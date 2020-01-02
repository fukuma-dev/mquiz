<template>
  <v-container>
    <h2>プレイリスト</h2>
    <div>
      <li><nuxt-link to="/playlist/1">プレイリストその1</nuxt-link></li>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData ({params}) {
        const { data } = await axios.get(`http://localhost:3000/tracks`)
        return {
          results: data,
        }
    }
}
</script>
