<template>
  <span class="level-container">
    <template v-if="level ==1">
      <img src="../assets/img/skill-level-1.svg">
    </template>
    <template v-else-if="level ==2">
      <img src="../assets/img/skill-level-2.svg">
    </template>
    <template v-else-if="level ==3">
      <img src="../assets/img/skill-level-3.svg">
    </template>
    <template v-else>
      <img src="../assets/img/skill-level-4.svg">
    </template>
  </span>


</template>
<script>
  export default {
    name: 'level',
    props: {
      level: {
        type: Number,
        default: 4,
      }
    }
  }
</script>
<style scoped>
  .level-container{
    /*display: flex;*/
    /*justify-content: flex-start;*/
    text-align: center;
  }
  img {
    max-width: 30px;
    vertical-align: middle;
  }
  .name{
    font-size: 1.1rem;
    font-weight: bold;
  }
</style>
