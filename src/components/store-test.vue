<template>
  <div>
    <h1 v-show="myShow">{{msg}}</h1>
    <button @click="changeShow">{{getMyShow}}</button>
  </div>
</template>

<script>
  import {mapState,mapMutations,mapGetters} from 'vuex';
  export default {
    name:'todo-list',
    computed:{
      ...mapState(['myShow','msg']),
      ...mapGetters(['getMyShow'])
    },
    methods:{
      ...mapMutations(['changeShow'])
    }
  }
</script>
