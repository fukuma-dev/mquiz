<template>
  <div class="audio">
    <v-card>
      <p v-show="res" class="message">{{ res }}</p>
      <v-card-text v-if="trackName">{{ trackName + ' / ' + artistName }}</v-card-text>
      <vuetify-audio :file="src" ref="player" :canPlay="play()" class="player"></vuetify-audio>
      <v-btn @click="submit(trackId, trackName, previewUrl, artistName, artistId)" flat block large>この曲を追加する</v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import VuetifyAudio from 'vuetify-audio'

export default {
  props: {
    res: '',
    trackId: '',
    trackName: '',
    artistId: '',
    artistName: '',
    src: '',
  },
  methods: {
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
    play() {
      console.log('test')
    }
  },
  components: {
    'vuetify-audio': VuetifyAudio
  }
}
</script>

<style>
.audio {
  width: 30%;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 15px;

}
.message {
  position: absolute;
  top: -60px;
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
