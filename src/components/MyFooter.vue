<template>
  <div>
    <div class="footer-form" v-if="!getIsLogin">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6">
            <div class="details-container">
              <h2>Create a free account to get instant access to:</h2>
              <ul class="txt-lg">
                <li>Sample Lessons from Online Courses</li>
                <li>Degree and Lesson Handbooks</li>
                <li>Berklee Online Course Catalog</li>
                <li>Berklee Online News &amp; Exclusive Content</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-5 offset-md-1 col-sm-6 pull-right">
            <div class="lead-collection-form">
              <div class="form-header">
                <div class="lead-form-request-info">
                  <h3>Request Information</h3>
                  <p>Create an account to download our catalog, get our newsletter, and more.</p>
                </div>
              </div>
              <div class="form-login-prompt">
                <h4>
                  Already have an account?
                  <router-link :to="{ name: 'login'}">{{$t('header.login')}}</router-link>
                </h4>
              </div>
              <div class="form-container">
                <form>
                  <p class="alert alert-danger" v-if="registerErr">{{errTips}}</p>
                  <div class="form-group">
                    <input type="text" class="form-control" :placeholder="$t('placeholder.nickname')"
                           v-model="userName">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" :placeholder="$t('placeholder.pwd')" v-model="userPwd">
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" :placeholder="$t('placeholder.email')" v-model="userEmail">
                  </div>
                  <div class="form-group">
                    <button class="btn btn-danger" type="button" @click="register">{{$t('common.signUp')}}</button>
                  </div>
                </form>
                <h6>
                  <i>
                    <svg class="svg-inline--fa fa-lock fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="lock"
                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor"
                            d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                    </svg><!-- <div class="fa fa-icon fa-lock"></div> -->
                  </i>
                  <span>
&nbsp; Secure form. Berklee Online will not sell or rent your email address to third parties.<br><a href="#">Our privacy policy</a>
</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-bg">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 foot-icons">
            <img src="../assets/img/footer_award_upcea.svg">
            <img src="../assets/img/footer_logo.svg">
            <img src="../assets/img/footer_award_QS_Stars.svg">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              <a href="#" style="color: #FFF;">
                Berklee College of Music
              </a>
              &nbsp;is accredited by the New England Association of Schools and Colleges (NEASC)
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              Berklee Online is a University Professional and Continuing Education Association (UPCEA) award-winner twelve years in a row (2005-2017).</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 center text-center">
            © Copyright 2001 - 2018
            <a href="#" target="_blank" class="foot-btn">Berklee College of Music</a>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  export default {
    name: 'MyHeader',
    data() {
      return {
        header: 'MyHeader',
        userName: '',
        userPwd: '',
        userEmail: '',
        registerErr: false
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
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'getIsLogin',
        'getUserInfo'
      ])
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
  .footer-form {
    background-color: #4c5960;
    color: white;
    padding: 5rem 0;
  }

  .details-container {
    margin: 20px 0;
  }

  .details-container h2 {
    margin: 59px 0 20px 0;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 2.3rem;
    line-height: 4rem;
  }

  .details-container ul {
    margin-left: 5px;
    font-size: 1.7rem;
  }

  .details-container li {
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
    font-size: 1.24rem;
    padding: 4px 0;
  }

  .lead-collection-form {
    background-color: #eff1f3;
    color: #25353c;
    padding: 20px;
    text-align: center;
  }

  .footer-form .lead-collection-form, .lead-collection-form {
    background-color: white;
  }

  .lead-form-request-info h3 {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.42rem;
    line-height: 2.25rem;
    font-weight: bold;
  }

  .lead-form-request-info p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .form-login-prompt {
    margin: 30px 0;
  }

  .form-login-prompt h4 {
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: normal;
  }

  .form-login-prompt a {
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }

  .form-login-prompt a:hover {
    text-decoration: none;
    background-color: rgba(238, 36, 60, 0.2);
  }

  .form-container h6 {
    font-size: 0.8rem;
  }

  .form-container svg {
    width: .85rem;
  }

  .foot-bg {
    background-color: #4c5960;
    color: #dee2e5;
    padding: 2rem 1rem 2.5rem;
    justify-content: space-between;
    text-align: center;
  }

  .foot-icons img {
    margin: 0 10px 15px 0;
    max-height: 60px;
    max-width: 110px;
  }

  a.foot-btn {
    color: #dee2e5;
    box-shadow: inset 0 -1px 0 #ee243c;
  }
</style>
