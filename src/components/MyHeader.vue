<template>
  <div class="scroll">
    <header id="masthead">
      <nav id="mast-simple" class="navbar navbar-expand-lg fixed-top navbar-light bg-white ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="{ name: 'index'}"><a class="navbar-brand" href="#"><img
          src="../assets/img/berklee-online-logo-red-gray.png" alt=""></a></router-link>

        <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul class="navbar-nav center justify-content-center mask">
            <li class="nav-item">
              <a href="#">
                <span>
                  {{$t('header.allPrograms')}}
                </span>
                <span class="line"></span>
                <div class="header-down sub-nav">
                  <ul class="sub-nav-group two-col no-margin">
                    <li class="header">
                      <h4>
                        Degrees, Certificates, and Courses by Interest
                      </h4>
                    </li>
                    <li>
                      <a href="#" itemprop="url">Music Production</a>
                    </li>
                    <li>
                      <a href="#" itemprop="url">Guitar</a>
                    </li>
                    <li>
                      <a href="#">Music Theory, Harmony, and Ear Training</a>
                    </li>
                    <li>
                      <a href="#" itemprop="url">Songwriting</a>
                    </li>
                    <li>
                      <a href="#" itemprop="url">Music Business</a>
                    </li>
                    <li>
                      <a href="#">Voice</a>
                    </li>
                    <li>
                      <a href="#">Piano and Keyboard</a>
                    </li>
                    <li>
                      <a href="#">Arranging</a>
                    </li>
                    <li>
                      <a href="#">Bass</a>
                    </li>
                    <li>
                      <a href="#">Orchestration</a>
                    </li>
                    <li>
                      <a href="#">Drums</a>
                    </li>
                    <li>
                      <a href="#">Music History and Liberal Arts</a>
                    </li>
                    <li>
                      <a href="#" itemprop="url">Music for Film, TV, and Games</a>
                    </li>
                    <li>
                      <a href="#">Improvisation</a>
                    </li>

                    <li class="footer">
                      <a href="#">
                        Compare Our Offerings
                      </a>
                    </li>
                  </ul>
                </div>
              </a>

            </li>
            <li class="nav-item">
              <a href="#">
                <span>
                  {{$t('header.degrees')}}
                </span>
                <span class="line"></span>
                <div class="header-down sub-nav">
                  <ul class="sub-nav-group">
                    <li>
                      <h4>
                        Undergraduate Degree Program
                        <span>
<a href="/apply" target="_blank">Apply</a> for Jan 14 Term Start&nbsp;•&nbsp;Get a decision within 2 weeks
</span>
                      </h4>
                    </li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Music Production</a></li>
                    <li><a href="#">Guitar</a></li>
                    <li><a href="#">Music Business</a></li>
                    <li><a href="#">Songwriting</a></li>
                    <li><a href="#">Interdisciplinary Music Studies (Create Your Own Major)</a>
                    </li>
                    <li><a href="#">Songwriting and Producing Music</a>
                    </li>
                    <li><a href="#">Electronic Music Production and Sound Design</a>
                    </li>
                    <li><a href="#">Music Composition for Film, TV, and Games</a>
                    </li>
                    <li><a href="#">Undeclared Option</a></li>
                  </ul>
                  <ul class="sub-nav-group">
                    <li>
                      <h4>
                        Graduate Degree Programs
                        <span>
