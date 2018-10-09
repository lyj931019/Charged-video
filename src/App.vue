<template>
  <div id="app">
    <!--<MyHeader/>-->
    <router-view/>
    <!--<MyFooter/>-->
  </div>
</template>

<script>
  import Components from '@/components/'
  export default {
    name: 'App',
    components: Components
  }
</script>

<style lang="scss">
  #app {

  }


</style>
