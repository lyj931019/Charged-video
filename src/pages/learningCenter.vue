<template>
  <div class="classroom" style="background-color: #eff1f2;" :class="classRoomActive?'active':''" v-if="courses">
    <div class="header">
      <div class="icon">
        <!--<img src="../assets/img/Berklee_Logo_Square.svg" alt="">-->
        <img :src="'./static/img/logo-min.png'" alt="">
        <!--<span>Sample Lessons</span>-->
        <span>{{courses.name}}</span>
      </div>
      <div class="title" v-if="lesson">
        {{lesson.title}}
      </div>
      <div class="avatar mr-3" id="avatarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        <!--<Avatar :src="getUserInfo.user_avatar"/>-->
        <span style="display: inline-block;max-width: 100px;vertical-align: middle;" class="omit">
          {{getUserInfo.user_nickname}}
        </span><span class="lt"><img src="../assets/img/down.png" alt=""></span>
      </div>
      <div class="dropdown-menu" aria-labelledby="avatarDropdown">
        <router-link class="dropdown-item text-center" href="#" :to="{ name: 'userCenter'}">
          {{$t('header.userCenter')}}
        </router-link>
      </div>
    </div>
    <div class="little-header" v-if="courses">
      {{courses.name}}
    </div>
    <div class="little-header-toggle-btn navbar-light" @click="toggleClassRoomActive">
      <span class="navbar-toggler-icon"></span>
    </div>
    <!--<div class="little-header-avatar">-->
      <!--<Avatar :src="getUserInfo.user_avatar"/>-->
    <!--</div>-->
    <div class="content-container">
      <table></table>
      <div class="aside-container">
        <div class="aside-list">
          <div class="aside-item" :class="{'active':asideItemActive == 'lesson'}" @click="toggleAsideDetailActive('lesson')">
            <img src="../assets/img/book.png" alt="">
            <br>
            {{$t('learningCenter.lessonList')}}
          </div>
          <div class="aside-item" :class="{'active':asideItemActive == 'homework'}"  @click="toggleAsideDetailActive('homework')">
            <img src="../assets/img/homework.png" alt="">
            <br>
            {{$t('learningCenter.homework')}}
          </div>
          <div class="aside-item" @click="goback">
            <img src="../assets/img/goback.png" alt="">
            <br>
            {{$t('learningCenter.goBack')}}
          </div>
        </div>
        <div class="aside-detail active"  v-if="courses">
          <div class="aside-content" :class="{'active':asideActive == 'lesson'}">
            <div v-if="courses.lessons.length>0">
              <h2 class="select-prompt">
                Select a Lesson
              </h2>
              <template v-for="(lesson,index) in courses.lessons">
                <div class="select-item" @click="getLesson(lesson.id)">
                  {{index}}&nbsp;-&nbsp;{{lesson.title}}
                </div>
              </template>

            </div>
          </div>
          <div class="aside-content" :class="{'active':asideActive == 'homework'}">
            <div v-if="homeworkList">
              <h2 class="select-prompt homework">
                To-Do
              </h2>
              <template v-for="(homework,index) in homeworkList">
                <div class="homework-item" @click="getHomework(homework.id)">
                  <span class="pen">
                    <img src="../assets/img/pen.png" alt="">
                  </span>
                    {{homework.title}}
                    <span class="data">
                    {{homework.status==1?'Submitted':(homework.status==2?'Reviewed':'')}}
                  </span>
                </div>
              </template>

            </div>
          </div>
        </div>
      </div>
      <div class="lesson-topics" >
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapGetters,mapState,mapMutations} from 'vuex'
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
        audioUrl: '',
        asideActive:'lesson',
        asideItemActive:'lesson',
        homeworkList:null
      }
    },
    methods: {
      ...mapMutations([
        'changeHomeworkList'
      ]),
      goback() {
        this.$router.replace({name: 'userCenter'});
      },
      toggleClassRoomActive() {
        this.classRoomActive = !this.classRoomActive;
      },
      toggleAsideDetailActive(content) {
        this.asideItemActive = content;
        let w = document.body.clientWidth;
        if (w >= 1280) {
          this.asideDetailActive = !this.asideDetailActive;
        } else {
//          this.classRoomActive = !this.classRoomActive;
        }
        this.asideActive = content;
      },
      getUserCourses() {
        let _this = this;
        let num = this.getLearningNum;
        if(num.length<=0){
          this.$router.replace({name: 'userCenter'});
          return false;
        }
        this.$http({
          method: 'get',
          url: '/courses/' + num,
        }).then(res => {
          _this.courses = res.data.data;
          _this.getUserHomeworkList();
          _this.getLesson(_this.courses.lessons[0].id);
        });
      },
      getUserHomeworkList(){
        let _this = this;
        this.$http({
          method: 'get',
          url: '/tasks/user',
          params:{
            user_id:_this.getUserInfo.user_id,
            course_id:_this.courses.id
          }
        }).then(res => {
          _this.homeworkList = res.data.data;
//          _this.getLesson(_this.courses.lessons[0].id);
        });
      },
      getLesson(id) {
        let w = document.body.clientWidth;
        this.$router.push({ name: 'learningContent', params: { id:id}});
        if (w < 1280){
          this.classRoomActive = !this.classRoomActive;
        }
      },
      getHomework(id) {
        let w = document.body.clientWidth;
        this.$router.push({ name: 'homework', params: { id:id}});
        if (w < 1280){
          this.classRoomActive = !this.classRoomActive;
        }
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
//              $('#audio')
              setTimeout(()=>{
                console.log(document.getElementById("audio").currentSrc)
//                document.getElementById("audio").played;
                document.getElementById("audio").load()
                document.getElementById("audio").played()
              },50)

            } else {
              $('#audioErr').modal('show');
            }
          })
        }
      }
    },
    beforeMount() {
      if (localStorage.getItem('isLogin')) {
        this.getUserCourses();

      } else {
        this.$router.replace({name: 'login'});
      }
    },
    computed: {
      ...mapGetters([
        'getIsLogin',
        'getUserInfo',
        'getLearningNum',
      ]),
      ...mapState([
        'homeworkListChange'
      ])
    },
    watch:{
      homeworkListChange(val) {
        if(val){
          this.getUserHomeworkList();
          this.changeHomeworkList(false);
        }
      }
    }
  }
