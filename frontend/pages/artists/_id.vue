<template>
  <v-container>
    <h3>{{ results[1].artistName }}</h3>
    <div class="results overflow-y-auto">
      <div
       v-for="n in results"
       :key="n.trackId"
      >
        <v-card
          v-if="n.trackName"
          key="track-name"
          :hover="hover"
          outlined
          class="pa-2 my-1"
          @click="
            set(n.trackId, n.trackName, n.artistId, n.artistName, n.previewUrl)
          "
        >
          <v-avatar
            size="40"
            tile
          >
            <img
              :src="n.artworkUrl100"
            />
          </v-avatar>
          <span
            class="ml-2"
          >
            {{ n.trackName }}
          </span>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      hover: true
    }
  },
  methods: {
    set(trackId, trackName, artistId, artistName, previewUrl) {
      this.$store.commit('setAudio', {
        trackId,
        trackName,
        artistId,
        artistName,
        previewUrl
      })
    }
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp&entity=song&sort=recent&limit=200`
    )

    return {
      results: data.results
    }
  }
}
</script>

<style scoped>
.results {
  max-height: 530px;
}
</style>
