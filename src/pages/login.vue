<template>
  <div style="background-color: #f2f2f2;position: fixed;top: 0;left: 0;right: 0;bottom: 0;">
    <div style="text-align: center;margin: 4rem 0;">
      <router-link :to="{ name: 'index'}">
        <a class="nav-link" href="#">
          <img src="../assets/img/berklee-online-logo-red-gray.png" alt="" style="max-width: 222px;">
        </a>
      </router-link>

    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-5">
          <div class="login-container">
            <h1>Log In</h1>
            <p class="alert alert-danger" v-if="loginErr">{{$t('common.wrongNamePwd')}}</p>
            <p>
              <input type="text" :placeholder="$t('common.account')" v-model="userName">
            </p>
            <p>
              <input type="password" :placeholder="$t('common.pwd')" v-model="userPwd">
            </p>
            <p class="btn-con">
              <button class="loginBtn" @click="login">$t('header.login')</button>
            </p>
          </div>
        </div>

      </div>
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
  .login-container {
    background-color: #fff;
    padding: 30px 30px 25px 30px;
    box-shadow: 0 5px 7px #dadada;
    text-align: center;
  }

  .login-container h1 {
    margin-bottom: 45px;
    font-size: 2.0rem;
  }

  .login-container p {
    margin-bottom: 30px;
  }

  .login-container p.btn-con {
    margin-top: 30px;
  }

  input[type="text"], input[type="email"], input[type="password"] {
    background: #f2f2f2 none;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: rgba(0, 0, 0, 1);
    padding: 4px 8px;
    position: relative;
    font-size: 1em;
    width: 100%;
    z-index: 99;
  }

  .loginBtn {
    background: #ed2024;
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    font-weight: normal;
    display: block;
    margin: 45px auto 0 auto;
    padding: 5px 75px;
    -webkit-appearance: none;
    text-align: center;
  }

  .row {
    position: relative;
  }

  .alert {
    font-style: italic;
    font-size: 1rem;
    padding: 0.05rem;
  }
</style>
