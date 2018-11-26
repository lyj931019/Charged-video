<template>
  <div>
    <MyHeader/>
    <div class="body" v-if="courses">
      <div class="bg" id="abs">
        <div class="container-fluid">
          <h5 class="online-course">
            <a href="#">Home</a>
            <DownArrow class="bar"></DownArrow>
            <a href="#">All course</a>
            <DownArrow class="bar"></DownArrow>
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
                  <div class="course-info row">
                    <div class="course-date col-12 col-sm-6 col-lg-12">
                      <i>
                        <svg class="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" data-prefix="far"
                             data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512"
                             data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                        </svg><!-- <div class="far fa-calendar-alt"></div> -->
                      </i>
                      <span>2019年1月14日</span>

                    </div>
                    <div class="course-level detail-level col-12 col-sm-6 col-lg-12">
                      <Level :level="courses.level"/>
                      <span>Level {{courses.level}}</span>
                    </div>
                    <div class="course-price col-12 col-sm-6 col-lg-12">
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
              <div class="side-nav" id="side-nav" :style="{ top: windowScrollTop>=bottomH? 270 - (windowScrollTop - bottomH)+'px' : '270px'  }">
                <div class="side-nav-main">
                  <div class="nav-scroll" :class="{active:windowScrollTop<lessonH}" @click="gotoSection(absH)">{{$t('detail.overview')}}</div>
                  <div class="nav-scroll" :class="{active:windowScrollTop>=lessonH && windowScrollTop<requireH}" @click="gotoSection(lessonH+1)">{{$t('detail.syllabus')}}</div>
                  <div class="nav-scroll" :class="{active:windowScrollTop>=requireH && windowScrollTop<authorH}" @click="gotoSection(requireH+1)">{{$t('detail.learningRequirements')}}</div>
                  <div class="nav-scroll" :class="{active:windowScrollTop>=authorH && windowScrollTop<questionH}" @click="gotoSection(authorH+1)">{{$t('detail.teacherProfile')}}</div>
                  <div class="buy" @click="buyCourse">{{$t('detail.buyCourse')}}</div>
                  <div class="try" @click="tryCourse" v-if="courses && courses.try  && courses.try_day>0">
                    {{$t('detail.tryCourse')}}
                    <span>({{courses.try_day}}&nbsp;{{$t('detail.days')}})</span>
                  </div>
                  <div class="collection" >
                    <span @click="favoritesCourse">{{$t('detail.favoritesCourse')}}</span>
                  </div>
                  <Guidance class="detail-guidance d-guidance"></Guidance>
                  <!--<div class="phone">-->
                    <!--<p>{{$t('common.supportHotline')}}</p>-->
                    <!--<h4>400-882-3823</h4>-->
                  <!--</div>-->
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
                <div class="lesson-container">
                  <div class="lesson-title">
                    <a href="#" @click.prevent="showLessonContent(index)">
                      <DownArrow :active="lessonActive[index]" class="lesson-i"/><span>
                      Lesson {{lesson.lesson}}
                    </span><strong>{{lesson.title}}&nbsp;</strong>
                    </a>
                  </div>
                  <div class="lesson-content" :class="{active:lessonActive[index]}">
                    <div v-html="lesson.abstract"></div>
                  </div>
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
              <div class="lesson-container">
                <div class="lesson-title">
                  <a href="#" @click.prevent="showPrerequisites">
                    <DownArrow :active="prerequisites" class="lesson-i"/><strong>{{$t('detail.prerequisites')}}</strong>
                  </a>
                </div>
                <div class="lesson-content" :class="{active:prerequisites}">
                  <template v-if="courses.requirements_prerequisites">
                    <div v-html="courses.requirements_prerequisites"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>
              </div>
              <div class="lesson-container">
                <div class="lesson-title">
                  <a href="#" @click.prevent="showTextbooks">
                    <DownArrow :active="textbooks" class="lesson-i"/><strong>{{$t('detail.textbooks')}}</strong>
                  </a>
                </div>
                <div class="lesson-content" :class="{active:textbooks}">
                  <template v-if="courses.requirements_textbooks">
                    <div v-html="courses.requirements_textbooks"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>

              </div>
              <div class="lesson-container">
                <div class="lesson-title">
                  <a href="#" @click.prevent="showSoftware">
                    <DownArrow :active="software" class="lesson-i"/><strong>{{$t('detail.software')}}</strong>
                  </a>
                </div>
                <div class="lesson-content" :class="{active:software}">
                  <template v-if="courses.requirements_software">
                    <div v-html="courses.requirements_software"></div>
                  </template>
                  <template v-else>
                    <div>{{$t('common.noContent')}}</div>
                  </template>
                </div>

              </div>
              <div class="lesson-container border-0">
                <div class="lesson-title">
                  <a href="#" @click.prevent="showHardware">
                    <DownArrow :active="hardware" class="lesson-i"/><strong>{{$t('detail.hardware')}}</strong>
                  </a>
                </div>
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
      <div id="question" class="question">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="advisors content-section">
                <h2>Questions?</h2>
                <p class="txt-lg">Contact our Academic Advisors by phone at 1-866-BERKLEE (U.S.), 1-617-747-2146 (INT'L), or by email at <a href="#">advisors@online.berklee.edu</a>.</p>
                <p class="txt-lg">We can also answer basic questions in the comments below. Please note that all comments are public.</p>
                <a class="read-more bo-button-tertiary" href="#" style="background: none;">Comments</a>
                <div class="comments readmore-hidden" id="comments">
                  <div id="fb-root">
                    <div class="fb-comments" data-href="#" data-num-posts="10" data-width="100%" id="fb-container"></div>
                  </div>
                  <br>
                  <br>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom"></div>
    </div>

    <MyFooter/>
    <div class="d-lg-none course-footer">
      <!--<a href="#" class="box">{{$t('header.userCenter')}}</a>-->
      <!--<a href="#" class="box" @click.prevent="tryCourse">{{$t('detail.tryCourse')}}</a>-->
      <a href="#" class="box" v-if="courses && courses.try  && courses.try_day>0">
        <i>
          <svg class="svg-inline--fa fa-info-circle fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>
        </i>
        <div>Get info</div>
      </a>
      <!--<a href="#" class="box" @click.prevent="favoritesCourse">{{$t('detail.favoritesCourse')}}</a>-->
      <a href="#" class="box">
        <i>
          <svg class="svg-inline--fa fa-phone fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.397 24.615l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-35.973 76.675-98.938 140.508-177.249 177.248l-49.596-60.616a24 24 0 0 0-28.029-6.862l-111.997 48C3.873 366.516-1.994 378.08.618 389.397l23.997 104C27.109 504.204 36.748 512 48 512c256.087 0 464-207.532 464-464 0-11.176-7.714-20.873-18.603-23.385z"></path></svg>
        </i>
        <div>Call us</div>
      </a>
      <!--<a href="#" class="box" @click.prevent="buyCoursenpm">{{$t('detail.buyCourse')}}</a>-->
      <a href="#" class="box">
        <i>
          <svg class="svg-inline--fa fa-comments fa-w-18" aria-hidden="true" data-prefix="fa" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M224 358.857c-37.599 0-73.027-6.763-104.143-18.7-31.375 24.549-69.869 39.508-110.764 43.796a8.632 8.632 0 0 1-.89.047c-3.736 0-7.111-2.498-8.017-6.061-.98-3.961 2.088-6.399 5.126-9.305 15.017-14.439 33.222-25.79 40.342-74.297C17.015 266.886 0 232.622 0 195.429 0 105.16 100.297 32 224 32s224 73.159 224 163.429c-.001 90.332-100.297 163.428-224 163.428zm347.067 107.174c-13.944-13.127-30.849-23.446-37.46-67.543 68.808-64.568 52.171-156.935-37.674-207.065.031 1.334.066 2.667.066 4.006 0 122.493-129.583 216.394-284.252 211.222 38.121 30.961 93.989 50.492 156.252 50.492 34.914 0 67.811-6.148 96.704-17 29.134 22.317 64.878 35.916 102.853 39.814 3.786.395 7.363-1.973 8.27-5.467.911-3.601-1.938-5.817-4.759-8.459z"></path></svg>
        </i>
        <div>Text us</div>
      </a>
      <a href="#" class="box" @click.prevent="buyCourse">
        <div>
          {{$t('detail.buyCourse')}}
        </div>
      </a>
    </div>
    <div class="modal fade" id="detailTips" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailTipsTitle"><Icon :type="icon_type"></Icon>{{tips}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!--<div class="modal-footer">-->
          <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>-->
          <!--<button type="button" class="btn btn-primary" @click="deleteFavorites(deleteCourse.id)">确定</button>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Common from '../components/common'
  import Level from '../components/level.vue'
  import Avatar from '../components/avatar.vue'
  import DownArrow from '../components/down-arrow.vue'
  import Icon from '../components/icon.vue'
  import Guidance from '../common/guidance.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'detailF',
    components: {...Common,Level,Avatar,DownArrow,Icon,Guidance},
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
        tips:'',
        icon_type:'success',
        questionH:0,
        bottomH:0
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
          this.$router.push({ name: 'pay',params:{num:this.$route.params.num}})
        }else{
          this.gotoLogin();
        }
      },
      tryCourse(){
        if(this.getIsLogin){
          let _this = this;
          this.$http({
            method: 'post',
            url: '/courses/try',
            data:{
              user_id:_this.getUserInfo.user_id,
              course_id:_this.courses.id
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
          }).then(res => {
            if(res.data.state.code == 0){
              _this.tips = _this.$t('common.success');
              _this.icon_type = 'success';
            }else{
              _this.tips = _this.$t('common.exist');
              _this.icon_type = 'success';
            }
            $('#detailTips').modal('show');
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
            url: '/favorites',
            data:{
              user_id:_this.getUserInfo.user_id,
              course_id:_this.courses.id
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }]
          }).then(res => {
            if(res.data.state.code  == 0){
              _this.tips = _this.$t('common.success');
              _this.icon_type = 'success';
            }else{
              _this.tips = _this.$t('detail.collected');
              _this.icon_type = 'success';
            }
            $('#detailTips').modal('show');
          })
        }else{
          this.gotoLogin();
        }
      },
      gotoLogin(){
        this.$router.push({ name: 'login'})
      },
      gotoSection(top){
        let _this = this;
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
      _this.questionH = parseInt($('#question').offset().top)-(270-27.5+55*3);
      _this.bottomH = parseInt($('#bottom').offset().top)-(620+270);

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
  .bar{
    width: .4rem;
  }
  .d-guidance.detail-guidance{
    background-color: #000000;
    margin-bottom: 0;
  }
  .bg {
    background-color: #eff1f3;
    padding-top: 75px;
    padding-bottom: 60px;
  }

  .online-course a {
    color: #25353c;
    font-weight: bold;
    text-decoration: underline;
    line-height: 1.9rem;
  }

  .course-intr .title {
    font-weight: 700;
    font-size: 3.0rem;
    line-height: 3.38rem;
    margin-bottom: .75rem;
  }

  .course-author {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .course-author span {
    margin: .75rem;
    font-size: .87rem;
    line-height: 1.15rem;
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
    border-left: 0;
    padding-left: 30px;
  }
  .course-info > div {
    margin-bottom: .75rem;
  }
  @media (min-width: 1200px) {
    .course-info {
      border-left: 2px solid #dee2e5;
      padding-left: 30px;
    }
    .course-info > div {
      margin-bottom: 3rem;
    }
  }


  .course-date {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .course-date i {
    width: 1.65rem;
    display: inline-block;
  }

  .course-date span {
    font-size: 1rem;
    margin-left: .66rem;
    line-height: 1.35rem;
    font-weight: bold;
  }

  .course-level span {
    font-size: 1rem;
    margin-left: 0.7rem;
    font-weight: bold;
  }

  .course-price p {
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  .lesson, .author {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .lesson h2, .requirements h2,.author h2 {
    margin-bottom: .75rem;
    font-weight: bold;
    font-size: 2.38rem;
    line-height: 2.38rem;
  }
  .lesson-container{
    border-bottom: 1px solid #dee2e5;
  }
  .lesson-title {
    font-size: 1.25rem;

    padding: 0.75rem 0;
    line-height: 1.88rem;
  }

  .lesson-title a {
    color: #25353c;
  }
  .lesson-title a .lesson-i{
    margin-top: -1px;
  }

  .lesson-title a:hover {
    text-decoration: none;
  }

  .lesson-title a span, .requirements strong {
    margin: 0 0 0 .8rem;
    min-width: 6.8rem;
    display: inline-block;
    vertical-align: middle;
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
  .lesson-content>div{
    padding-bottom: 0.8rem;
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
    margin-bottom: .1rem;
  }
  .author-name>span{
    box-shadow: inset 0 -1px 0 #ee243c;
  }
  .author-name+p{
    font-size: .85rem;
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
    border-top: calc(.875rem + 14px) solid transparent;
    border-bottom: calc(.875rem + 14px) solid transparent;
    border-right: 1.7rem solid #7ea0af;
  }
  .buy{
    font-size: 1.32rem;
    line-height: 1.5rem;
    padding: 18px 0px;
    color: #fff;
    background-color: #ee243c;
    margin: 1rem 1rem 0.5rem;
    text-align: center;
    cursor: pointer;
  }
  .try{
    font-size: 1.08rem;
    line-height: 1.5rem;
    border: 3px solid #ee243c;
    padding: 7px;
    color: #ee243c;
    margin: 0.5rem 1rem;
    text-align: center;
    cursor: pointer;
  }
  .try>span{
    font-size: 1rem;
  }
  .collection{
    margin: 0.5rem 1rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    font-weight: 400;
  }
  .collection>span{
    text-decoration: underline;
    cursor: pointer;
    white-space: nowrap;
    display: inline-block;
  }
  .collection>span{

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 82px;
  }
  .course-footer a.box{
    padding: 1rem;
    text-align: center;
    border-right: 2px solid #eff1f3;
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    flex: auto;
    color: #000000;
    background-color: white;
  }
  .course-footer a.box>div{
    font-size: 1rem;
    line-height: 1.65rem;
  }
  .course-footer a.box:last-child{
    background: #ee243c;
    width: 36%;
    color: #fff;
    font-size: 1.13em;
    font-weight: bold;
    line-height: 1.5rem;
    padding: 1.8rem;
    height: 100%;
  }
  .course-footer a.box:hover{
    text-decoration: none;
    background-color: #eff1f3;
  }
  .course-footer a.box:first-child{
    width: 24%;
  }
  .course-footer .box i{
    width: 1rem;
    display: inline-block;
  }
  .course-footer .box i svg{
    width: 100%;
    height: 100%;
  }
  .question{
    background: #eff1f3;
  }
  .question .content-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .question .content-section h2{
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 2.38rem;
    line-height: 2.38rem;
    margin-bottom: 0.75rem;
    font-weight: bold;
  }
  .question .content-section p.txt-lg, .txt-lg {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    line-height: 1.88rem;
    margin-bottom: .75rem;
    font-weight: 200;
  }
  .question .content-section p.txt-lg a{
    color: #25353c;
    font-weight: bold;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    text-decoration: none;
  }
  .question .content-section p.txt-lg a:hover{
    text-decoration: none;
    background-color: rgba(238,36,60,0.2);
  }
  .question .bo-button-tertiary {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: .87rem;
    line-height: 1.15rem;
    background: white;
    color: #0e1416;
    display: inline-block;
    margin: 0px;
    outline: 0;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    border: 3px solid #0e1416;
    padding: 7px;
    font-weight: bold;
  }
  .question .bo-button-tertiary:hover{
    text-decoration: underline;
  }
</style>
