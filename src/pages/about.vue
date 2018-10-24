<template>
  <div>
    <MyHeader/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-3">aside</div>
        <div class="col-12 col-lg-9">content</div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import Common from '../components/common'
  export default {
    name:'about',
    components:Common,
    data(){

    },
    methods:{}

  }
</script>

<style scoped>

</style>
