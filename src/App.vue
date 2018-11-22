<template>
  <div id="app">
    <!--<MyHeader/>-->
    <router-view/>
    <!--<MyFooter/>-->
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Components from '@/components/'
  export default {
    name: 'App',
    components: Components,
    methods: {
      ...mapMutations([
        'changeLoginStatus', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        'changeUserInfo' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
    },
    beforeCreate(){
      let user_id = localStorage.getItem('user_id');
      let isLogin = localStorage.getItem('isLogin');
      if(user_id){
        let _this = this;
        this.$http({
          method: 'get',
          url: '/users/1',
          params: {
            id: user_id,
          },
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
