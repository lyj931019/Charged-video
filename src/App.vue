<template>
  <div id="app">
    <MyHeader/>
    <router-view/>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader.vue'
  export default {
    name: 'App',
    components: {MyHeader}
  }
</script>

<style lang="scss">
  #app {

  }


</style>