</script>

<style scoped>
  .aside-content{
    display: none;
  }
  .aside-content.active{
    display: block;
  }
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
    overflow-y: auto;
  }

  .classroom .content-container .aside-container {
    background: rgba(86, 96, 104, 1);
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 60px;
    color: #fff;
    z-index: 1000;
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
    background: #ccc;
    vertical-align: top;
  }

  .header .icon img + span {
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 1px;
    font-size: 1.2rem;
    cursor: pointer;
    max-width: 400px;
    overflow: hidden;
    padding: 0px 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
  }
  @media (max-width: 390px) {
    .header .icon img + span{
      display: none;
    }
  }
  @media (max-width: 550px) {
    .header .icon img + span{
      max-width: 180px;
    }
  }
  @media (max-width:380px) {
    .classroom .content-container .aside-detail{
      /*width:140px;*/
      width:calc(100% - 60px);
    }
    .classroom.active .content-container .aside-container {
      width: 100%;
    }
  }
  @media (max-width:186px) {
    .dropdown-menu{
      min-width:100px;
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
    border-radius: 25px;
    width: auto;
    /*margin: 5px 29px 0 0;*/
    line-height:60px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
  .header .avatar>.lt img{
    width: 20px;
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
  @media (min-width: 1460px){
    .classroom .content-container  .aside-detail{
      width: 530px;
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
    /*padding-top: 2rem;*/
  }

  .aside-item {
    text-align: center;
    width: 60px;
    padding: 12px 0;
    cursor: pointer;
    font-size: 0.65rem;
    line-height: 1.4rem;
  }

  .aside-item.active{
    background: #3f3f3f;
    box-shadow: inset 2px 0px 5px #222;
  }
  .aside-item img {
    width: 20px;
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
  .aside-detail h2.select-prompt.homework{
    background: #EFF1F2;
    color: rgba(0,0,0,0.65);
    font-size: .95rem;
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
    line-height: 1rem;
  }

  .select-item:hover ,.homework-item:hover{
    background: #EFF1F2;
  }

  .select-item.active ,.homework-item:active {
    color: rgb(240, 32, 46);
  }

  .homework-item{
    color: #222;
    margin-bottom: 0;
    padding: 15px 0 15px 20px;
    border-bottom: 1px solid rgba(212, 212, 208, .45);
    font-size: 16px;
    line-height: 1rem;
    position: relative;
  }

  .homework-item .pen{
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 6px;
    margin-right: 8px;
  }
  .homework-item .pen img{
    width: 20px;
  }
  .homework-item .data{
    font-weight: bold;
    color: #ee243c;
    position: absolute;
    right: 16px;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 14px;
    height: 14px;
    line-height: 14px;
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
    height: calc(100vh - 60px);
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
