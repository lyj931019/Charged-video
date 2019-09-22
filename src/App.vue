<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-21 17:53:27
 * @LastEditTime: 2019-09-19 22:41:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <!--<MyHeader/>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Loading v-if="LOADING"/>
    <!--<MyFooter/>-->
  </div>
</template>

<script>
  import { mapMutations,mapState } from 'vuex'
  import Loading from '@/common/loading.vue'
  export default {
    name: 'App',
    components: {Loading},
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
    created() {
      const invite_code = this.$route.query.invite_code || sessionStorage.invite_code
      if (invite_code) {
        console.log(invite_code)
        window.invite_code = invite_code
        sessionStorage.invite_code = this.$route.query.invite_code
      }
    },
    beforeCreate(){
      let user_id = localStorage.getItem('user_id');
      user_id = this.$base64.decode(user_id);
      let isLogin = localStorage.getItem('isLogin');
      if(user_id){
        let _this = this;
        this.$http({
          method: 'get',
          url: 'v1/users/'+user_id,
        }).then(res => {
          if (res.data.state.code == 0) {
            _this.changeLoginStatus(true);
            _this.changeUserInfo(res.data.data);
//            _this.$router.push({name: 'userCenter'});
          }else{
            _this.loginErr = true;
            localStorage.setItem('isLogin',false);
            _this.changeLoginStatus(false);
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
