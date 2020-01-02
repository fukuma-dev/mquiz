<template>
  <div>
    <v-list class="pa-0" flat>
      <v-list-item to="/" tile>検索</v-list-item>
      <v-list-item to="/playlist">プレイリスト</v-list-item>
    </v-list>
    <audio-player
      :trackId="trackId"
      :trackName="trackName"
      :artistId="artistId"
      :artistName="artistName"
      :src="src"
      class="player"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      trackId: "",
      trackName: "",
      artistId: "",
      artistName: "",
      src: ""
    }
  },
  components: {
    AudioPlayer: () => import("~/components/AudioPlayer.vue")
  }
}
</script>
