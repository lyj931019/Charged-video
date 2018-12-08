<template>
  <div id="app">
    <!--<MyHeader/>-->
    <!--<keep-alive>-->
      <router-view/>
    <Loading v-if="LOADING"/>
    <!--</keep-alive>-->
    <!--<MyFooter/>-->
  </div>
</template>

<script>
  import { mapMutations,mapState } from 'vuex'
  import Loading from '@/common/loading.vue'
  import Components from '@/components/'
  export default {
    name: 'App',
    components: {...Components,Loading},
    methods: {
      ...mapMutations([
        'changeLoginStatus', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        'changeUserInfo' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
    },
    computed:{
      ...mapState([
        'LOADING'
      ])
    },
    beforeCreate(){
      let user_id = localStorage.getItem('user_id');
      let isLogin = localStorage.getItem('isLogin');
      if(user_id){
        let _this = this;
        this.$http({
          method: 'get',
          url: '/users/'+user_id,
        }).then(res => {
          if (res.data.state.code == 0) {
            _this.changeLoginStatus(true);
            _this.changeUserInfo(res.data.data);
//            _this.$router.push({name: 'userCenter'});
          }else{
            _this.loginErr = true;
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {

  }


</style>
