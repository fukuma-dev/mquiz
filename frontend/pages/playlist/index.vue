<template>
  <v-container>
    <div class="mb-5">
      <h3 class="my-3">作成したプレイリスト</h3>
      <ul>
        <li class="my-2"><nuxt-link to="/playlist/1">プレイリストその1</nuxt-link></li>
      </ul>
    </div>
    <h3 class="my-3">作成中のプレイリスト</h3>
    <div
      v-if="getPlaylist[0]"
      key="editing-playlist"
    >
      <v-text-field
        v-model="playlistName"
        placeholder="プレイリスト名を入力"
        label="プレイリスト名"
      />
        <dragg-able :options="options" class="my-5" @update="updateList">
          <v-card
            v-for="(n, i) in getPlaylist"
            :key="n.trackId"
            outlined
            class="my-1"
            @click="
              set(n.trackId, n.trackName, n.artistId, n.artistName, n.previewUrl)
            "
          >
            <v-container class="py-0">
              <v-row justify="space-between">
                <v-col
                  cols="10"
                  class="pa-0"
                >
                  <v-card-text class="track__name pb-0">{{ n.trackName }}</v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="pa-0"
                >
                  <v-card-actions>
                    <v-btn
                      text
                      @click="deleteAudio(i)"
                    >
                      <v-icon class="fa fa-trash"></v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </dragg-able>
      <v-btn
        block
        text
        outlined
        @click="registList(playlistName)"
      >
        登録
      </v-btn>
    </div>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  components: {
    DraggAble: () =>  import('vuedraggable')
  },
  data() {
    return {
      results: [],
      options: {
        animation: 200
      },
      playlistName: '無名のプレイリスト'
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
    },
    deleteAudio(i) {
      this.$store.commit('deleteAudio', i)
    },
    updateList(event) {
      // 移動前のインデックス
      const oldIndex = event.oldIndex
      // 移動後のインデックス
      const newIndex = event.newIndex
      this.$store.commit("updateList", {
        oldIndex,
        newIndex
      })
    },
    registList(name) {
      const api = axios.create()

      axios.post('http://localhost:3000/playlists', {
        name: name,
        userId: 1
      })
      .then(response => {
        axios.all([
          this.$store.state.playlist.forEach(audio =>
            api.post('http://localhost:3000/tracks', {
              trackId: audio.trackId,
              trackName: audio.trackName,
              playlistId: response.data.id,
              artistName: audio.artistName,
              artistId: audio.artistId,
              previewUrl: audio.previewUrl,
            })
          )
        ])
        .then(response => {
          this.$store.commit('deleteAllAudio')
        })
      })
    }
  },
  async asyncData ({params}) {
    const { data } = await axios.get(`http://localhost:3000/tracks`)

    return {
      results: data,
    }
  }
}
</script>

<style>
.track__name {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
