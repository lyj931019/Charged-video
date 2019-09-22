<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-15 23:25:35
 * @LastEditTime: 2019-08-25 00:49:30
 * @LastEditors: Please set LastEditors
 -->
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
        <!-- <div id="benefits">
          <ul class="clearfix">
            <li class="first">Sample Courses</li>
            <li>Free Video Tutorials</li>
            <li class="first">Exclusive Industry Interviews</li>
            <li>Free Course Catalog</li>
            <li class="first">Free Lesson and Degree Handbooks</li>
          </ul>
        </div> -->
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
              <input type="password" :placeholder="$t('placeholder.pwd_again')" v-model="reUserPwd">
            </p>
            <p class="first-input">
              <input type="email" :placeholder="$t('placeholder.email')" v-model="userEmail">
            </p>
            <p class="first-input">
              <input class="codeInput" :placeholder="$t('placeholder.code')" v-model="code">
              <button class="sendCodeBtn" :class="{'btn-disabled': !!lockTime}" :disabled="!!lockTime" @click="handleSend">{{ lockTime ? `${lockTime}s` : $t('placeholder.getCode')}}</button>
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
            {{$t('register.haveAccount')}}?&nbsp;&nbsp;
            <router-link :to="{ name: 'login'}">{{$t('header.login')}}</router-link>
          </div>
        </div>

      </div>
    </div>
    <div id="footer">
      <!--<img src="../assets/img/footer_logo.gif" alt="Berklee College of Music">-->
      <p id="footerArea">
        <span>
     <router-link to="/about/TermsOfUse" title="Terms of Use">Terms of Use</router-link> |
     <router-link to="/about/Privacy" href="#" title="Privacy Policy">Privacy Policy</router-link><br><br>
     © Copyright 2019 i-Link Incorporation
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
        errTips: '',
        reUserPwd: '',
        code: '',
        lockTime: 0
      }
    },
    methods: {
      register() {
        let _this = this;
        if (!(this.userName.length > 0 && /^[a-zA-Z0-9_]{4,15}$/.test(this.userName))) {
          this.registerErr = true;
          this.errTips = this.$t('register.correct') + this.$t('common.account') + '. ' + this.$t('common.accountRule');
          return;
        }
        if (!(this.userPwd.length > 0 && /^([a-zA-Z0-9]|[._]){4,19}$/.test(this.userPwd))) {
          this.registerErr = true;
          this.errTips = this.$t('register.correct') + this.$t('common.password') + '. ' + this.$t('common.passwordRule');
          return;
        }
        if (this.userPwd !== this.reUserPwd) {
          this.registerErr = true;
          this.errTips = this.$t('common.rePassword');
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
            url: 'v2/users',
            data: {
              email: _this.userEmail,
              password: _this.userPwd,
              nickname: _this.userName,
              captcha: this.code
            }
          }).then(res => {
            if (res.data.state.code == 0 && res.data.status) {
//              _this.changeLoginStatus(true);
//              _this.changeUserInfo(res.data.data);
              _this.$router.push({name: 'login'})
            } else {
              _this.registerErr = true;
              this.errTips = res.data.data.message
            }
          })
        }
      },
      handleSend() {
        if (!(this.userEmail.length > 0 && /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.userEmail))) {
          this.registerErr = true;
          this.errTips = this.$t('register.correct') + this.$t('common.email');
          return;
        }
        this.$http({
          method: 'post',
          url: 'v2/users/captcha/email',
          data: {
            email: this.userEmail,
          }
        }).then(res => {
          if (res.data.state.code === 0) {
            this.lockTime = 60
            const countDown = () => {
              this.lockTime--
              setTimeout(() => {
                if (this.lockTime > 0) {
                  countDown()
                }
              }, 1000)
            }
            countDown()
          } 
        })
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

<style scoped lang="scss">
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
    &::after{
      content: '';
      display: table;
      clear: both;
    }
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
    &:focus {
      outline: none;
    }
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
  .codeInput{
    width: 60%;
    float: left;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: rgba(0, 0, 0, 1);
    padding: 4px 8px;
    position: relative;
    font-size: .88rem;
    z-index: 99;
    line-height: 1.4rem;
    background-color: #fff;
  }
  .sendCodeBtn{
    width: 40%;
    float: left;
    background: #ed2024;
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    font-weight: normal;
    display: block;
    height: 32px;
    line-height: 32px;
    -webkit-appearance: none;
    text-align: center;
    &:focus {
      outline: none;
    }
    &.btn-disabled{
      background: #ccc
    }
  }
</style>
