<template>
  <div>
    <header id="masthead">
      <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="{ name: 'index'}"><a class="navbar-brand" href="#"><img src="../assets/img/berklee-online-logo-red-gray.png" alt=""></a></router-link>

        <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 center justify-content-end">
            <li class="nav-item">
              <router-link :to="{ name: 'index'}">
                <a class="nav-link" href="#">
                  {{$t("header.home")}}
                </a>
              </router-link>

            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'list'}">
                <a class="nav-link" href="#">
                  {{$t("header.courses")}}
                </a>
              </router-link>

            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about'}">
                <a class="nav-link" href="#">
                  {{$t("header.aboutUs")}}
                </a>
              </router-link>

            </li>
            <li class="nav-item">
              <div class="lang nav-link">
                <span :class="{active:locale == 'en'}" @click="changeLang('en')">
                  <span class="lang-btn" :class="{active:locale == 'en'}" >En</span>
                </span>
                <i>|</i>
                <span :class="{active:locale == 'zh'}" @click="changeLang('zh')">
                  <span class="lang-btn" :class="{active:locale == 'zh'}">中</span>
                </span>
              </div>

            </li>
            <li v-if="getIsLogin" class="text-center" >
              <a href="#" id="avatarDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                 <Avatar :src="getUserInfo.user_avatar"/>
              </a>
              <br>
              <div class="dropdown-menu" style="float: right;right: 2px;left: auto" aria-labelledby="avatarDropDown">
                <router-link class="dropdown-item" href="#" :to="{ name: 'userCenter'}">
                  {{$t('header.userCenter')}}
                </router-link>
                <a class="dropdown-item" href="#" @click.prevent="loginOut">{{$t('header.logout')}}</a>
              </div>
            </li>

          </ul>
          <form class="form-inline my-2 my-lg-0 justify-content-center" style="margin:0 1.3rem">
            <router-link :to="{ name: 'login'}" v-if="!getIsLogin">
              <a class="btn-login nav-link" href="#" id="login" rel="nofollow">{{$t('header.login')}}</a>
            </router-link>
            <router-link :to="{ name: 'register'}" v-if="!getIsLogin">
              <a class="btn-login nav-link" style="margin-left: 1rem;" href="#" id="register" rel="nofollow">{{$t('header.register')}}</a>
            </router-link>

          </form>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  import Avatar from './avatar.vue'
  export default {
    name: 'MyHeader',
    components:{Avatar},
    data() {
      return {
        header: 'MyHeader',
        locale:'',
        lang:''
      }
    },
    methods:{
      ...mapMutations([
        'changeLoginStatus', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        'changeUserInfo' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
      loginOut(){
        this.changeLoginStatus(false);
        let userInfo = {
          id:'',
          email:'',
          nickname:'',
          sex:'',
          avatar:'',
          phone:'',
          adderss:''
        }
        this.changeUserInfo(userInfo);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('user_id');
      },
      changeLang(lang){
        this.locale = lang
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'getIsLogin',
        'getUserInfo'
      ])
    },
    mounted() {
      if(localStorage.getItem('locale') == 'en'){
        this.locale='en';
        this.lang='ENG';
      }else{
        this.locale='zh';
        this.lang='中文';
      }
//      localStorage.setItem('lng', this.locale);
    },
    watch: {
      locale (val) {
        this.$i18n.locale = val;
        localStorage.setItem('locale', val);
      }
    }
  }
</script>

<style scoped>
  #masthead{
    margin-bottom: 6rem;
  }

  #masthead .navbar-brand img {
    width: 190px;
    margin-right: 30px;
  }
  #masthead .navbar .navbar-nav.center {
    align-items: center;
    flex: 1;
    justify-content: center;
    padding-top: 5px;
  }
  #masthead .navbar .navbar-nav.center .nav-item {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  }
  #masthead .navbar .navbar-nav.center .nav-item>a {
    color: rgba(0,0,0,0.71);
    position: relative;
    display: inline-block;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: .75px;
    transition: color .2s ease;
    padding-left: 0;
    padding-right: 0;
    text-transform: uppercase;
  }

  #masthead .navbar .form-inline{
    font-size: 0.9rem;
  }

  #masthead .navbar .form-inline .apply, #masthead .navbar .form-inline .btn-apply {
    background: #ee243c;
    color: #FFF;
    padding: 7px 20px;
    margin-right: 10px;
    transition: all ease .2s;
  }

  #masthead .navbar .form-inline .login, #masthead .navbar .form-inline .btn-login {
    border: 1px solid #888;
    padding: 6px 18px;
  }

  #masthead .navbar .form-inline .btn-login{
    color: rgba(0,0,0,0.5);
  }

  .lang{
    /*background-color: #007bff;*/
    color: rgba(0,0,0,.7)
  }
  .lang>span{
    cursor: pointer;
  }
  .lang>span:hover{
    /*background-color: #005cbf;*/
    color: #007bff;
  }
  .lang>span.active{
    /*background-color: #005cbf;*/
    color: #007bff;
  }
</style>
