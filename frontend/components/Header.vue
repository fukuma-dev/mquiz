<template>
  <v-toolbar>
    <v-toolbar-items>
      <v-btn to="/" class="logo" active-class flat>
        <h1>mquiz</h1>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items v-for="item in items" :key="item.text">
      <v-btn :to="item.to" active-class flat>{{ item.text }}</v-btn>
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
