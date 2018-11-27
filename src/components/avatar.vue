<template>
    <img v-if="src" :src="src" alt="" class="avatar">
    <img v-else :src="'./static/img/avatar.png'" alt="" class="avatar">
</template>

<script>
  export default {
    name:'avatar',
    props:{
      src:{
        type:String
      }
    }
  }
</script>

<style scoped>
  .avatar{
    max-width: 48px;
    max-height: 48px;
    display: inline-block;
    border-radius: 50%;
  }
</style>
