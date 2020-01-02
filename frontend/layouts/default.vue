<template>
  <v-app>
    <custom-header />
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="4" v-if="$route.name !== 'playlist-id'">
            <side-menu />
          </v-col>
          <v-col :cols="{ '8': $route.name !== 'playlist-id', '12': $route.name === 'playlist-id' }">
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
      trackId: "",
      trackName: "",
      artistId: "",
      artistName: "",
      src: ""
    }
  },
  components: {
    CustomHeader: () => import("~/components/Header.vue"),
    SideMenu: () => import("~/components/Menu.vue")
  }
};
</script>