<a href="#" target="_blank">Apply</a> for Jan 14 Term Start&nbsp;•&nbsp;Get a decision within 2 weeks
</span>
                      </h4>
                    </li>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Music Production</a></li>
                    <li><a href="#">Music Business</a></li>
                  </ul>
                  <div class="absolute-drop-footer">
                    <a href="#" itemprop="url">
                      Degree Overview
                    </a>
                  </div>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <span>
                  {{$t('header.certificates')}}
                </span>
                <span class="line"></span>
                <div class="header-down sub-nav">
                  <ul class="sub-nav-group certificates">
                    <li>
                      <a href="#" itemprop="url">All Certificates</a>
                    </li>
                    <li>
                      <a href="#">
                        Certificate Payment Options
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tuition and Fees for Certificates
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Academic Calendar
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Scholarships
                      </a>
                    </li>
                  </ul>
                  <ul class="sub-nav-group">
                    <li>
                      <div class="drop-info">
                        <h3>No application required</h3>
                        <h5>to enroll in a certificate.</h5>
                        <hr role="separator">
                        <div class="cert-course-dates">
                          <i>
                            <svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg><!-- <div class="far fa-clock"></div> -->
                          </i>
                          <a href="#" target="blank">
                            Next Term Starts January 14
                          </a>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>

            <li class="nav-item">
              <a href="#">
                <span>
                  {{$t('header.admissions')}}
                </span>
                <span class="line"></span>
                <div class="header-down sub-nav san">
                  <ul class="sub-nav-group">
                    <li>
                      <h4>
                        Undergraduate Admissions
                      </h4>
                    </li><li><a href="#">  Admissions Requirements</a></li><li><a href="#">  Tuition &amp; Financial Aid</a></li><li><a href="#">  Scholarships</a></li><li><a href="#">  Program Internships</a></li><li><a href="#">  Academic Calendar</a></li><li><a href="#">Degree Completion</a></li><li><a href="#"> Prior Learning Credit</a></li><li><a href="#">  Transfer Credits</a></li><li><a href="#">  Program Policies and Forms</a></li><li><a href="#">  Program FAQs</a></li>

                  </ul>
                  <ul class="sub-nav-group">
                    <li>
                      <h4>Graduate Admissions</h4>
                    </li><li><a href="#">  Admissions Requirements</a></li><li><a href="#">  Tuition &amp; Financial Aid</a></li><li><a href="#">  Academic Calendar</a></li><li><a href="#">  Transfer Credits</a></li><li><a href="#">  Program Policies and Forms</a></li>

                  </ul>
                  <ul class="sub-nav-group">
                    <li>
                      <h4>Military Benefits</h4>
                    </li>
                    <li>
                      <a href="#" itemprop="url">
                        Overview of Benefits
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Veterans
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Active Duty
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Spouses and Families
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Additional Info
                      </a>
                    </li>
                    <li class="degree-extras">
                      <div class="drop-info">
                        <h6>Degree Programs</h6>
                        <h3>
                          <a href="#">Apply</a> for Jan 14 Term Start
                        </h3>
                        <span>
