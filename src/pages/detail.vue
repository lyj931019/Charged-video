<template>
  <div class="body">
    <MyHeader/>
    <div v-if="courses">
      <!--<h1>{{$route.params.num}}</h1>-->

      <section class="content-head" data-scroll-index="0" id="overview">
        <div class="container-fluid" style="position: static;">
          <div class="row justify-content-between">
            <div class="col-12 col-lg-9" property="data-sticky_column">
              <div class="course-head">
                <router-link :to="{ name: 'list'}">
                  <a class="txt-lg a-black" href="#" itemprop="url">在线课程</a>
                </router-link>
                <h1>{{courses.name}}</h1>
                <div class="course-subhead">
                  <img alt="author.full_name" class="img-circle"
                       :src="courses.instructor.avatar">

                  <div class="course-subhead-text">
                    <p class="txt-sm">
                      教师
                      <span>
：
<a class="a-body-link" href="#instructors">{{courses.instructor.name}}</a>
</span>
                    </p>
                    <div class="separator">|</div>
                    <p class="txt-sm">
                      课程编号:
                      <span>
{{courses.num}}
</span>
                    </p>
                  </div>
                </div>
                <!-- - if course_is_private_lesson(course) -->
                <!-- %p.txt-sm Note: Private Lessons are open to Guitar Degree Majors only. -->
              </div>
              <div class="row">
                <div class="col-12 col-lg-4 push-lg-8">
                  <div class="key-points">
                    <div class="term-message">
                      <i>
                        <svg class="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" data-prefix="far"
                             data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                        </svg><!-- <div class="far fa-calendar-alt"></div> -->
                      </i>
                      <div class="term-message-text">
                        <h4>2019/1/14</h4>
                      </div>
                    </div>
                    <div class="key-course-level">
                      <div style="cursor:pointer;" class="course-level-icon offering-supporting-detail skill-level-3"
                           data-toggle="popover" data-trigger="focus" tabindex="0"
                           data-content="300 level course. Advanced Intermediate course material." data-placement="left"
                           data-original-title="Level 3 Course" rel="nofollow">
                        <template v-if="courses.level ==1">
                          <img src="../assets/img/skill-level-1.svg">
                        </template>
                        <template v-else-if="courses.level ==2">
                          <img src="../assets/img/skill-level-2.svg">
                        </template>
                        <template v-else-if="courses.level ==3">
                          <img src="../assets/img/skill-level-3.svg">
                        </template>
                        <template v-else>
                          <img src="../assets/img/skill-level-4.svg">
                        </template>
                      </div>
                      <div class="key-course-text"><h4>Level {{courses.level}}</h4></div>
                    </div>
                    <div class="credit-tuition">
                      <h4>课程价格</h4>
                      ${{courses.price}}
                    </div>
                    <!--<div class="non-credit-tuition">-->
                      <!--<h4>Non-Credit Tuition</h4>-->
                      <!--${{courses.price}}-->
                    <!--</div>-->
                  </div>
                </div>
                <div class="col-12 col-lg-8 pull-lg-4">
                  <div class="overview">
                    <!--<p>{{courses.synopsis}}</p>-->
                    <p v-html="courses.abstract"></p>
                    <!--
                    <div class="read-more-container">
                      <a class="read-more" data-toggle="collapse" href="#readmore" >Read More</a>
                      <div class="collapse" id="readmore" v-html="courses.abstract">
                        <p>
                        3D Design with Blender was written by Nicholas Jainschigg, a professor in the Illustration department at the prestigious Rhode Island School of Design. His students have gone on to work for ILM, Weta Digital, Digital Domain, Framestore, Pixar, Dreamworks, Blizzard, Id, Turbine, Microsoft Games, Irrational Games, 2K Games, Harmonix, and others.</p>
                        <p>
                        The course is designed to make the medium of 3D modeling, rendering, and animation understandable and accessible. It is also designed to make you comfortable with compositing—the mixing, adding, subtracting, and shuffling of real and imaginary visual elements—which is at the heart of most visual effects work. Along the way, you will be developing the skills that allow for the successful use of any visual effects software: an eye for color, an understanding of perspective and composition, and dramatic storytelling that allows you to make the unbelievable believable.</p>
                        <p>
                        While it is true that modern visual effects can put almost anything onto the screen that the mind can conceive, unless you have the budget of James Cameron or J.J. Abrams, you have be a little more crafty. This course will focus on ways to get the most impressive visuals at minimal expense and substituting planning, skill, and creativity for a massive budget.</p>
                        <p>By the end of the course, you will be able to:</p>
                        <ul>
                        <li>Construct, texture, and light virtual 3D objects</li>
                        <li>
                        Animate simple object motions, physics-based interactions, and particle-type effects like fire, smoke, and explosions
                        </li>
                        <li>
                        Add virtual objects to your real-world video footage, and place real-world elements into constructed imagery
                        </li>
                        <li>
                        Edit the look and timing of your effects shots to maximize their emotional impact and narrative flow
                        </li>
                        </ul>

                      </div>
                      <a class="read-less" data-toggle="collapse" href="#readmore"> 更{{readTips}}</a></div>
                    -->

                  </div>
                  <div class="overview-video">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 col-lg-3 hidden-md-down side-nav-container" style="position: static;">
              <div class="side-nav sticky-item is_stuck" property="data-sticky_column"
                   style="position: fixed; top: 270px; width: 320px;">
                <div class="side-nav-main">
                  <a class="nav-scroll active" data-scroll-nav="0" href="#overview">概览</a>
                  <a class="nav-scroll" data-scroll-nav="1" href="#syllabus">教学大纲</a>
                  <a class="nav-scroll last" data-scroll-nav="2" href="#requirements">学习要求</a>
                  <a class="nav-scroll" data-scroll-nav="3" href="#instructors">教师介绍</a>
                  <!--<a class="btn-action bo-button"-->
                     <!--href="#">-->
                    <!--<svg class="svg-inline&#45;&#45;fa fa-check-square fa-w-14 hidden-lg-up" aria-hidden="true" data-prefix="fa"-->
                    <!--data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"-->
                    <!--data-fa-i2svg="">-->
                    <!--<path fill="currentColor"-->
                    <!--d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path>-->
                    <!--</svg>-->
                     <!--<i class="fa fa-check-square hidden-lg-up"></i> -->
                    <!--Enroll Now <span>No application required</span></a>-->
                  <a class="bo-button-alt" href="#footer-form" @click.prevent="buyTheCourse">购买课程</a>
                  <div class="contain-watchlist"><a class="add-to-watchlist watchlist-btn" data-method="put"
                                                    href="/watchlist/courses/138?slug=3d-design-with-blender"
                                                    rel="nofollow">加入收藏</a></div>
                  <div class="side-nav-advisor-block">
                    <div id="rtp-contact">
                      <div class="advisor-contact-block">
                        <p class="guidance">咨询热线</p>
                        <a class="tel-main" href="tel:400-882-3823">400-882-3823</a>
                        <!--<a class="tel-intl" href="tel:16177472146">Int'l: +1-617-747-2146</a>-->
                        <!--<p class="call-text"><a href="tel:18662375533">电话</a>,&nbsp;<a href="sms:18662375533">短息</a>,&nbsp;or&nbsp;<a-->
                          <!--href="mailto: advisors@online.berklee.edu">邮件</a></p>-->
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section content-syllabus">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="syllabus content-section">
                <h2>教学大纲</h2>
                <template v-for="(lesson,index) in courses.lessons" >
                  <p class="bo-list-closed" >
                    <a data-toggle="collapse" :data-target="'#lesson-content-'+index" class="lesson-toggle" >
                      <i>
                        <svg class="svg-inline--fa fa-caret-right fa-w-6" aria-hidden="true" data-prefix="fa"
                             data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                             data-fa-i2svg="">
                          <path fill="currentColor"
                                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                        </svg><!-- <span class="fa fa-caret-right"></span> -->
                      </i>
                      <em>
                  <span class="syllabus-title">
                    Lesson {{lesson.lesson}}
                  </span>
                        <strong>{{lesson.title}}&nbsp;</strong>
                      </em>
                    </a>


                  </p>
                  <div style="margin-top: 1rem;" class="col-con">
                    <div class="collapse lesson-content" :id="'lesson-content-'+index"  v-html="lesson.abstract">

                    </div>
                  </div>

                </template>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section content-requirements">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="requirements content-section" data-scroll-index="2" id="requirements">
                <h2 style="margin-bottom: 1rem;">学习要求</h2>
                <!--<hr>-->
                <h4>
                  <a href="#prerequisites" data-toggle="collapse">
                    <i class="closed">
                      <svg class="svg-inline--fa fa-caret-right fa-w-6" aria-hidden="true" data-prefix="fa"
                           data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                           data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                      </svg><!-- <span class="fa fa-caret-right"></span> --></i>
                    先决条件
                  </a>

                </h4>
                <div class="col-con">
                  <template v-if="courses.requirements_prerequisites">
                    <div class="truncate-paragraph collapse lesson-content" id="prerequisites" v-html="courses.requirements_prerequisites"></div>
                  </template>
                  <template v-else>
                    <div class="truncate-paragraph collapse lesson-content" id="prerequisites">未设置</div>
                  </template>
                </div>

                <hr>
                <h4 style="cursor: auto;">
                  <a href="#textbooks" data-toggle="collapse">
                    <i class="closed">
                      <svg class="svg-inline--fa fa-caret-right fa-w-6" aria-hidden="true" data-prefix="fa"
                           data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                           data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                      </svg><!-- <span class="fa fa-caret-right"></span> --></i>必要的教科书
                  </a>

                </h4>
                <div class="col-con">
                  <template v-if="courses.requirements_textbooks">
                    <div class="truncate-paragraph collapse lesson-content" id="textbooks" v-html="courses.requirements_textbooks"></div>
                  </template>
                  <template v-else>
                    <div class="truncate-paragraph collapse lesson-content" id="textbooks">未设置</div>
                  </template>
                </div>

                <hr>
                <h4>
                  <a href="#software" data-toggle="collapse">
                    <i class="closed">
                      <svg class="svg-inline--fa fa-caret-right fa-w-6" aria-hidden="true" data-prefix="fa"
                           data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                           data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                      </svg><!-- <span class="fa fa-caret-right"></span> --></i>软件要求
                  </a>

                </h4>
                <div class="col-con">
                  <template v-if="courses.requirements_software">
                    <div class="truncate-paragraph collapse lesson-content" id="software" v-html="courses.requirements_software"></div>
                  </template>
                  <template v-else>
                    <div class="truncate-paragraph collapse lesson-content" id="software">未设置</div>
                  </template>
                </div>

                <hr>
                <h4>
                  <a href="#hardware" data-toggle="collapse">
                    <i class="closed">
                      <svg class="svg-inline--fa fa-caret-right fa-w-6" aria-hidden="true" data-prefix="fa"
                           data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                           data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
                      </svg><!-- <span class="fa fa-caret-right"></span> --></i>硬件要求
                  </a>

                </h4>
                <div class="col-con">
                  <template v-if="courses.requirements_hardware">
                    <div class="truncate-paragraph collapse lesson-content" id="hardware" v-html="courses.requirements_hardware"></div>
                  </template>
                  <template v-else>
                    <div class="truncate-paragraph collapse lesson-content" id="hardware">未设置</div>
                  </template>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section content-faculty">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="faculty content-section" data-scroll-index="3" id="instructors">
                <h2>教师简介</h2>
                <div class="row">
                  <div class="col-12 col-sm-2 instructor-img">
                    <img alt="faculty.full_name" class="rounded-circle"
                         :src="courses.instructor.avatar">
                  </div>
                  <div class="col-12 col-sm-10 instr">
                    <div class="txt-lg fac-name"><a class="a-body-link"
                                                    href="/faculty/nick-jainschigg">{{courses.instructor.name}}</a></div>
                    <!--<p class="txt-sm">Author &amp; Instructor</p>-->
                    <p class="txt-sm">作者 &amp; 讲师</p>
                    <div>
                      <!--<em>Nick Jainschigg</em>-->
                     <div v-html="courses.instructor.abstract"></div>
                    </div>
                    <!--
                    <div class="read-more-container">
                      <div class="collapse" id="instrreadmore">
                        <p v-html="courses.instructor.abstract">

                        </p>
                      </div>
                      <a class="read-less" href="#instrreadmore" data-toggle="collapse"
                         style="display: inline-block;font-weight: bold;"> Read {{instrReadTips}}</a>
                    </div>
                    -->
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!--
      <section class="page-section content-relations">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="content-section">
                <h2>What's Next?</h2>
                <p class="overview">
                  When taken for credit, 3D Design with Blender can be applied towards these associated programs:</p>
                <div class="associated-3d-design-with-blender">
                  <h4>Associated Certificate Programs</h4>
                  <ul class="related-certificates bo-list-lined">
                    <li>
                      <a href="/certificates/general-music-studies-professional">
                        General Music Studies
                        Professional Certificate
                      </a>
                    </li>
                    <li>
                      <a href="/certificates/general-music-studies-advanced-professional">
                        General Music Studies
                        Advanced Professional Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section content-advisors">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="advisors content-section">
                <h2>Questions?</h2>
                <p class="txt-lg">
                  Contact our Academic Advisors by phone at 1-866-BERKLEE (U.S.), 1-617-747-2146 (INT'L), or by email at <a
                  href="mailto:advisors@online.berklee.edu">advisors@online.berklee.edu</a>.</p>
                <p class="txt-lg">
                  We can also answer basic questions in the comments below. Please note that all comments are public.</p>
                <a class="read-more bo-button-tertiary" href="#comments" style="background: none;">Comments</a>
                <div class="comments readmore-hidden" id="comments">
                  <div id="fb-root">
                    <div class="fb-comments" data-href="http://online.berklee.edu/courses/3d-design-with-blender"
                         data-num-posts="10" data-width="100%" id="fb-container"></div>
                  </div>
                  <br>
                  <br>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      -->

    </div>
    <MyFooter/>
  </div>

</template>

<script>
  import Components from '../components/index'
  export default {
    name: 'detail',
    components:Components,
    data() {
      return {
        readTips: '多',
        instrReadTips: '多',
        courses: null
      }
    },
    methods: {
      buyTheCourse(){
        let _this = this;
        this.$http({
          method: 'post',
          url: '/users/courses/',
          params:{
            user_id:2,
            course_id:2
          }
        }).then(res => {
          console.log(res.data)
//          _this.courses = res.data.data;
          _this.$router.push({ name: 'userCenter'})
          console.log(_this.courses)
        })
      }
    },
    beforeMount() {
      console.log(12312)
      let num = this.$route.params.num;
      let _this = this;
      this.$http({
        method: 'get',
        url: '/courses/' + num,
      }).then(res => {
        console.log(res.data)
        _this.courses = res.data.data;
        console.log(_this.courses)
      })
    },
    mounted() {
      let _this = this;
      $('#readmore').on('hidden.bs.collapse', function () {
        // do something…
        _this.readTips = 'more'
//        console.log('dsadw')
      });
      $('#readmore').on('show.bs.collapse', function () {
        // do something…
        _this.readTips = 'less'
      });
      $('#instrreadmore').on('hide.bs.collapse', function () {
        // do something…
        _this.instrReadTips = '多'
      });
      $('#instrreadmore').on('show.bs.collapse', function () {
        // do something…
        _this.instrReadTips = '少'
      });
    }
  }
</script>

<style scoped>
  .content-head, .content-head {
    background-color: #eff1f3;
    padding-top: 75px;
    padding-bottom: 60px;
  }

  .content-head {
    background-color: #eff1f3;
    padding-top: 75px;
    padding-bottom: 60px;
  }

  .side-nav {
    -webkit-box-shadow: 0.7em 0.7em 2em rgba(0, 0, 0, 0.45);
    box-shadow: 0.7em 0.7em 2em rgba(0, 0, 0, 0.45);
    z-index: 100;
  }

  .side-nav-main {
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .side-nav-main a.nav-scroll.active {
    background-color: #7ea0af;
    color: white;
  }

  .side-nav-main a.nav-scroll {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.2rem;
    /*font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;*/
    letter-spacing: .5px;
    padding: 10px 15px;
  }

  .side-nav-main a {
    color: black;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    text-decoration: none;
  }

  .side-nav-main a.nav-scroll.active:before {
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

  .side-nav-main .btn-action, .side-nav-main .bo-button-alt {
    display: block;
    letter-spacing: .5px;
    margin: 1rem auto 1.5rem;
    width: 90%;
  }

  .side-nav-main .btn-action {
    color: white;
    white-space: normal;
  }

  .side-nav-main a {
    color: black;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    text-decoration: none;
  }

  .bo-button, .bo-button-primary {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: #ee243c;
    border: 0;
    color: white;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
  }

  .side-nav .contain-watchlist {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    margin: 1rem;
    text-align: center;
  }

  .side-nav .contain-watchlist a {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    text-decoration: underline;
  }

  .advisor-contact-block {
    background-color: #0e1416;
    color: white;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 20px 15px;
    text-align: center;
  }

  .advisor-contact-block .guidance {
    margin-bottom: .3rem;
  }

  .advisor-contact-block .tel-main {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    line-height: 2.50rem;
    /*font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;*/
    /*font-size: 1.85rem;*/
  }

  .advisor-contact-block a, .advisor-contact-block a:hover, .advisor-contact-block a:active {
    color: white;
    text-decoration: none;
  }

  .advisor-contact-block .tel-intl {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 0.9rem;
    line-height: 1.5rem;
    display: block;
  }

  .advisor-contact-block .call-text {
    margin: .5rem auto 0;
  }

  .advisor-contact-block .call-text a {
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    color: white;
  }

  .course-subhead img:first-child, .course-subhead img:first-child {
    margin-left: 0;
  }

  .course-subhead img, .course-subhead img {
    background-color: #eff1f3;
    margin-left: -15px;
    padding: 4px;
    position: relative;
    width: 60px;
  }

  .course-subhead .course-subhead-text, .course-subhead .course-subhead-text {
    display: flex;
    align-items: center;
  }

  .course-subhead .separator, .course-subhead .separator {
    color: #7b8b96;
  }

  .course-subhead .separator {
    color: #7b8b96;
  }

  .course-subhead p, .course-subhead p {
    margin: 1rem;
  }

  .course-subhead p {
    margin: 1rem;
  }

  .course-subhead span, .course-subhead span {
    white-space: nowrap;
  }

  .course-subhead span {
    white-space: nowrap;
  }

  .key-points {
    border-left: 2px solid #dee2e5;
    display: flex;
    flex-direction: column;
    margin: 0 0 30px 0;
    padding: 0 0 0 30px;
  }

  .key-points .term-message {
    display: flex;
    margin-top: 0;
  }

  .key-points div {
    margin: 1rem 0;
  }

  .key-points .term-message i {
    margin-top: 3px;
  }

  .key-points i {
    font-size: 2.5rem;
  }

  .svg-inline--fa.fa-w-14 {
    width: .78em;
  }

  .key-points .term-message-text {
    margin: 0.85rem 0 0 .85rem;
  }

  .key-points h4 {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    margin-top: 7px;
    line-height: 1.8rem;
    margin-bottom: 0;
  }

  .key-points .key-course-level, .key-points .key-course-level {
    display: flex;
  }

  .key-points .course-level-icon, .key-points .course-level-icon {
    margin: 0;
  }

  .key-points div {
    margin: 1rem 0;
  }

  .key-points .course-level-icon img, .key-points .course-level-icon img {
    display: block;
    margin-top: .7rem;
    height: 1.7rem;
  }

  .key-points .key-course-text, .key-points .key-course-text {
    margin: 0 0 0 .85rem;
  }

  .key-points div {
    margin: 1rem 0;
  }

  .key-points h4 {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    margin-top: 7px;
    line-height: 1.8rem;
    margin-bottom: 0;
  }

  .overview p, .overview p {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.50rem;
  }

  .overview p, .overview li, .overview .description {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.50rem;
  }

  .overview a, .overview a {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.50rem;
    text-decoration: underline;
    text-decoration: none;
  }

  .overview .read-more, .overview .read-less {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.67rem;
    line-height: 2.50rem;
    text-decoration: underline;
    text-decoration: none;
  }

  .overview a {
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }

  .readmore-hidden {
    display: none;
  }

  .overview p, .overview li, .overview .description {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.50rem;
  }

  .course-subhead, .course-subhead {
    align-items: center;
    display: flex;
    margin-bottom: 25px;
  }

  .key-points h4 {
    font-size: 1.1rem;
  }

  .key-points {
    font-size: 1.0rem;
  }

  .content-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .syllabus .bo-list-closed, .syllabus .bo-list-closed {
    border-bottom: 1px solid #dee2e5;
    transition: .35s ease-in-out;
  }

  .syllabus p, .syllabus p {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.3rem;
    line-height: 2.50rem;
    cursor: pointer;
    display: flex;
    padding: 1rem 0;
    margin: 0;
  }

  .syllabus .bo-list-closed i, .syllabus .bo-list-closed i {
    height: 10px;
    transition: .2s ease-in-out;
  }

  .syllabus p .fa-caret-right, .syllabus p .fa-caret-down, .syllabus p .fa-caret-right, .syllabus p .fa-caret-down {
    margin-right: 15px;
    margin-top: .25rem;
    width: 11px;
  }

  .syllabus p em, .syllabus p em {
    display: flex;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-style: normal;
    justify-content: space-between;
  }

  .syllabus p .syllabus-title, .syllabus p .syllabus-title {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    padding-right: 15px;
    min-width: 9rem;
  }

  .syllabus p em strong {
    font-weight: bold;
  }

  .content-requirements, .content-requirements {
    background-color: #eff1f3;
  }

  .content-requirements h4, .content-requirements h4 {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.3rem;
    line-height: 2.25rem;
    cursor: pointer;
  }
  .content-requirements h4 a, .content-requirements h4 a{
    color: #000000;
  }

  .content-requirements i, .content-requirements i {
    margin-right: 15px;
    width: 11px;
  }

  .content-requirements i.closed > svg, .content-requirements i.closed > svg {
    transition: .2s ease-in-out;
  }

  .faculty .instructor-img, .faculty .instructor-img {
    text-align: center;
  }

  .faculty img, .faculty img {
    max-width: 60px;
  }

  .faculty .fac-name > a, .faculty .fac-name > a {
    color: black;
    text-decoration: none;
  }

  .a-body-link {
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    text-decoration: none;
  }

  .instr .txt-sm {
    font-size: 1.0rem;
    font-weight: normal;
  }

  .instr .txt-lg {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .instr p {
    font-size: 1.16rem;
  }

  .faculty a.read-more:hover, .faculty a.read-less:hover, .faculty a.read-more:hover, .faculty a.read-less:hover {
    text-decoration: none;
    background-color: rgba(238, 36, 60, 0.2);
  }

  .faculty a.read-more, .faculty a.read-less, .faculty a.read-more, .faculty a.read-less {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 2.2rem;
    text-decoration: underline;
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }

  .content-relations {
    background: #eff1f3;
  }

  .content-relations p.overview {
    font-size: 1.16rem;
    line-height: 2rem;
  }

  .content-relations h4 {
    color: black;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    letter-spacing: .5px;
    margin-top: 30px;
    text-transform: uppercase;
    font-size: 1.06rem;
  }

  .content-relations ul {
    margin-bottom: 2rem;
  }

  .bo-list-lined {
    font-size: 1rem;
    line-height: 155%;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .bo-list-lined li {
    padding: 5px 0;
  }

  .bo-list-lined li a {
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }

  .bo-list-lined li a:hover {
    text-decoration: none;
    background-color: rgba(238, 36, 60, 0.2);
  }

  .content-advisors .advisors p a:hover, .content-advisors .advisors p a:hover {
    text-decoration: none;
    background-color: rgba(238, 36, 60, 0.2);
  }

  .content-advisors .advisors p a, .content-advisors .advisors p a {
    text-decoration: none;
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }

  a.read-more:hover, a.read-less:hover {
    color: #12191c;
  }

  .bo-button-tertiary:hover {
    background: white;
    border-color: black;
    color: black;
  }

  .bo-button-tertiary:hover {
    background: #e6e6e6;
    color: #0e1416;
    cursor: pointer;
  }

  a.read-more, a.read-less {
    color: #25353c;
  }

  a:hover {
    color: #056379;
  }

  a:focus, a:hover {
    color: #014c8c;
    text-decoration: underline;
  }

  a:active, a:hover {
    outline-width: 0;
  }

  .bo-button-tertiary {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: white;
    border: 0;
    color: #0e1416;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    border: 3px solid #0e1416;
    padding: 7px;
  }

  .bo-button-alt, .bo-button-secondary {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: white;
    border: 0;
    color: #ee243c;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    border: 3px solid #ee243c;
    padding: 7px;
  }

  .bo-button span, .bo-button-primary span {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    display: block;
  }

  .side-nav-main .bo-button-alt {
    color: #ee243c;
    margin: 0 auto;
    white-space: normal;
  }

  .side-nav-main .btn-action, .side-nav-main .bo-button-alt {
    display: block;
    letter-spacing: .5px;
    margin: 1rem auto 1.5rem;
    width: 90%;
  }

  .product .side-nav-main a {
    color: black;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    text-decoration: none;
  }

  .bo-button-alt:hover, .bo-button-secondary:hover {
    background: white;
    border-color: #cf1027;
    color: #cf1027;
  }

  .bo-button-alt:hover, .bo-button-secondary:hover {
    background: #e6e6e6;
    color: #ee243c;
    cursor: pointer;
  }

  .col-con {
    margin-left: 152px;
  }

  @media (max-width: 768px) {
    .col-con {
      margin-left: 45px;
    }

  }

  .lesson-toggle{
    display: flex;
  }
</style>
