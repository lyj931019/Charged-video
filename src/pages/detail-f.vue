<template>
  <div>
    <MyHeader/>
    <div class="body" v-if="courses">
      <div class="bg" id="abs">
        <div class="container-fluid">
          <h5 class="online-course">
            <a href="#">{{$t('detail.onlineCourse')}}</a>
          </h5>
          <div class="row">

            <div class="col-12 col-lg-9 course-intr">
              <h1 class="title">{{courses.name}}</h1>
              <div class="course-author">
                <Avatar :src="courses.instructor.avatar"/>
                <span>
                  {{$t('detail.author')}}:
                  <a class="a-body-link" href="#">{{courses.instructor.name}}</a>
                </span>
                <i>|</i>
                <span>
                  {{$t('detail.courseNum')}}:{{courses.num}}
                </span>
              </div>
              <div class="row mt-5">
                <div class="col-12 col-lg-4 order-1 order-lg-2">
                  <div class="course-info">
                    <div class="course-date">
                      <i>
                        <svg class="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" data-prefix="far"
                             data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512"
                             data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                        </svg><!-- <div class="far fa-calendar-alt"></div> -->
                      </i>
                      <span>2019/1/14</span>

                    </div>
                    <div class="course-level">
                      <Level :level="courses.level"/>
                      <span>Level {{courses.level}}</span>
                    </div>
                    <div class="course-price">
                      <p>{{$t('detail.coursePrice')}}</p>
                      <p>¥{{courses.price}}</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8 order-lg-1 order-2" v-html="courses.abstract">

                </div>

              </div>
            </div>
            <div class="col-12 col-lg-3 d-none d-lg-block">
              <div class="side-nav">
                <div class="side-nav-main">
                  <div class="nav-scroll" :class="{active:windowScrollTop<lessonH}" @click="gotoSection(absH)">{{$t('detail.overview')}}</div>
                  <div class="nav-scroll" :class="{active:windowScrollTop>=lessonH && windowScrollTop<requireH}" @click="gotoSection(lessonH+1)">{{$t('detail.syllabus')}}</div>
                  <div class="nav-scroll" :class="{active:windowScrollTop>=requireH && windowScrollTop<authorH}" @click="gotoSection(requireH+1)">{{$t('detail.learningRequirements')}}</div>
                  <div class="nav-scroll" :class="{active:windowScrollTop>authorH}" @click="gotoSection(authorH+1)">{{$t('detail.teacherProfile')}}</div>
                  <div class="buy" @click="buyCourse">{{$t('detail.buyCourse')}}</div>
                  <div class="collection" >
                    <span @click="tryCourse">{{$t('detail.tryCourse')}}</span>
                    <span @click="favoritesCourse">{{$t('detail.favoritesCourse')}}</span>
                  </div>
                  <div class="phone">
                    <p>{{$t('common.supportHotline')}}</p>
                    <h4>400-882-3823</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="lesson" id="lesson">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-9" v-if="courses">
              <h2>{{$t('detail.syllabus')}}</h2>
              <template v-for="(lesson,index) in courses.lessons">
                <p class="lesson-title">
                  <a href="#" @click.prevent="showLessonContent(index)">
                    <DownArrow :active="lessonActive[index]"/>
                    <span>
                      Lesson {{lesson.lesson}}
                    </span>
                    <strong>{{lesson.title}}&nbsp;</strong>
                  </a>
                </p>
                <div class="lesson-content" :class="{active:lessonActive[index]}">
                  <div v-html="lesson.abstract"></div>
                </div>

              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="bg requirements" id="require">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-9">
              <h2>{{$t('detail.learningRequirements')}}</h2>
              <div>
                <p class="lesson-title">
                  <a href="#" @click.prevent="showPrerequisites">
                    <DownArrow :active="prerequisites"/>
                    <strong>{{$t('detail.prerequisites')}}</strong>
                  </a>
                </p>
                <div class="lesson-content" :class="{active:prerequisites}">
                  <template v-if="courses.requirements_prerequisites">
                    <div v-html="courses.requirements_prerequisites"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>
              </div>
              <div>
                <p class="lesson-title">
                  <a href="#" @click.prevent="showTextbooks">
                    <DownArrow :active="textbooks"/>
                    <strong>{{$t('detail.textbooks')}}</strong>
                  </a>
                </p>
                <div class="lesson-content" :class="{active:textbooks}">
                  <template v-if="courses.requirements_textbooks">
                    <div v-html="courses.requirements_textbooks"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>

              </div>
              <div>
                <p class="lesson-title">
                  <a href="#" @click.prevent="showSoftware">
                    <DownArrow :active="software"/>
                    <strong>{{$t('detail.software')}}</strong>
                  </a>
                </p>
                <div class="lesson-content" :class="{active:software}">
                  <template v-if="courses.requirements_software">
                    <div v-html="courses.requirements_software"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>

              </div>
              <div>
                <p class="lesson-title">
                  <a href="#" @click.prevent="showHardware">
                    <DownArrow :active="hardware"/>
                    <strong>{{$t('detail.hardware')}}</strong>
                  </a>
                </p>
                <div class="lesson-content" :class="{active:hardware}">
                  <template v-if="courses.requirements_hardware">
                    <div v-html="courses.requirements_hardware"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="author" id="author">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-9" v-if="courses">
              <h2>{{$t('detail.teacherProfile')}}</h2>
              <div class="author-content">
                <div>
                  <Avatar :src="courses.instructor.avatar"/>
                </div>
                <div>
                  <h5 class="author-name">
                    <span>{{courses.instructor.name}}</span>
                  </h5>
                  <p>{{$t('detail.author')}} &amp; {{$t('detail.lecturer')}}</p>
                  <div v-html="courses.instructor.abstract"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

    <MyFooter/>
    <div class="d-block d-lg-none course-footer">
      <a href="#" class="box">{{$t('header.userCenter')}}</a>
      <a href="#" class="box">{{$t('detail.tryCourse')}}</a>
      <a href="#" class="box">{{$t('detail.favoritesCourse')}}</a>
      <a href="#" class="box">{{$t('detail.buyCourse')}}</a>
    </div>
    <div class="courser-footer-margin d-block d-lg-none">

    </div>
  </div>
