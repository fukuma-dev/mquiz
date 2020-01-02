<template>
  <div class="audio">
    <v-card class="card">
      <p v-show="res" class="message">{{ res }}</p>
      <v-card-text v-if="audio.trackName">{{
        audio.trackName + " / " + audio.artistName
      }}</v-card-text>
      <custom-audio
        :file="audio.previewUrl"
        ref="player"
        class="player" />
      <v-btn
        @click="
          submit(
            audio.trackId,
            audio.trackName,
            audio.previewUrl,
            audio.artistName,
            audio.artistId
          )
        "
        :disabled="!audio.trackName"
        text
        block
        large
        >この曲を追加する</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    res: ""
  },
  computed: {
    audio() {
      return this.$store.state.audio;
    }
  },
  methods: {
    submit(trackId, trackName, previewUrl, artistName, artistId) {
      axios
        .post("http://localhost:3000/tracks", {
          trackId: trackId,
          trackName: trackName,
          previewUrl: previewUrl,
          artistName: artistName,
          artistId: artistId
        })
        .then(response => {
          this.res = response.data;
        });
    }
  },
  components: {
    CustomAudio: () => import("~/components/Audio.vue")
  }
};
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
