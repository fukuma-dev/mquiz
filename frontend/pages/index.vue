<template>
  <v-content>
    <v-container>
      <h3>楽曲検索</h3>
      <Search></Search>
    </v-container>
  </v-content>
</template>

<script>
import Search from '~/components/Search.vue'

export default {
  components: {
    Search
  }
}
</script>
