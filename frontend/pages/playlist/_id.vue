<template>
  <v-container>
    <nuxt-link to="/playlist">topへ戻る</nuxt-link>
    <div v-if="!isStart">
      <v-btn @click="quizStart" block flat height="100px" class="start-btn">開始しますか？</v-btn>
    </div>
    <div v-if="isStart">
      <h2>プレイリスト名</h2>
      <h3>第{{ n + 1 }}問</h3>
      <div>
        <audio :src="results[n].preview_url" controls autoplay loop></audio>
        <div v-if="!answer">
          <v-row class="row my-3">
            <v-col cols="6">
              <p class="display-1">A</p><p class="display-3">その1の答えだよ</p>
            </v-col>
            <v-col cols="6">
              <p class="display-1">B</p><p class="display-3">その1の答えだよ</p>
            </v-col>
          </v-row>
          <v-row class="row my-3">
            <v-col cols="6">
              <p class="display-1">C</p><p class="display-3">その1の答えだよ</p>
            </v-col>
            <v-col cols="6">
              <p class="display-1">D</p><p class="display-3">その1の答えだよ</p>
            </v-col>
          </v-row>
          <v-btn @click="switchPage" block large flat height="50px">答えを見る</v-btn>
        </div>
      </div>
      <div v-if="answer">
       <h4>答え</h4>
        <div class="text-center my-4">
          <p class="display-4">{{ results[n].track_name }}<span class="display-3">/ {{ results[n].artist_name }}</span></p>
          <v-btn v-if="trackExists(results, n)" @click="next" block large flat height="50px">次の問題へ</v-btn>
          <v-btn v-else to="/" block large flat height="50px">終了</v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        n: 0,
        answer: false,
        isStart: false
      }
    },
    methods: {
      quizStart () {
        this.isStart = true
      },
      switchPage () {
        this.answer = true
      },
      next () {
        this.n = this.n + 1
        this.answer = false
      },
      trackExists(results, n) {
        return results[n+1] !== undefined
      }
    },
    async asyncData ({params}) {
        const { data } = await axios.get(`http://localhost:3000/tracks`)
        return {
          results: data,
        }
    },
    components: {
      CustomAudio: () => import("~/components/Audio.vue")
    }
}
</script>

<style scoped>
.row {
  height: 200px;
}
.start-btn {
  margin: 200px 50px;
}
</style>
