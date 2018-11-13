<template>
  <div class="classroom" style="background-color: #eff1f2;" :class="classRoomActive?'active':''" v-if="courses">
    <div class="header">
      <div class="icon">
        <img src="../assets/img/Berklee_Logo_Square.svg" alt="">
        <span>Sample Lessons</span>
      </div>
      <div class="title" v-if="courses">
        {{courses.name}}
      </div>
      <div class="avatar">
        <Avatar :src="getUserInfo.user_avatar"/>
      </div>

    </div>
    <div class="little-header" v-if="courses">
      {{courses.name}}
    </div>
    <div class="little-header-toggle-btn navbar-light" @click="toggleClassRoomActive">
      <span class="navbar-toggler-icon"></span>
    </div>
    <div class="little-header-avatar">
      <Avatar :src="getUserInfo.user_avatar"/>
    </div>
    <div class="content-container">
      <table></table>
      <div class="aside-container">
        <div class="aside-list">
          <div class="aside-item" @click="toggleAsideDetailActive">
            <img src="../assets/img/book.png" alt="">
            <br>
            {{$t('learningCenter.lessonList')}}
          </div>
          <div class="aside-item" @click="goback">
            <img src="../assets/img/goback.png" alt="">
            <br>
            {{$t('learningCenter.goBack')}}
          </div>
        </div>
        <div class="aside-detail active"  v-if="courses">
          <div v-if="courses.lessons.length>0">
            <h2 class="select-prompt">
              Select a Lesson
            </h2>
            <template v-for="(lesson,index) in courses.lessons">
              <div class="select-item" @click="getLesson(lesson.id)">
                {{lesson.title}}
              </div>
            </template>

          </div>
        </div>
      </div>

      <div class="lesson-topics" v-if="lesson">
        <div class="lesson-topic">
          <div class="topic-divider">
            {{lesson.title}}
          </div>
          <div class="lesson-content">
            <table></table>
            <!--<div v-html="lesson.abstract"></div>-->
            <div v-if="lesson.video">
              <video :src="lesson.video" controls="controls"></video>
            </div>
            <div v-html="lesson.abstract"></div>
            <div v-html="lesson.content" @click="getPronunciation"></div>
          </div>
        </div>
      </div>
      <audio :src="audioUrl" id="audio" autoplay>
        <!--您的浏览器不支持 audio 标签。-->
      </audio>
      <!-- tips -->
      <div class="modal fade" id="audioErr" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{$t('learningCenter.audioErr')}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {{$t('common.supportHotline')}}:400-882-3823
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <!--<button type="button" class="btn btn-primary">Save changes</button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Avatar from '../components/avatar.vue'

  export default {
    name: 'LearningCenter',
    components: {Avatar},
    data() {
      return {
        classRoomActive: false,
        asideDetailActive: true,
        courses: null,
        lesson: null,
        lessonList: null,
        audioUrl: ''
      }
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
      toggleClassRoomActive() {
        this.classRoomActive = !this.classRoomActive;
      },
      toggleAsideDetailActive() {
        let w = document.body.clientWidth;
        if (w >= 1280) {
          this.asideDetailActive = !this.asideDetailActive;
        } else {
          this.classRoomActive = !this.classRoomActive;
        }
      },
      getUserCourses() {
        let _this = this;
        let num = this.$route.params.num;
        this.$http({
          method: 'get',
          url: '/courses/' + num,
        }).then(res => {
          _this.courses = res.data.data;
        })
      },
      getLesson(id) {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/courses/lessons/' + id,
        }).then(res => {
          _this.lesson = res.data.data;
          let content = _this.lesson.content;
          let html = ''
          if (content && content.length > 0) {
            html = content.replace(/\b[a-zA-Z]+\b/g, function (world) {
              return '<span class="pronunciation">' + world + '</span>'
            })
          }
          _this.classRoomActive = false;
          _this.lesson.content = html;
        })
      },
      getPronunciation(e) {
        let target = e.target || e.srcElement;
        if (target.tagName == 'SPAN') {
          let html = target.innerHTML.toLowerCase();
          let _this = this;
          _this.$http({
            method: 'get',
            url: '/medias/pronunciations/' + html,
          }).then((res) => {
            if (res.data.state.code === 0) {
              _this.audioUrl = res.data.data.audio;
            } else {
              $('#audioErr').modal('show');
            }
          })
        }
      }
    },
    beforeMount() {
      if (this.getIsLogin) {
        this.getUserCourses();
      } else {
        this.$router.replace({name: 'login'});
      }

    },
    computed: {
      ...mapGetters([
        'getIsLogin',
        'getUserInfo'
      ])
    }
  }
</script>