Get a decision within 2 weeks</span>

                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <router-link style="color: rgba(0, 0, 0, 0.71);" :to="{ name: 'list'}" >
                  {{$t('header.courses')}}
                </router-link>
                <span class="line"></span>
                <div class="header-down sub-nav">
                  <ul class="sub-nav-group courses">
                    <li>
                      <router-link  :to="{ name: 'list'}" itemprop="url">All Courses</router-link>
                    </li>
                    <template v-if="sortList && sortList.length>0">
                      <li v-for="(type_item,index) in sortList">
                        <router-link  :to="{ name: 'list'}" itemprop="url">
                          {{type_item.name}}
                        </router-link>
                      </li>
                    </template>

                    <!--<li>-->
                      <!--<a href="#">-->
                        <!--Course Payment Options-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="#">-->
                        <!--Tuition and Fees for Courses-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="#">-->
                        <!--Academic Calendar-->
                      <!--</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="#">-->
                        <!--Scholarships-->
                      <!--</a>-->
                    <!--</li>-->
                  </ul>
                  <ul class="sub-nav-group">
                    <li>
                      <div class="drop-info">
                        <h3>No application required</h3>
                        <h5>to enroll in a course.</h5>
                        <hr role="separator">
                        <div class="cert-course-dates">
                          <i>
                            <svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg><!-- <div class="far fa-clock"></div> -->
                          </i>
                          <a href="#" target="blank">
                            Next Term Starts January 14
                          </a>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <router-link style="color: rgba(0, 0, 0, 0.71);" :to="{ name: 'about',params:{item:'AboutUs'}}" >
                  {{$t('about.aboutUs')}}
                </router-link>
                <span class="line"></span>
                <div class="header-down sub-nav">
                  <ul class="sub-nav-group">
                    <li>
                      <div class="drop-info" style="font-size: 0.9rem;
    font-weight: normal;">
                        Need Guidance?<br>
                        <h3 style="font-size: 1.2rem;">1-866-BERKLEE</h3>
                        <h5 style="font-size: 0.8rem;">Int'l +1-617-747-2146</h5>
                        <h5 style="margin-bottom: 2px;">
                          <a href="#" style="font-weight: bold;text-transform: initial;">
                            advisors@online.berklee.edu
                          </a>
                        </h5>
                        <hr role="separator" style="margin: 5px 0 5px 0;">
                        <div class="cert-course-dates">
                          <i>
                            <svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg><!-- <div class="far fa-clock"></div> -->
                          </i>
                          <a href="#" target="blank">
                            Next Term Starts January 14
                          </a>
                        </div>

                      </div>
                    </li>
                  </ul>
                  <ul class="sub-nav-group">
                    <li>
                      <router-link :to="{ name: 'about',params:{item:'AboutUs'}}">{{$t('about.aboutUs')}}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'about',params:{item:'CompanyProfile'}}">{{$t('about.companyProfile')}}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'about',params:{item:'Tutorial'}}">{{$t('about.learningTutorial')}}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'about',params:{item:'UserAgreement'}}">{{$t('about.userAgreement')}}</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'about',params:{item:'PaymentAgreement'}}">{{$t('about.paymentAgreement')}}</router-link>
                    </li>
                    <!--<li>-->
                      <!--<a href="#" style="white-space: nowrap;">School Info, Enrollment, and Policies</a>-->
                    <!--</li>-->
                    <!--<li>-->
                      <!--<a href="#" class="">Careers</a>-->
                    <!--</li>-->
                    <li class="drop-footer">
                      <a href="#" itemprop="url" class="">
                        <i>
                          <svg class="svg-inline--fa fa-phone fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.397 24.615l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-35.973 76.675-98.938 140.508-177.249 177.248l-49.596-60.616a24 24 0 0 0-28.029-6.862l-111.997 48C3.873 366.516-1.994 378.08.618 389.397l23.997 104C27.109 504.204 36.748 512 48 512c256.087 0 464-207.532 464-464 0-11.176-7.714-20.873-18.603-23.385z"></path></svg><!-- <div class="fa fa-phone"></div> -->
                        </i>
                        {{$t('header.contact')}}
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
            <li class="nav-item lang">
              <span :class="{active:locale == 'en'}" @click="changeLang('en')">
                <span class="lang-btn" :class="{active:locale == 'en'}">En</span>
              </span>
              <i>/</i>
              <span :class="{active:locale == 'zh'}" @click="changeLang('zh')">
              <span class="lang-btn" :class="{active:locale == 'zh'}">中文</span>
            </span>
            </li>
            <li class="nav-item">
              <a href="#">
                <i class="search">
                  <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="search"
                       role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg><!-- <div class="fa fa-search"></div> -->
                </i>
              </a>
            </li>
            <li id="mask"></li>
            <!--<li class="nav-item">-->
            <!--<div class="lang nav-link">-->
            <!--<span :class="{active:locale == 'en'}" @click="changeLang('en')">-->
            <!--<span class="lang-btn" :class="{active:locale == 'en'}" >En</span>-->
            <!--</span>-->
            <!--<i>/</i>-->
            <!--<span :class="{active:locale == 'zh'}" @click="changeLang('zh')">-->
            <!--<span class="lang-btn" :class="{active:locale == 'zh'}">中文</span>-->
            <!--</span>-->
            <!--</div>-->

            <!--</li>-->


          </ul>
          <form class="form-inline my-2 my-lg-0 justify-content-center" style="margin:0 1.3rem">
            <router-link :to="{ name: 'login'}" v-if="!getIsLogin" class=" btn-apply" href="#" id="login">
              {{$t('header.login')}}
            </router-link>
            <router-link :to="{ name: 'register'}" v-if="!getIsLogin" class="btn-login ">
              {{$t('header.register')}}
            </router-link>
            <div v-if="getIsLogin" class="text-center">
              <a href="#" id="avatarDropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                 role="button">
                <Avatar :src="getUserInfo.user_avatar"/>
              </a>
              <br>
              <div class="dropdown-menu" style="float: right;right: 2px;left: auto" aria-labelledby="avatarDropDown">
                <router-link class="dropdown-item" href="#" :to="{ name: 'userCenter'}">
                  {{$t('header.userCenter')}}
                </router-link>
                <a class="dropdown-item" href="#" @click.prevent="loginOut">{{$t('header.logout')}}</a>
              </div>
            </div>
          </form>
        </div>

        <!--<div id="hover-header" class="d-none d-md-block">-->
          <!--<div class="lang">-->
            <!--<span :class="{active:locale == 'en'}" @click="changeLang('en')">-->
              <!--<span class="lang-btn" :class="{active:locale == 'en'}">En</span>-->
            <!--</span>-->
            <!--<i>/</i>-->
            <!--<span :class="{active:locale == 'zh'}" @click="changeLang('zh')">-->
            <!--<span class="lang-btn" :class="{active:locale == 'zh'}">中文</span>-->
            <!--</span>-->
          <!--</div>-->
        <!--</div>-->
      </nav>
    </header>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapMutations} from 'vuex'
  import Avatar from './avatar.vue'

  export default {
    name: 'MyHeader',
    components: {Avatar},
    data() {
      return {
        header: 'MyHeader',
        locale: '',
        lang: '',
        sortList:[]
      }
    },
    methods: {
      ...mapMutations([
        'changeLoginStatus', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        'changeUserInfo' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
      getSortList() {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/types',
          params: {
            page: 1,
            pageSize: 100
          }
        }).then(res => {
          _this.sortList = res.data.data.items;
        })
      },
      loginOut() {
        this.changeLoginStatus(false);
        let userInfo = {
          id: '',
          email: '',
          nickname: '',
          sex: '',
          avatar: '',
          phone: '',
          adderss: ''
        }
        this.changeUserInfo(userInfo);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('user_id');
      },
      changeLang(lang) {
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
    created(){
      this.getSortList()
    },
    mounted() {
      if (localStorage.getItem('locale') == 'en') {
        this.locale = 'en';
        this.lang = 'ENG';
      } else {
        this.locale = 'zh';
        this.lang = '中文';
      }
//      localStorage.setItem('lng', this.locale);

//      console.log(this.sortList);
    },
    watch: {
      locale(val) {
        this.$i18n.locale = val;
        localStorage.setItem('locale', val);
      }
    }
  }
</script>

<style scoped>
  /*#hover-header{*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*font-size: 12px;*/
    /*height: 12px;*/
    /*width: 100%;*/
  /*}*/
  .scroll{
    margin-bottom: 7rem;
  }
  @media (max-width: 992px) {
    .scroll{
      margin-bottom: 5rem;
    }
  }
  .scroll #mast-simple.navbar {
    box-shadow: 0 -5px 25px #222;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.25);
    padding: .38rem 34px;
  }

  #mast-simple.navbar {
    align-items: center;
    background: #FFF;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -60px;
    margin-right: -60px;
  }

  #mast-simple {
    position: fixed;
    top: 0;
    left: 60px;
    right: 60px;
    z-index: 1000;
  }

  #masthead {
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
    padding-left: 0.7rem;
    padding-right: 0.7rem;

  }

  #masthead .navbar .navbar-nav.center .nav-item > a {
    color: rgba(0, 0, 0, 0.71);
    position: relative;
    display: inline-block;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 0.75rem;
    line-height: 1.65rem;
    font-weight: bold;
    letter-spacing: .75px;
    transition: color .2s ease;
    padding-left: 0;
    padding-right: 0;
    text-transform: uppercase;
  }

  #masthead .navbar .form-inline {
    font-size: 0.9rem;
  }

  #masthead .btn-apply {
    background: #ee243c;
    color: #FFF;
    padding: 4px 10px;
    margin-right: 10px;
    transition: all ease .2s;
    font-size: 1rem;
    box-sizing: border-box;
    line-height: normal;
    border: 1px solid #ee243c;
  }

  #masthead .btn-login {
    border: 1px solid #888;
    padding: 4px 10px;
    font-size: 1rem;
    box-sizing: border-box;
    line-height: normal;
  }

  @media (min-width: 992px) and (max-width: 1160px) {


    #masthead .btn-apply, #masthead .btn-login {
      padding: 4px 8px;
      font-size: 0.9rem;
    }

    #mast-simple.navbar {
      margin-right: -100px;
      margin-left: -80px;
    }
  }
  @media (max-width: 1160px){
    #masthead .navbar-brand img {
      width: 140px;
      margin-right: 5px;
    }
  }
  @media (max-width: 991px){
    .scroll #mast-simple.navbar{
      padding: .38rem;
    }
  }
  @media (min-width: 1400px) {
    #masthead .btn-apply, #masthead .btn-login {
      padding: 7px 20px;
      font-size: 1rem;
    }
  }

  #masthead .navbar .form-inline .btn-login {
    color: rgba(0, 0, 0, 0.5);
  }

  .lang {
    /*position: absolute;*/
    font-weight: bold;
    /*right: 30px;*/
    top: 0;
    color: rgba(0, 0, 0, .7);
    font-size: .75rem;
  }

  .lang > span {
    cursor: pointer;
  }

  .lang > span:hover {
    /*background-color: #005cbf;*/
    color: #ee243c;
  }

  .lang > span.active {
    /*background-color: #005cbf;*/
    color: #ee243c;
  }

  .btn-apply {
    background: #ee243c;
    padding: 7px 20px;
    margin-right: 10px;
    transition: all ease .2s;
    color: #ffffff;
  }

  .nav-item a:hover {
    text-decoration: none;
  }

  .nav-item {
    position: relative;
    height: 100%;
    line-height: 66px;
  }

  .nav-item > a span:first-child {
    display: inline-block;
    margin-bottom: .3rem;
  }

  .nav-item > a {
    padding-bottom: 0.2rem;
  }

  .nav-item span.line {
    display: inline-block;
    width: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    left: auto;
    height: 3px;
    transition: width 0.2s linear;
    background-color: #666;
  }

  .nav-item:hover span.line {
    left: 0;
    right: auto;
    width: 100%;
    background-color: #ee243c;
  }

  .nav-item .header-down {
    display: none;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 66px;
    background-color: #fff;
    padding: 2rem;
    text-align: center;
  }

  .nav-item .header-down .container {
    max-width: 800px;
  }

  .nav-item .header-down .drop-info {
    -webkit-align-items: center;
    align-items: center;
    background: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.67);
    padding: 3rem 3rem 2.5rem 3rem;
    -webkit-justify-content: center;
    justify-content: center;
    text-align: center;
  }

  .nav-item .header-down .drop-info p {
    font-size: 1rem;
  }

  .sub-nav ul.courses {
    margin-left: 80px;
  }

  .sub-nav ul {
    display: inline-block;
    margin: 0 2em 0 0;
    padding: 0;
    vertical-align: top;
    margin-left: 95px;
    text-align: left;
  }

  .sub-nav ul li {
    display: block;
    line-height: 1.5;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .sub-nav ul li a {
    color: black;
    line-height: 2.2;
    list-style-type: none;
    margin: 0;
    padding: 4px 10px;
    text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group.two-col {
    max-width: 700px;
    margin: 0 auto;
    text-align: left;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group.no-margin {
    /*margin-right: 0;*/
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group h4 {
    border-bottom: 1px solid #999;
    display: block;
    padding: 5px 0 10px 0;
    margin-bottom: 7.5px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #000000;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group li a {
    display: block;
    padding-left: 0;
    font-weight: 200;
    font-size: 0.9rem;
    line-height: 1.6rem;
    color: #000000;
    text-transform: capitalize;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group li a:hover {
    text-decoration: underline;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group.two-col li:not(.header):not(.footer) {
    float: left;
    width: 50%;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group li.footer {
    border-top: 1px solid #dee2e5;
    clear: both;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    position: relative;
    bottom: -20px;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group li.footer a {
    border: 1px solid #2f434c;
    color: black;
    display: inline-block;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    padding: 3px 15px;
    -webkit-appearance: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    text-shadow: none;
  }

  #mast-simple.navbar .navbar-nav .sub-nav-group li.footer a:hover {
    background: #4c5960;
    color: #eff1f3;
    transition: all 0.15s cubic-bezier(0.35, 0, 0.35, 1);
    text-decoration: none;
  }
  #mast-simple.navbar .navbar-nav .sub-nav-group h4 span {
    display: block;
    font-size: 0.8rem;
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
    margin-top: -2px;
    font-weight: normal;
  }
  #mast-simple.navbar .navbar-nav .sub-nav-group h4 span a {
    display: inline;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    padding: 0;
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    font-weight: bold;
  }
  #mast-simple.navbar .navbar-nav .sub-nav-group h4 span a:hover {
    text-decoration: none;
    background-color: rgba(238,36,60,0.2);
  }

  .sub-nav .absolute-drop-footer {
    border-top: 1px solid #dee2e5;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-left: 125px;
    text-align: center;
    width: 750px;
    z-index: 1001;
  }
  .sub-nav .absolute-drop-footer a {
    border: 1px solid #2f434c;
    color: black;
    display: inline-block;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    padding: 3px 15px;
    -webkit-appearance: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    text-shadow: none;
  }
  .sub-nav .absolute-drop-footer a:hover {
    background: #4c5960;
    color: #eff1f3;
    transition: all 0.15s cubic-bezier(0.35, 0, 0.35, 1);
    text-decoration: none;
  }
  @media (min-width: 992px) and (max-width: 1260px){
    .sub-nav ul{
      width: 350px;
      margin-left: 30px;
    }

  }


  .nav-item .header-down .drop-info{
    -webkit-align-items: center;
    align-items: center;
    background: none;
    box-shadow: 0 0 3px rgba(0,0,0,0.6);
    box-sizing: border-box;
    color: rgba(0,0,0,0.67);
    padding: 36px 36px 30px 36px;
    -webkit-justify-content: center;
    justify-content: center;
    text-align: left;
  }
  .drop-info h3{
    font-size: 1rem;
    font-weight: bold;
  }
  .drop-info h5{
    font-size: .75rem;
    font-weight: bold;
  }
  .drop-info hr {
    margin: 15px 0 5px 0;
  }
  .cert-course-dates{

  }
  .cert-course-dates i{
    display: inline-block;
    vertical-align: middle;
    height: 1rem;
    line-height:1rem;
    margin-top: -4px;
  }
  .cert-course-dates i svg{
    width: 1rem;
  }
  #mast-simple.navbar .navbar-nav .sub-nav-group .drop-info .cert-course-dates a {
    display: inline;
    padding-left: 0;
  }
  .nav-item .header-down  .degree-extras .drop-info {
    margin: 20px 0;
    padding: 24px;
  }
  .nav-item .header-down .degree-extras .drop-info h6 {
    text-transform: uppercase;
    font-size: 12px;
  }
  .nav-item .header-down .degree-extras .drop-info h3{
    font-weight: bold;
    font-size: 1rem;
  }
  #mast-simple.navbar  .degree-extras .drop-info h3 a {
    display: inline !important;
    text-shadow: none;
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    padding: 0;
    font-size: 1rem;
    font-weight: bold;
  }
  @media (min-width: 992px) and (max-width: 1260px){
    .san.sub-nav ul{
      width: 280px;
      margin-left: 0px;
    }
    .nav-item .header-down .degree-extras .drop-info {
      margin: 20px 0;
      padding: 16px;
    }

  }
  .sub-nav ul li.drop-footer {
    clear: both;
    border-top: 1px solid #dee2e5;
    margin-top: 10px;
    padding-top: 10px;
  }
  .drop-footer i{
    display: inline-block;
    vertical-align: middle;
    height: 1rem;
    line-height:1rem;
    margin-top: -4px;
    transform: rotate(90deg);
  }
  .drop-footer i svg{
    width: 1rem;
  }
  .search{
    display: inline-block;
    vertical-align: middle;
    margin-top: -8px;
  }
  .search svg{
    width: 0.75rem;
  }

  #mask{
    display: none;
    background-color: rgba(0,0,0,.4);
    position: fixed;
    top: 650px;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  @media (min-width: 992px) {
    .nav-item:hover .header-down {
      display: block;
    }
    #mast-simple .navbar-nav {
      height: 66px;
    }
    .nav-item:hover~#mask{
      display: block;
    }
    #mask{
      top: 78px;
    }
  }

</style>
