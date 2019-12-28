<template>
  <div>
    <audio :src="src" controls></audio>
    <ul>
      <li>{{ results[random].trackName }}</li>
      <li v-for="n of 4" :key="n">{{ results[random+n].trackName }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    results: Array,
    random: Number
  }
}
</script>