<style scoped>
  .header {
    background: rgba(86, 96, 104, 1);
    height: 60px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 300;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .classroom .content-container {
    margin-top: 60px;
    width: 100%;
    overflow: hidden;
  }

  .classroom .content-container .aside-container {
    background: rgba(86, 96, 104, 1);
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 60px;
    color: #fff;
    z-index: 1;
  }

  .classroom .content-container .aside-detail {
    background-color: #fff;
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 60px;
    width: 300px;
    color: #000;
    overflow: auto;
    /*display: none;*/
    border-right: 1px solid #ccc;
  }


  @media (max-width: 1280px) {
    .classroom .header {
      left: -100%;
      right: 100%;
    }

    .classroom.active .header {
      left: 0%;
      right: 0%;
    }

    .header .title {
      display: none;
    }

    .classroom .content-container .aside-container {
      left: -1000%;
    }

    .classroom.active .content-container .aside-container {
      left: 0;
    }

    .classroom.active .content-container .aside-detail {
      display: none;
      left: 60px;
    }
  }
  .classroom .content-container .aside-detail.active {
    display: block;
  }



  .header .icon {
    height: 60px;
    line-height: 60px;
  }

  .header .icon img {
    height: 60px;
    vertical-align: top;
  }

  .header .icon img + span {
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 1px;
    font-size: 1.2rem;
    cursor: pointer;
    max-width: 400px;
    overflow: hidden;
    padding: 11px 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media (max-width: 314px) {
    .header .icon img + span{
      display: none;
    }
  }
  @media (max-width:380px) {
    .classroom .content-container .aside-detail{
      width:140px;
    }
  }

  .header .title {
    width: 500px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    top: 0;
    right: calc(38% - 280px);
    background: none;
    font-size: 0.8em;
    font-weight: 300;
    letter-spacing: .5px;
    line-height: 60px;
    color: rgb(255, 255, 255);
  }

  .header .avatar {
    border: none;
    border-radius: 0;
    height: 60px;
    width: 60px;
    border-radius: 25px;
    /*margin: 5px 29px 0 0;*/
    line-height:60px;
    text-align: center;
  }

  .little-header {
    line-height: 40px;
    color: #777777;
    box-shadow: 0 0 4px #CCC;
    background-color: #ffffff;
    text-align: center;
    font-size: 0.9rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px;
    width: 100%;
  }

  .little-header-toggle-btn {
    position: fixed;
    left: 0;
    top: 0;
    font-size: 20px;
    box-shadow: 4px 3px 10px rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 60px;
    width: 60px;
    color: rgba(0, 0, 0, .8);
    background-color: #fff;
    z-index: 301;
  }

  @media (min-width: 1280px) {
    .little-header-toggle-btn {
      display: none;
    }
  }

  .little-header-avatar {
    position: fixed;
    right: 0;
    top: 0;
    border: none;
    border-radius: 0;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin: 5px 29px 0 0;
  }

  .aside-list {
    padding-top: 2rem;
  }

  .aside-item {
    text-align: center;
    width: 60px;
    padding: 6px 0;
    cursor: pointer;
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .aside-item img {
    width: 36px;
  }

  .aside-detail > * {
    cursor: pointer;
  }

  .aside-detail h2.select-prompt {
    text-align: left;
    padding: 16px 24px;
    font-size: 1.3rem;
    cursor: pointer;
    -webkit-transition: color 0.25s;
    transition: color 0.25s;
    border-bottom: 1px solid #DDD;
    font-weight: 500;
    margin-bottom: 0;
    /*padding-bottom: 15px;*/
  }

  .aside-detail h2.select-prompt:hover {
    color: rgb(240, 32, 46);
  }

  .select-item {
    color: #222;
    margin-bottom: 0;
    padding: 10px 0 10px 20px;
    border-bottom: 1px solid rgba(212, 212, 208, .45);
    font-size: 15px;
  }

  .select-item:hover {
    background: #EFF1F2;
  }

  .select-item.active {
    color: rgb(240, 32, 46);
  }

  @media (max-width: 800px) {
    .lesson-topics .lesson-topic {
      font-size: 1.2em;
    }

    .lesson-topics {
      padding: 5px;
      margin-top: 10px;
    }

    .lesson-topics .lesson-topic {
      border-left-width: 0;
      padding: 30px 20px;
      border-width: 1px;
    }

    .lesson-topics .topic-divider {
      padding: 0;
    }
  }

  .lesson-topics .topic-divider {
    background-color: rgb(255, 255, 255);
    line-height: 100%;
    font-weight: 700;
    font-size: 30px;
    text-align: left;
    color: rgba(0, 0, 0, .8);
    border-top: 0 none;
    margin: 0 0 10px;
    padding: 0;
  }

  .lesson-topics {
    list-style: none;
    line-height: 160%;
    padding: 5px;
    margin: 0;
  }

  .lesson-topics .lesson-topic {
    font-weight: 400;
    color: rgba(0, 0, 0, .8);
    padding: 40px;
    background: #fff;
    margin: 0px auto 20px;
    border: 1px solid rgba(0, 0, 0, .14);
    border-width: 1px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
    max-width: 760px;
  }

  @media (min-width: 1280px) {
    .lesson-topics .lesson-topic {
      margin: 0px 60px 20px auto;
    }
  }

  @media (min-width: 1480px) {
    .lesson-topics .lesson-topic {
      margin: 0px auto 20px 632px;
    }
  }

  .lesson-topics .lesson-content {
    margin-bottom: 40px;
    min-height: 800px;
    word-wrap: break-word;
    -webkit-touch-callout: initial;
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: initial;
    cursor: text;
    line-height: 1.3em;
    font-size: 21px !important;
  }

  .lesson-topics .lesson-content > div {
    margin: 40px 0;
  }

  #audio {
    visibility: hidden;
  }

</style>
