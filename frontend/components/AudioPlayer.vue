<template>
  <div class="audio">
    <v-card class="card">
      <p v-show="res" class="message">{{ res }}</p>
      <v-card-text
        v-if="audio.trackName"
        key="audio-title"
      >
        {{ audio.trackName + " / " + audio.artistName }}
      </v-card-text>
      <custom-audio
        :file="audio.previewUrl"
        ref="player"
        class="player" />
      <v-btn
        :disabled="!audio.trackName"
        text
        block
        large
        @click="
          pushAudio(
            audio.trackId,
            audio.trackName,
            audio.artistId,
            audio.artistName,
            audio.previewUrl
          )
        "
        >この曲を追加する</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    CustomAudio: () => import('~/components/Audio.vue')
  },
  data() {
    return {
      res: ''
    }
  },
  computed: {
    audio() {
      return this.$store.state.audio
    }
  },
  methods: {
    pushAudio(trackId, trackName, artistId, artistName, previewUrl) {
      this.$store.commit('pushAudio', {
        trackId,
        trackName,
        artistId,
        artistName,
        previewUrl
      })

      this.res = `「${trackName}」を追加しました`
    }
  }
}
</script>

<style scoped>
.audio {
  margin-top: 50px;
  width: 100%;
}
.message {
  position: absolute;
  bottom: -100px;
  left: 0;
  z-index: 1;
  padding: 5px;
  color: #fff;
  background-color: grey;
}
.player {
  box-shadow: none;
}
</style>
