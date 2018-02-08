<template>
  <l-content>
      <mt-search v-model="value"></mt-search>
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
  </l-content>
</template>
<script>
    export default {
        name: 'keywords',

    }
</script>
<style scoped>

</style>
