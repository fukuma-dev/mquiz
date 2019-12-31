<template>
  <v-app>
    <custom-header></custom-header>
      <v-layout row wrap>
        <v-flex sm4 xs12 pa-0>
          <v-content>
            <v-container>
              <h3>ユーザー情報</h3>
              <p>ユーザー名が入ります</p>
              <v-list>
                <v-list-tile to="/search" tile flat>検索</v-list-tile>
                <v-list-tile to="/search" tile flat>プレイリスト</v-list-tile>
              </v-list>
            </v-container>
          </v-content>
        </v-flex>
        <v-flex sm8 xs12 py-0>
          <nuxt />
        </v-flex>
      </v-layout>
  </v-app>
</template>

<script>
export default {
  components: {
    CustomHeader: () => import('~/components/Header.vue'),
  }
}
</script>
