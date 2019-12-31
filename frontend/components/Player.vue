<template>
  <div class="audio">
    <v-card>
      <v-card-text v-if="trackName">{{ trackName + ' / ' + artistName }}</v-card-text>
      <vuetify-audio :file="src" ref="player" :canPlay="play()"></vuetify-audio>
    </v-card>
  </div>
</template>

<script>
import VuetifyAudio from 'vuetify-audio'

export default {
  props: {
    trackName: '',
    artistName: '',
    src: '',
  },
  methods: {
    play() {
      console.log(this.$refs.player)
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
</style>
