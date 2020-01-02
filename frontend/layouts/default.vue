<template>
  <v-app>
    <custom-header />
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="4" v-if="$route.name !== 'playlist-id'">
            <side-menu />
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
  computed: {
    cols() {
      return (this.$route.name !== 'playlist-id') ? 8 : 12
    }
  },
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