</template>

<script>
  import Common from '../components/common'
  import Level from '../components/level.vue'
  import Avatar from '../components/avatar.vue'
  import DownArrow from '../components/down-arrow.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'detailF',
    components: {...Common,Level,Avatar,DownArrow},
    data() {
      return {
        courses: null,
        lessonActive: [],
        prerequisites: false,
        textbooks: false,
        software: false,
        hardware: false,
        absH:0,
        lessonH:0,
        requireH:0,
        authorH:0,
        windowScrollTop:0,
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'getIsLogin',
        'getUserInfo'
      ])
    },
    methods: {
      showLessonContent(index) {
        let newValue = !this.lessonActive[index]
        this.lessonActive.splice(index, 1, newValue);
      },
      showPrerequisites() {
        this.prerequisites = !this.prerequisites;
      },
      showTextbooks() {
        this.textbooks = !this.textbooks;
      },
      showSoftware() {
        this.software = !this.software;
      },
      showHardware() {
        this.hardware = !this.hardware;
      },
      buyCourse(){
        if(this.getIsLogin){
          let _this = this;
          this.$http({
            method: 'post',
            url: '/users/courses/',
            params:{
              user_id:_this.getUserInfo.user_id,
              course_id:_this.courses.id
            }
          }).then(res => {
            console.log(res.data)
            _this.$router.push({ name: 'userCenter'})
            console.log(_this.courses)
          })
        }else{
          this.gotoLogin();
        }
      },
      tryCourse(){
        if(this.getIsLogin){
          let _this = this;
          this.$http({
            method: 'post',
            url: '/users/courses/',
            params:{
              user_id:_this.getUserInfo.user_id,
              course_id:_this.courses.id
            }
          }).then(res => {
            console.log(res.data)
            _this.$router.push({ name: 'userCenter'})
            console.log(_this.courses)
          })
        }else{
          this.gotoLogin();
        }
      },
      favoritesCourse(){
        if(this.getIsLogin){
          let _this = this;
          this.$http({
            method: 'post',
            url: '/users/favorites/',
            params:{
              user_id:_this.getUserInfo.user_id,
              course_id:_this.courses.id
            }
          }).then(res => {
            console.log(res.data)
            _this.$router.push({ name: 'userCenter'})
            console.log(_this.courses)
          })
        }else{
          this.gotoLogin();
        }
      },
      gotoLogin(){
        this.$router.push({ name: 'login'})
      },
      gotoSection(top){
//        console.log('top'+top)
        let _this = this;
//        console.log( _this.windowScrollTop);
//        console.log(top)
        $('html,body').animate({
          scrollTop: top
        }, 500);
      }
    },
    beforeMount() {
      let num = this.$route.params.num;
      let _this = this;
      this.$http({
        method: 'get',
        url: '/courses/' + num,
      }).then(res => {
        console.log(res.data.data)
        for (let obj of res.data.data.lessons) {
          _this.lessonActive.push(false);
        }
        _this.courses = res.data.data;
      })
    },
    updated(){
      let _this = this;
      _this.absH = parseInt($('#abs').offset().top)-(270-27.5);
      _this.lessonH = parseInt($('#lesson').offset().top)-(270-27.5+55);
      _this.requireH = parseInt($('#require').offset().top)-(270-27.5+55*2);
      _this.authorH = parseInt($('#author').offset().top)-(270-27.5+55*3);


      window.onscroll = function () {
//        _this.windowScrollTop = document.documentElement.scrollTop || document.body.scrollTop
        _this.windowScrollTop = parseInt($(window).scrollTop());
      }
    },
    destroyed(){
      window.onscroll = function () {}
    }
  }
