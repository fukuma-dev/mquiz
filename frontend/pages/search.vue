<template>
  <v-container>
    <h2>イントロクイズで使いたい曲を検索しよう</h2>
    <Search/>
  </v-container>
</template>

<script>
import Search from '~/components/Search.vue'

export default {
  components: {
    Search
  }
}
</script>
