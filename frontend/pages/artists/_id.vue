<template>
    <v-container>
      <h2>{{ results[1].artistName }}</h2>
      <p>{{ count-1 }}件</p>
      <p>{{ res }}</p>
      <div v-for="n in results" :key="n.trackId">
        <v-card v-if="n.trackName" class="pa-2 my-2" outlined tile>
          <v-avatar>
            <img :src="n.artworkUrl100">
          </v-avatar>
          <span class="ml-2">{{ n.trackName }}</span>
          <audio :src="n.previewUrl" :ref="'audio'+n.trackId"></audio>
          <v-btn @click="start('audio' + n.trackId)">start</v-btn>
          <v-btn @click="end('audio' + n.trackId)">end</v-btn>
          <v-btn flat @click="submit(n.trackId, n.trackName, n.previewUrl)">この曲をプレイリストに追加</v-btn>
        </v-card>
      </div>
    </v-container>
</template>

<script>
import axios from 'axios'
import Search from '~/components/Search.vue'

export default {
    data() {
      return {
        res: '',
      }
    },
    methods: {
      start(ref) {
        this.$refs[ref][0].play()
      },
      end(ref) {
          console.log(this.$refs[ref][0])
          this.$refs[ref][0].pause()
          this.$refs[ref][0].currentTime = 0;
      },
      submit(trackId, trackName, previewUrl) {
          axios.post('http://localhost:3000/tracks', {
            trackId: trackId,
            trackName: trackName,
            previewUrl: previewUrl,
          })
          .then(response => {
            this.res = response.data
          })
      },
    },
    async asyncData ({params}) {
        const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp&entity=song&sort=recent&limit=200`)

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
