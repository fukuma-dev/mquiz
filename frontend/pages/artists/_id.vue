<template>
    <v-container>
      <p v-if="res" class="message">{{ res }}</p>
      <h2>{{ results[1].artistName }}</h2>
      <p>{{ count-1 }}件</p>
      <div v-for="n in results" :key="n.trackId">
        <v-card v-if="n.trackName" class="pa-2 my-2" outlined tile>
          <v-layout row wrap>
            <v-flex sm9 xs12 pa-0>
              <v-avatar size="60" tile>
                <img :src="n.artworkUrl100">
              </v-avatar>
              <span class="ml-2">{{ n.trackName }}</span>
            </v-flex>
            <v-flex sm3 xs12 pa-0>
              <v-btn @click="set(n.artistName, n.trackName, n.previewUrl)" class="ml-3" fab small color="white">▷</v-btn>
              <v-btn @click="submit(n.trackId, n.trackName, n.previewUrl, n.artistName, n.artistId)" class="ml-1" fab small color="white">＋</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </div>
      <Player :trackName="trackName" :artistName="artistName" :src="src"></Player>
    </v-container>
</template>

<script>
import axios from 'axios'
import Player from '~/components/Player.vue'

export default {
  data() {
    return {
      res: '',
      src: '',
      trackName: '',
      artistName: '',
      canPlay: () => {}
    }
  },
  methods: {
    set(artistName, trackName, previewUrl) {
      this.src = previewUrl
      this.trackName = trackName
      this.artistName = artistName
    },
    submit(trackId, trackName, previewUrl, artistName, artistId) {
      axios.post('http://localhost:3000/tracks', {
        trackId: trackId,
        trackName: trackName,
        previewUrl: previewUrl,
        artistName: artistName,
        artistId: artistId,
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
    Player
  }
}
</script>

<style>
.message {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 15px;
  padding: 5px;
  background-color: blanchedalmond;
  opacity: 0.9;
}
</style>
