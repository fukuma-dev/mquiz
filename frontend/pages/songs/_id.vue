<template>
  <div>
    <v-flex xs12 sm6 offset-sm3 lg4 offset-lg4>
			<v-card>
				<v-card-text>
          {{ results[0].trackName }} / {{ results[0].artistName }}
				</v-card-text>
			</v-card>
      <vuetify-audio :file="results[0].previewUrl"></vuetify-audio>
      <v-card>
        <v-layout justify-center>
          <v-form>
            <input type="hidden" name="track" :value="results[0].trackId">
            <input type="hidden" name="artist" :value="results[0].trackName">
            <input type="hidden" name="artist" :value="results[0].artistName">
            <input type="hidden" name="artist" :value="results[0].previewUrl"> 
            <v-btn flat @click="submit">この曲をプレイリストに追加</v-btn>
          </v-form>
          <v-btn flat :to="`/artists/${results[0].artistId}`">楽曲一覧に戻る</v-btn>
        </v-layout>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import axios from 'axios'
import VuetifyAudio from 'vuetify-audio'

export default {
    components: {
        'vuetify-audio': VuetifyAudio
    },
    methods: {
      submit () {
        console.log(trackid)
      },
    },
    async asyncData ({params}) {
        const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp`)

        return {
          results: data.results,
        }
    }
}
</script>
