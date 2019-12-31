<template>
  <v-toolbar color="indigo" height="40px" flat dark>
    <v-toolbar-items>
      <v-btn to="/" class="logo" active-class flat>
        <h1>intro</h1>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
  }
}
</script>
