<template>
  <v-container>
    <h2>プレイリスト</h2>
    <div>
      <li><nuxt-link to="/playlist/1">プレイリストその1</nuxt-link></li>
    </div>
    <h2>作成中のプレイリスト</h2>
    <dragg-able :options="options" class="my-5">
      <v-card
        v-for="n in results"
        :key="n.track_id"
        @click="set(n.artist_id, n.artist_name, n.track_id, n.track_name, n.preview_url)"
        class="my-1"
        outlined>
        <v-card-text>{{ n.track_name }}</v-card-text>
      </v-card>
    </dragg-able>
    <v-btn @click="registPlaylist()" block>登録</v-btn>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      options: {
        animation: 200
      }
    }
  },
  methods: {
    set(artistId, artistName, trackId, trackName, previewUrl) {
      this.$store.commit("setAudio", {
        artistId,
        artistName,
        trackId,
        trackName,
        previewUrl
      })
    }
  },
  async asyncData ({params}) {
      const { data } = await axios.get(`http://localhost:3000/tracks`)
      return {
        results: data,
      }
  },
  components: {
    DraggAble: () =>  import('vuedraggable')
  }
}
</script>
