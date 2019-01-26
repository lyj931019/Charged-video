<template>
  <div style="padding-top: 4rem;">
<!--
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
                    <span class="footer-register" @click="register">{{$t('common.signUp')}}</span>
                  </div>
                </form>
                <h6>
                  <i>
                    <svg class="svg-inline--fa fa-lock fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="lock"
                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor"
                            d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                    </svg>
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
-->

    <!--<div class="footer-main">-->
      <!--<div class="row">-->
        <!--<div class="col-12 col-sm-12 col-lg-6 footer-main-left">-->
          <!--<div class="footer-block-inner">-->
            <!--<h3>-->
              <!--Berklee Online-->
              <!--<div class="footer-head-icons">-->
                <!--<a href="#">-->
                  <!--<svg class="svg-inline&#45;&#45;fa fa-facebook fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>&lt;!&ndash; <span class="fab fa-facebook"></span> &ndash;&gt;-->
                <!--</a>-->
                <!--<a href="#">-->
                  <!--<svg class="svg-inline&#45;&#45;fa fa-twitter fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>&lt;!&ndash; <span class="fab fa-twitter"></span> &ndash;&gt;-->
                <!--</a>-->
                <!--<a href="#" >-->
                  <!--<svg class="svg-inline&#45;&#45;fa fa-youtube fa-w-18" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>&lt;!&ndash; <span class="fab fa-youtube"></span> &ndash;&gt;-->
                <!--</a>-->
                <!--<a href="#">-->
                  <!--<svg class="svg-inline&#45;&#45;fa fa-instagram fa-w-14" aria-hidden="true" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>&lt;!&ndash; <span class="fab fa-instagram"></span> &ndash;&gt;-->
                <!--</a>-->
                <!--<a class="magazine" href="#" >-->
                  <!--Magazine-->
                <!--</a>-->
              <!--</div>-->
            <!--</h3>-->
            <!--<p class="footer-brief">-->
              <!--Berklee Online is <a href="#"  style="color: #eff1f3">Berklee College of Music's</a> online extension school. With world renowned faculty and unparalleled networking opportunities, Berklee Online brings the best of Berklee to students around the world.-->
              <!--<br>-->
              <!--<br>-->
              <!--‐ Visit Berklee:-->
              <!--<a href="#" style="color: #eff1f3;" >-->
                <!--www.berklee.edu-->
              <!--</a>-->
              <!--<br>-->
              <!--‐ Berklee Events:-->
              <!--<a href="#" style=" color: #eff1f3;">-->
                <!--www.berklee.edu/events-->
              <!--</a>-->
            <!--</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-12 col-sm-12 col-lg-5 offset-lg-1 footer-main-right">-->
          <!--<div class="footer-block-inner">-->
            <!--<h4>-->
              <!--All Programs-->
            <!--</h4>-->
            <!--<ul>-->
              <!--<li><a href="#" itemprop="url">All Online Music Degree Programs</a></li>-->
              <!--<li><a href="#" itemprop="url">All Online Music Certificates</a></li>-->
              <!--<li><a href="#" itemprop="url">All Online Music Courses</a></li>-->
              <!--<li><a href="#">Compare Our Music Education Offerings</a></li>-->
            <!--</ul>-->
            <!--<h4 class="hidden-md-up">-->
              <!--Music Degree Programs-->
            <!--</h4>-->
            <!--<ul class="hidden-md-up">-->
              <!--<li><a href="#" itemprop="url">Choose Your Major</a></li>-->
              <!--<li>-->
                <!--<a href="#" itemprop="url">Admissions Requirements</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#" itemprop="url">Tuition and Financial Aid</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#">Academic Calendar</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#">Internships</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#">Prior Learning Credit</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#">Transfer Credits</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#">Degree Completion</a>-->
              <!--</li>-->
              <!--<li>-->
                <!--<a href="#">Policies and Forms</a>-->
              <!--</li>-->
            <!--</ul>-->
            <!--<h4>-->
              <!--About <span class="hidden-tablet hidden-sm-down">Berklee Online</span>-->
            <!--</h4>-->
            <!--<ul>-->
              <!--<li><a href="#" itemprop="url">About Berklee Online</a></li>-->
              <!--<li><a href="#">Compare Our Music Education Offerings</a></li>-->
              <!--<li><a href="#">Events</a></li>-->
              <!--<li><a href="#">Faculty Directory</a></li>-->
              <!--<li><a href="#">Leadership Team</a></li>-->
              <!--<li><a href="#">Student Stories</a></li>-->
              <!--<li><a href="#">Music Scholarships</a></li>-->
              <!--<li><a href="#" itemprop="url">Contact/Help</a></li>-->
              <!--<li><a href="#">Careers at Berklee Online</a></li>-->
            <!--</ul>-->
            <!--<h4>-->
              <!--Resources-->
            <!--</h4>-->
            <!--<ul>-->
              <!--<li><a href="#">Deals for Students</a></li>-->
              <!--<li><a href="#" itemprop="url">Military Benefits</a></li>-->
              <!--<li><a href="#" itemprop="url">Mentorship Program</a></li>-->
              <!--<li><a href="#">Download Berklee Online's Exclusive Handbooks</a></li>-->
              <!--<li><a href="#" >Read Take Note Magazine</a></li>-->
            <!--</ul>-->
            <!--<h4 class="work">Work With Us!</h4>-->
            <!--<a href="#">BE A PART OF THE LARGEST ONLINE MUSIC SCHOOL<br>Check Out Open Positions at Berklee Online</a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="foot-bg">
      <div class="container-fluid mb-2">
        <div class="row footer__link" STYLE="font-size: 0.8rem;">
          <div class="footer__link--logo">
            <img :src="'./static/img/logo.jpg'"/>
          </div>
          <router-link to="/about/AboutUs">
            {{$t('about.aboutUs')}}
          </router-link>
          <router-link to="/about/TermsOfUse">
            {{$t('about.termsOfUse')}}
          </router-link>
          <router-link to="/about/Privacy">
            {{$t('about.privacy')}}
          </router-link>
          <router-link to="/about/Support">
            {{$t('about.support')}}
          </router-link>
          <router-link to="/methods">
            {{$t('about.methods')}}
          </router-link>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 center text-center">
            © Copyright 2001 - 2018
            <a href="#" class="foot-btn">Berklee College of Music</a>
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
<style lang="scss" scoped>
  .footer-main{
    color: #dee2e5;
    background-color: #0e1416;
  }
  .footer-main-left{
    background-color: #0e1416;
  }
  .footer-main .footer-block-inner {
    padding: 40px;
  }
  .footer-main h3{
    border-bottom: 1px solid #4c5960;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 1.8rem;
    padding: 0 0 20px 0;
    margin: 0 0 20px 0;
    font-weight: bold;
  }

  .footer-head-icons {
    float: right;
  }
  @media (max-width: 496px) {
    .footer-head-icons {
      float: none;
    }

  }
  .footer-main a {
    color: #a6b0b8;
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
  }
  .footer-main a svg{
    width: 26px;
    height: 26px;
  }
  .footer-head-icons .magazine {
    /*padding: 2px 4px;*/
    font-size: 20px;
    border-radius: 4px;
    display: inline-block;
    margin-top: -2px;
  }
  @media (max-width: 1200px){
    .footer-head-icons .magazine {
      font-size: 17px;
    }
    .footer-main h3 {
      font-size: 1.6rem;
    }
  }
  .footer-brief {
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
    font-size: 1.35rem;
    line-height: 1.95rem;
    margin-bottom: 50px;
    font-weight: 200;
  }
  .footer-main-right{
    background: #25353C;
  }

  .footer-main h4{
    color: #dee2e5;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    line-height: 1.88rem;
    font-weight: bold;
  }
  .footer-main h4:not(:first-child) {
    margin-top: 30px;
  }
  .footer-main .work {
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px solid #999;
    padding-top: 30px;
  }
  .footer-main ul {
    padding-left: 0px;
    padding-bottom: 1px;
    list-style: none;
  }
  .footer-main li {
    list-style-type: none;
    line-height: 130%;
    transition: all 0.3s ease;
  }
  .footer-main li a {
    display: block;
    padding: 8px 0;
    font-size: 1rem;
    font-weight: 200;
  }
  .footer-main-right a:hover{
    color: #ffffff;
  }
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
    padding: 1rem 1rem 1rem;
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
  .footer-register{
    background: #ee243c;
    padding: 10px 20px;
    margin-right: 10px;
    color: #ffffff;
    border:none;
  }
  .footer__link{
    display: flex;
    a{
      color: #fff;
      flex: 1;
      text-align: left;
      line-height: 20px;
      padding: 20px;
    }
    &--logo{
      width: 190px;
      height: 60px;
      margin-right: 20px;
      flex: none;
      img{
        width: 190px;
        height: 60px;
      }
    }
  }
</style>
