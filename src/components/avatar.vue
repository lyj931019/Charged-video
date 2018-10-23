<template>
  <img :src="src" alt="" class="avatar" onerror="this.src='./static/img/avatar.png';this.onerror=null">
</template>

<script>
  export default {
    name:'avatar',
    props:{
      src:String
    }
  }
</script>

<style scoped>
  .avatar{
    max-width: 60px;
    max-height: 60px;
    display: inline-block;
    border-radius: 50%;
  }
</style>
