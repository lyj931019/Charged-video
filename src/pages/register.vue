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
        <div class="col-12 col-md-7">
          <div class="login-container">
            <p class="alert alert-danger" v-if="registerErr">{{errTips}}</p>
            <h1>{{$t('common.signUp')}}</h1>

            <label>
              <input type="text" :placeholder="$t('placeholder.nickname')" v-model="userName">
            </label>
            <label>
              <input type="password" :placeholder="$t('placeholder.pwd')" v-model="userPwd">
            </label>
            <label>
              <input type="email" :placeholder="$t('placeholder.email')" v-model="userEmail">
            </label>
            <label>
              <i>{{$t('register.tips')}}</i>
            </label>
            <div class="footer-btn">
              <div>
                {{$t('register.existingAccount')}}:&nbsp;<router-link :to="{ name: 'login'}">{{$t('header.login')}}</router-link>
              </div>
              <label class="btn-con">
                <button class="loginBtn" @click="register">{{$t('common.signUp')}}</button>
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'register',
    data() {
      return {
        userName: '',
        userPwd: '',
        userEmail:'',
        registerErr: false,
        errTips:''
      }
    },
    methods: {
      register() {
        let _this = this;
        if(!(this.userName.length > 0 && /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.userName))){
          this.registerErr = true;
          this.errTips = this.$t('register.correct')+this.$t('common.account');
          return ;
        }
        if(!(this.userPwd.length > 0 && /^([a-zA-Z0-9]|[._]){4,19}$/.test(this.userPwd))){
          this.registerErr = true;
          this.errTips = this.$t('register.correct')+this.$t('common.password');
          return ;
        }
        if(!(this.userEmail.length > 0 && /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.userEmail))){
          this.registerErr = true;
          this.errTips = this.$t('register.correct')+this.$t('common.email');
          return ;
        }
        if ( this.userPwd.length > 0) {
//          this.$router.push({ name: 'userCenter'});
          let _this = this;
          this.$http({
            method: 'post',
            url: '/users',
            data: {
              email: _this.userEmail,
              password: _this.userPwd,
              nickname: _this.userName,
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
//              _this.changeLoginStatus(true);
//              _this.changeUserInfo(res.data.data);
              _this.$router.push({name: 'login'});
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
    padding: 80px 80px 5px;
    box-shadow: 0 5px 7px #dadada;
    /*text-align: center;*/
  }

  .login-container h1 {
    margin-bottom: 45px;
    font-size: 2.0rem;
  }

  .login-container label {
    margin-bottom: 30px;
    display: block;
  }

  .login-container label.btn-con {
    /*margin-top: 30px;*/
    text-align: right;
  }

  .login-container .footer-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input[type="text"], input[type="email"], input[type="password"] {
    -webkit-appearance: none;
    border-radius: 0;
    display: block;
    width: 100%;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #d3d6d9;
    color: #585e69;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.5rem;
    padding: 0 0 10px;
  }

  input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus {
    border-bottom: 2px solid #3498db;
  }
  .loginBtn {
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    padding: 15px;
    -webkit-appearance: none;
    text-align: center;
    background: rgb(216, 17, 24);
    color: rgba(255,255,255, 1);
    box-shadow: 0 2px 0 rgb(176,13,19);
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 3px;
  }
  .loginBtn:hover{
    background: rgb(176,13,19);
    color: rgba(255,255,255, 1);
    box-shadow: 0 2px 0 rgb(176,13,19);
    text-decoration: none;
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
