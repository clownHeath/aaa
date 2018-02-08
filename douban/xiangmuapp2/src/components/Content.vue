<template>
  <div class="public_content">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'app-content'
  }
</script>
<style >
    .public_content{
      overflow: auto;
      height: auto;
      width: 100%;
      margin-bottom:51px;
    }
    /* .header ~ .public_content{margin-top:45px;} */
</style>