<template>
  <v-app dark>
    <custom-header :items="items"/>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  components: {
    CustomHeader: () => import('~/components/Header.vue'),
  },
  data() {
    return {
      isDrawerOpen: false,
      items: [
        {
          text: 'Top',
          to: '/'
        },
        {
          text: 'Search',
          to: '/search'
        },
        {
          text: 'Playlist',
          to: '/playlist'
        },
      ]
    }
  },
}
</script>
