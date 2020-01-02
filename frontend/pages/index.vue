<template>
  <div>
    <h3>楽曲検索</h3>
    <custom-search />
  </div>
</template>

<script>
export default {
  components: {
    CustomSearch: () => import('~/components/Search.vue')
  }
};
</script>
