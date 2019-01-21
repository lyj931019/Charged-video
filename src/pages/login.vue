<template>
  <div style="background-color: #f2f2f2;position: fixed;top: 0;left: 0;right: 0;bottom: 0;">
    <div style="text-align: center;margin: 2rem 0 1.88rem;">
      <router-link :to="{ name: 'index'}">
        <a class="nav-link" href="#">
          <img :src="'./static/img/logo-gray.jpg'" alt="" style="max-width: 222px;">
        </a>
      </router-link>

    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 main-login">
          <div class="login-container">
            <h1>Log In</h1>
            <p class="alert alert-danger" v-if="loginErr">{{$t('common.wrongNamePwd')}}</p>
            <p class="first-input">
              <input type="text" :placeholder="$t('placeholder.email')" v-model="userName">
            </p>
            <p>
              <input type="password" :placeholder="$t('placeholder.pwd')" v-model="userPwd">
            </p>
            <p class="btn-con">
              <button class="loginBtn" @click="login">{{$t('header.login')}}</button>
            </p>

          </div>
          <div class="signup">
            Don't have an account?&nbsp;&nbsp;<router-link :to="{ name: 'register'}">Sign Up</router-link>
            <!--{{$t('login.noAccount')}}:&nbsp;&nbsp;<router-link :to="{ name: 'register'}">{{$t('header.register')}}</router-link>-->
          </div>
        </div>

      </div>
    </div>
    <div id="footer">
      <!--<img src="../assets/img/footer_logo.gif" alt="Berklee College of Music">-->
      <p id="footerArea">©2001-2018
        Berklee College of Music &nbsp;&nbsp;
        <span>
     <a href="#" title="Terms of Use">Terms of Use</a> |
     <a href="#" title="Privacy Policy">Privacy Policy</a><br><br>
     Berklee College of Music is accredited by the New England Association of Schools and Colleges (NEASC)
     </span>
      </p>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        userPwd: '',
        loginErr: false
      }
    },
    methods: {
      ...mapMutations([
        'changeLoginStatus', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        'changeUserInfo' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
      login() {
        let _this = this;
        if (this.userName.length > 0 && this.userPwd.length > 0) {
//          this.$router.push({ name: 'userCenter'});
          let _this = this;
          this.$http({
            method: 'post',
            url: '/users/login',
            data: {
              email: _this.userName,
              password: _this.userPwd,
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
          }).then(res => {
            if (res.data.state.code == 0) {
              localStorage.setItem('user_id',res.data.data.id);
              localStorage.setItem('isLogin',true);
              _this.changeLoginStatus(true);
              _this.changeUserInfo(res.data.data);
              _this.$router.push({name: 'userCenter'});
            }else{
              _this.loginErr = true;
            }
          })


        }
      }
    },
    beforeMount() {
      this.loginErr = false;
      this.userName = '';
      this.userPwd = '';
    }
  }
</script>

<style scoped>
  .main-login.col-12{
    background-color: #fff;
    max-width: 400px;
    margin: auto;
    box-shadow: 0 5px 7px #dadada;
    padding: 0;
  }
  .login-container {
    text-align: center;
    box-sizing: border-box;
    padding: 30px 30px 0 30px;
  }

  .login-container h1 {
    margin-bottom: 30px;
    font-size: 1.88rem;
    line-height:normal;
  }

  .login-container p {
    margin-bottom: 30px;
  }
  .login-container p.first-input{
    margin-bottom: 10px;
  }
  .login-container p.btn-con {
    margin-top: 30px;
  }

  input[type="text"], input[type="email"], input[type="password"] {
    /*background: #f2f2f2 none;*/
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: rgba(0, 0, 0, 1);
    padding: 4px 8px;
    position: relative;
    font-size: .88rem;
    width: 100%;
    z-index: 99;
    line-height:1.4rem;
    background-color: #fff;
  }

  .loginBtn {
    background: #ed2024;
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    font-weight: normal;
    display: block;
    margin: 15px auto 0 auto;
    padding: 5px 15px;
    -webkit-appearance: none;
    text-align: center;
  }
  /*.loginBtn:hover{*/
    /*background: rgb(176,13,19);*/
    /*color: rgba(255,255,255, 1);*/
    /*box-shadow: 0 2px 0 rgb(176,13,19);*/
    /*text-decoration: none;*/
  /*}*/

  .row {
    position: relative;
  }

  .alert {
    font-style: italic;
    font-size: 1rem;
    padding: 0.05rem;
  }

  .signup{
    border-top: 1px solid #e6e6ec;
    clear: both;
    margin: 0px 0;
    padding: 20px 0;
    text-align: center;
  }
  .signup a{
    text-decoration: underline;
  }



  #footer {
    color: #888;
    font-size: 12px;
    margin: 30px auto 60px auto;
    text-align: center;
    width: auto;
  }
  #footer img {
    width: 40px;
  }
  #footer p {
    margin-top: 20px;
  }
</style>
