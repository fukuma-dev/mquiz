<template>
      <v-container>
        <h3>{{ results[1].artistName }}</h3>
        <div class="results overflow-y-auto">
        <div v-for="n in results" :key="n.trackId">
          <v-card v-if="n.trackName" class="pa-2 my-1" outlined @click="set(n.artistId, n.artistName, n.trackId, n.trackName, n.previewUrl)" :hover="hover">
            <v-avatar size="40" tile>
              <img :src="n.artworkUrl100">
            </v-avatar>
            <span class="ml-2">{{ n.trackName }}</span>
          </v-card>
        </div>
        </div>
      </v-container>
</template>

<script>
import axios from 'axios'
import Player from '~/components/Player.vue'

export default {
  data() {
    return {
      hover: true,
      pageNum: 1,
    }
  },
  methods: {
    set(artistId, artistName, trackId, trackName, previewUrl) {
      this.$store.commit('setAudio', {artistId, artistName, trackId, trackName, previewUrl})
    }
  },
  async asyncData ({params}) {
      const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp&entity=song&sort=recent&limit=200`)

      return {
        results: data.results,
      }
  },
  components: {
    Player
  }
}
</script>

<style scoped>
.results {
  max-height: 530px;
}
</style>
