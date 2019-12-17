<template>
  <div>
    <h2>楽曲一覧 <span>曲数: {{ count }}</span></h2>
    <ul>
      <li v-for="n of count" :key="n">{{ meta[n-1] }}, {{ meta[n-1].trackName }}, {{ meta[n-1].previewUrl }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
    meta: Array
  }
}
</script>
