<template>
  <v-app>
    <custom-header></custom-header>
        <v-container fluid>
          <v-row>
            <v-col cols="4">
              <div class="side">
                <h3>ユーザー情報</h3>
                <p>ユーザー名が入ります</p>
                <v-list>
                  <v-list-item to="/">検索</v-list-item>
                  <v-list-item to="/playlist">プレイリスト</v-list-item>
                </v-list>
              </div>
            </v-col>
            <v-col cols="8">
              <nuxt />
            </v-col>
          </v-row>
        </v-container>
  </v-app>
</template>

<script>
export default {
  components: {
    CustomHeader: () => import('~/components/Header.vue'),
  }
}
</script>

<style>
.side {
  /* position: fixed;
  width: 25%;
  border: solid 1px;
  padding: 10px; */
}
</style>
