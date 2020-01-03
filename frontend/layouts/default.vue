<template>
  <v-app>
    <custom-header />
    <v-content>
      <v-container>
        <v-row>
          <v-col
            cols="4"
            v-if="$route.name !== 'playlist-id'"
          >
            <custom-sidebar />
          </v-col>
          <v-col :cols="cols">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    CustomHeader: () => import('~/components/TheHeader.vue'),
    CustomSidebar: () => import('~/components/TheSidebar.vue')
  },
  computed: {
    cols() {
      return (this.$route.name !== 'playlist-id') ? 8 : 12
    },
  }
}
</script>
