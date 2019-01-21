<template>
  <div style="background-color: #f2f2f2;position: fixed;top: 0;left: 0;right: 0;bottom: 0;">
    <div id="header">
      <div id="header_content">
        <div style="text-align: center;">
          <router-link :to="{ name: 'index'}">
            <a class="nav-link" href="#">
              <img :src="'./static/img/logo-gray.jpg'" alt="" style="max-width: 222px;">
            </a>
          </router-link>
        </div>
        <div id="benefits">
          <ul class="clearfix">
            <li class="first">Sample Courses</li>
            <li>Free Video Tutorials</li>
            <li class="first">Exclusive Industry Interviews</li>
            <li>Free Course Catalog</li>
            <li class="first">Free Lesson and Degree Handbooks</li>
          </ul>
        </div>
      </div>

    </div>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 main-login">
          <div class="login-container">
            <p class="alert alert-danger" v-if="registerErr">{{errTips}}</p>
            <h1>{{$t('common.signUp')}}</h1>
            <p class="first-input">
              <input type="text" :placeholder="$t('placeholder.nickname')" v-model="userName">
            </p>
            <p class="first-input">
              <input type="password" :placeholder="$t('placeholder.pwd')" v-model="userPwd">
            </p>
            <p class="first-input">
              <input type="email" :placeholder="$t('placeholder.email')" v-model="userEmail">
            </p>
            <p class="btn-con">
              <button class="loginBtn" @click="register">{{$t('common.signUp')}}</button>
            </p>
            <!--<p>-->
            <!--<i>{{$t('register.tips')}}</i>-->
            <!--</p>-->
            <!--<div class="footer-btn">-->
            <!--<div>-->
            <!--{{$t('register.existingAccount')}}:&nbsp;<router-link :to="{ name: 'login'}">{{$t('header.login')}}</router-link>-->
            <!--</div>-->
            <!--<label class="btn-con">-->
            <!--<button class="loginBtn" @click="register">{{$t('common.signUp')}}</button>-->
            <!--</label>-->
            <!--</div>-->

          </div>
          <div class="signup">
            Don't have an account?&nbsp;&nbsp;
            <router-link :to="{ name: 'login'}">Log In</router-link>
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
  import {mapMutations} from 'vuex'

  export default {
    name: 'register',
    data() {
      return {
        userName: '',
        userPwd: '',
        userEmail: '',
        registerErr: false,
        errTips: ''
      }
    },
    methods: {
      register() {
        let _this = this;
        if (!(this.userName.length > 0 && /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.userName))) {
          this.registerErr = true;
          this.errTips = this.$t('register.correct') + this.$t('common.account');
          return;
        }
        if (!(this.userPwd.length > 0 && /^([a-zA-Z0-9]|[._]){4,19}$/.test(this.userPwd))) {
          this.registerErr = true;
          this.errTips = this.$t('register.correct') + this.$t('common.password');
          return;
        }
        if (!(this.userEmail.length > 0 && /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.userEmail))) {
          this.registerErr = true;
          this.errTips = this.$t('register.correct') + this.$t('common.email');
          return;
        }
        if (this.userPwd.length > 0) {
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
            } else {
              _this.registerErr = true;
            }
          })


        }
      }
    },
    beforeMount() {
      this.registerErr = false;
      this.userName = '';
      this.userPwd = '';
      this.userEmail = '';
    }
  }
</script>

<style scoped>
  #header{
    margin: 8px auto 0 auto;
    width: auto;
    max-width: 400px;
  }
  #header #header_content {
    padding: 20px 0;
  }
  #header #benefits ul {
    display: block;
    margin: 10px 0 0 0;
    padding: 0;
    width: auto;
    list-style: none;
  }
  #header #benefits ul li {
    color: #66717a;
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-right: 15px;
    padding-left: 20px;
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: center;
    text-shadow: -1px -1px -1px #FFF;
    text-transform: uppercase;
  }
  #header #benefits ul li:before,#header #benefits ul li:after {
    content: "- ";
  }
  .main-login.col-12 {
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
    line-height: normal;
  }

  .login-container p {
    margin-bottom: 30px;
  }

  .login-container p.first-input {
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
    line-height: 1.4rem;
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

  .row {
    position: relative;
  }

  .alert {
    font-style: italic;
    font-size: 1rem;
    padding: 0.05rem;
  }

  .signup {
    border-top: 1px solid #e6e6ec;
    clear: both;
    margin: 0px 0;
    padding: 20px 0;
    text-align: center;
  }

  .signup a {
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
