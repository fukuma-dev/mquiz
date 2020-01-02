<template>
  <v-container>
    <nuxt-link to="/playlist">topへ戻る</nuxt-link>
    <h2>プレイリスト名</h2>
    <h3>第{{ n + 1 }}問</h3>
    <div>
      <audio :src="results[n].preview_url" autoplay></audio>
      <div v-if="!answer">
        <ul>
          <li>選択肢1</li>
          <li>選択肢2</li>
          <li>選択肢3</li>
          <li>選択肢4</li>
        </ul>
        <v-btn @click="switchPage">答えを見る</v-btn>
      </div>
    </div>
    <div v-if="answer">
     <h4>答え</h4>
      <p>{{ results[n].track_name }} / {{ results[n].artist_name }}</p>
      <v-btn @click="next">次</v-btn>
    </div>
    <!-- <div v-for="n in results" :key="n.trackId"> -->
      <!-- <p>{{ n.track_name }}</p> -->
      <!-- <audio :src="n.preview_url" controls preload="auto"></audio> -->
    <!-- </div> -->
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        n: 0,
        answer: false
      }
    },
    methods: {
      switchPage () {
        this.answer = true
      },
      next () {
        this.n = this.n + 1
        this.answer = false
      }
    },
    async asyncData ({params}) {
        const { data } = await axios.get(`http://localhost:3000/tracks`)
        return {
          results: data,
        }
    }
}
</script>

<style scoped>

</style>
