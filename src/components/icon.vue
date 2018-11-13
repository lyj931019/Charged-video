<template>
  <img v-if="type == 'success'" src="../assets/img/success.png" alt="" class="tips-icon">
  <img v-else-if="type == 'error'" src="../assets/img/error.png" alt="" class="tips-icon">
  <img v-else-if="type == 'fail'" src="../assets/img/error.png" alt="" class="tips-icon">
</template>

<script>
  export default {
    name:'icon',
    props:{
      type:String
    }
  }
</script>

<style scoped>
  img.tips-icon{
    width: 32px;
    height: 32px;
    vertical-align: bottom;
    margin-right: .5rem;
  }
</style>
