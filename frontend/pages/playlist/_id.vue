<template>
  <v-container>
    <nuxt-link to="/playlist">topへ戻る</nuxt-link>
    <div
      v-if="!isStart"
      key="before-start"
    >
      <v-btn
        block
        text
        outlined
        height="100px"
        class="start-btn"
        @click="quizStart(results[n])"
      >
        開始しますか？
      </v-btn>
    </div>
    <div
      v-if="isStart"
      key="after-start"
    >
      <h2>プレイリスト名</h2>
      <h3>第{{ n + 1 }}問</h3>
      <div>
        <audio
          :src="results[n].preview_url"
          controls
          autoplay
          loop
        ></audio>
        <p>{{ results[n].track_name }}</p>
        <p v-for="n in answers" :key="n">{{ n }}</p>
        <div
          v-if="!answer"
          key="quiz-display"
        >
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
          <v-btn
            block
            large
            text
            outlined
            height="50px"
            @click="switchPage"
          >
            答えを見る
          </v-btn>
        </div>
      </div>
      <div
        v-if="answer"
        key="answer-display"
      >
       <h4>答え</h4>
        <div class="text-center my-4">
          <p class="display-4">
            {{ results[n].track_name }}
            <span class="display-3"> / {{ results[n].artist_name }}</span>
          </p>
          <v-btn
            v-if="trackExists(results, n)"
            key="next-quiz"
            block
            large
            text
            outlined
            height="50px"
            @click="next"
          >
            次の問題へ
          </v-btn>
          <v-btn
            v-else
            key="end-quiz"
            to="/"
            block
            large
            text
            outlined
            height="50px"
          >
            終了
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    CustomAudio: () => import('~/components/Audio.vue')
  },
  data() {
    return {
      n: 0,
      answer: false,
      isStart: false,
      answers: []
    }
  },
  methods: {
    quizStart (results) {
      this.isStart = true
      axios.get(`http://itunes.apple.com/lookup?id=${results.artist_id}&country=JP&lang=ja_jp&entity=song`)
      .then(response => {
        if (response.data.resultCount >= 4)
        const apiResults = response.data.results
        apiResults.shift()
        apiResults.forEach( function(result, index) {
          if (results.track_id == `${result.trackId}`) {
            apiResults.splice(index, 1)
          }
        })
        apiResults[Math.floor(Math.random() * apiResults.length)]
        apiResults.unshift(results)
        this.answers = apiResults
      })

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
    const { data } = await axios.get(`http://localhost:3000/tracks/${params.id}`)
    return {
      results: data,
    }
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