</script>

<style scoped>
  .bg {
    background-color: #eff1f3;
    padding-top: 75px;
    padding-bottom: 60px;
  }

  .online-course a {
    color: #25353c;
    font-weight: bold;
    text-decoration: underline;
    line-height: 2.50rem;
  }

  .course-intr .title {
    font-weight: 700;
    font-size: 3.0rem;
  }

  .course-author {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .course-author span {
    margin: 1rem;
  }

  .course-author span a {
    color: #25353c;
    box-shadow: inset 0 -1px 0 #ee243c;
  }

  .course-author span a:hover {
    text-decoration: none;
  }

  .course-author i {
    display: inline-block;
    color: #7b8b96;
  }

  .course-info {
    border-left: 1px solid #7b8b96;
    padding-left: 30px;
  }

  .course-info > div {
    margin-bottom: 3rem;
  }

  .course-date {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .course-date i {
    width: 2rem;
    display: inline-block;
  }

  .course-date span {
    font-weight: 400;
    font-size: 1.1rem;
    margin-left: 0.7rem;
  }

  .course-level span {
    font-size: 1.1rem;
    font-weight: 400;
    margin-left: 0.7rem;
  }

  .course-price p {
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  .lesson, .author {
    padding-top: 75px;
    padding-bottom: 60px;
  }

  .lesson h2, .requirements h2,.author h2 {
    margin-bottom: 2rem;
  }

  .lesson-title {
    font-size: 1.2rem;
    border-bottom: 1px solid #dee2e5;
    padding: 1rem 0;
    line-height: 2.5rem;
  }

  .lesson-title a {
    color: #25353c;
  }

  .lesson-title a:hover {
    text-decoration: none;
  }

  .lesson-title a span, .requirements strong {
    margin: 0 2rem 0 1rem;
  }

  .lesson-content {
    height: 0;
    display: block;
    overflow: hidden;
    transition: all 30s linear;
  }

  .lesson-content.active {
    height: auto;
    min-height: 30px;
  }

  .lesson-content {
    margin-left: 152px;
  }

  @media (max-width: 768px) {
    .lesson-content {
      margin-left: 45px;
    }

  }

  .author-content{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .author-content>div{
    padding: 2rem;
  }
  .author-name{
    font-weight: 600;
  }
  .author-name>span{
    box-shadow: inset 0 -1px 0 #ee243c;
  }
  .author-content{
    font-size: 1rem;
  }

  .side-nav{
    position: fixed;
    top: 270px;
    width: 320px;
    /*background-color: #fff;*/
    -webkit-box-shadow: 0.7em 0.7em 2em rgba(0, 0, 0, 0.45);
    box-shadow: 0.7em 0.7em 2em rgba(0, 0, 0, 0.45);
    z-index: 100;
    display: block;
  }
  @media (max-width: 1550px) {
    .side-nav{
      width: 240px;
    }
  }
  @media (min-width: 1550px) {
    /*.side-nav{*/
    /*display: none;*/
    /*}*/
  }
  .side-nav-main {
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .side-nav-main .nav-scroll.active {
    background-color: #7ea0af;
    color: white;
  }
  .side-nav-main .nav-scroll {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.2rem;
    letter-spacing: .5px;
    padding: 10px 15px;
    cursor: pointer;
  }
  .side-nav-main .nav-scroll.active:before {
    content: "";
    position: absolute;
    right: 100%;
    width: 0;
    height: 0;
    margin-top: -10px;
    border-top: calc(.875rem + 12px) solid transparent;
    border-bottom: calc(.875rem + 12px) solid transparent;
    border-right: 1.7rem solid #7ea0af;
  }
  .buy{
    font-size: 1.16rem;
    line-height: 1.5rem;
    border: 3px solid #ee243c;
    padding: 7px;
    color: #ee243c;
    margin: 1rem;
    text-align: center;
  }
  .collection{
    margin: 1rem;
    font-size: 1.16rem;
    line-height: 1.5rem;
    text-align: center;

    font-weight: 400;
  }
  .collection>span{
    text-decoration: underline;
  }
  .collection>span:nth-child(1){
    margin-right: 2rem;
  }
  .phone{
    background-color: #25353c;
    color: #fff;
    padding: 20px 15px;
    text-align: center;
  }
  .phone p{
    font-size: 1.1rem;
  }

  .courser-footer-margin{
    margin-top: 60px;
  }
  .course-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 0em 0em 2rem rgba(0,0,0,0.45);
    background-color: #fff;
    text-align: center;
  }
  .course-footer .box{
    padding: 1rem;
    background-color: #fff;
    text-align: center;
    border-right: 2px solid #eff1f3;
    display: inline-block;
    width: 24%;
    box-sizing: border-box;
  }
  .course-footer .box:last-child{
    border:none;
  }
</style>
