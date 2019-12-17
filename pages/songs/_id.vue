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
          <v-btn flat>この曲をプレイリストに追加</v-btn>
        <!-- </v-layout> -->
        <!-- <v-layout justify-center> -->
          <v-btn flat :to="`/artists/${results[0].artistId}`">楽曲一覧に戻る</v-btn>
        </v-layout>
      </v-card>
      <!-- <p>{{ results }}</p> -->
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
    async asyncData ({params}) {
        const { data } = await axios.get(`http://itunes.apple.com/lookup?id=${params.id}&country=JP&lang=ja_jp`)

        return {
          results: data.results,
        }
    }
}
</script>
