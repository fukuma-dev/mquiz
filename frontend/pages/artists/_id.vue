<template>
    <div>
      <h2>{{ results[1].artistName }}</h2>
      <p>{{ count-1 }}件</p>
      <div v-for="n in results" :key="n.trackId">
        <v-card v-if="n.trackName" class="pa-2 my-2" outlined @click="set(n.artistId, n.artistName, n.trackId, n.trackName, n.previewUrl)" :hover="hover">
          <v-avatar size="60" tile>
            <img :src="n.artworkUrl100">
          </v-avatar>
          <span class="ml-2">{{ n.trackName }}</span>
        </v-card>
      </div>
      <Player
        :trackId="trackId"
        :trackName="trackName"
        :artistId="artistId"
        :artistName="artistName"
        :src="src">
      </Player>
    </div>
</template>

<script>
import axios from 'axios'
import Player from '~/components/Player.vue'

export default {
  data() {
    return {
      src: '',
      trackId: '',
      trackName: '',
      artistId: '',
      artistName: '',
      previewUrl: '',
      hover: true,
      canPlay: () => {}
    }
  },
  methods: {
    set(artistId, artistName, trackId, trackName, previewUrl) {
      this.artistId = artistId
      this.artistName = artistName
      this.trackId = trackId
      this.trackName = trackName
      this.src = previewUrl
    }
  },
  async asyncData ({params}) {
      const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp&entity=song&sort=recent&limit=200`)

      return {
        results: data.results,
        count: data.resultCount
      }
  },
  components: {
    Player
  }
}
</script>
