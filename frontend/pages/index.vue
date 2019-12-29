<template>
  <v-content>
    <v-container>
      <!-- <h2 class="text-center">ちゃちゃっとイントロクイズ</h2> -->
      <v-layout row wrap>
          <v-flex sm3 xs12 pa-0>
            <h3>ユーザー情報</h3>
            <p>ユーザー名が入ります</p>
          </v-flex>
          <v-flex sm9 xs12 py-0>
            <h3>メニュー</h3>
            <v-btn to="/search" outline large round>イントロクイズを作ろう</v-btn>
            <v-btn to="/playlist" outline large round>作ったイントロクイズを見る</v-btn>
          </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
