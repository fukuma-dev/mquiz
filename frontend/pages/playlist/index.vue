<template>
  <v-container>
    <h2>プレイリスト</h2>
    <div>
      <li><nuxt-link to="/playlist/1">プレイリストその1</nuxt-link></li>
    </div>
    <div v-if="getPlaylist[0]">
      <h2>作成中のプレイリスト</h2>
      <dragg-able :options="options" class="my-5">
        <v-card
          v-for="n in getPlaylist"
          :key="n.trackId"
          @click="set(n.trackId, n.trackName, n.artistId, n.artistName, n.previewUrl)"
          class="my-1"
          outlined>
          <v-card-text>{{ n.trackName }}</v-card-text>
        </v-card>
      </dragg-able>
      <v-btn @click="registPlaylist()" block>登録</v-btn>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      results: [],
      options: {
        animation: 200
      }
    }
  },
  computed: {
    getPlaylist() {
      return this.$store.state.playlist;
    }
  },
  methods: {
    set(trackId, trackName, artistId, artistName, previewUrl) {
      this.$store.commit("setAudio", {
        trackId,
        trackName,
        artistId,
        artistName,
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
