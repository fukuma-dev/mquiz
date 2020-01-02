<template>
  <v-app>
    <custom-header />
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="4">
            <div>
              <h3>ユーザー情報</h3>
              <p>ユーザー名が入ります</p>
              <v-list>
                <v-list-item to="/">検索</v-list-item>
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
          </v-col>
          <v-col cols="8">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      trackId: "1234",
      trackName: "asdfa",
      artistId: "1234",
      artistName: "asfas",
      src: "asdf"
    };
  },
  components: {
    CustomHeader: () => import("~/components/Header.vue"),
    AudioPlayer: () => import("~/components/AudioPlayer.vue")
  }
};
</script>
