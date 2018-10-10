<template>
  <div class="classroom" style="background-color: #eff1f2;" :class="classRoomActive?'active':''">
    <div class="header">
      <div class="icon">
        <img src="../assets/img/Berklee_Logo_Square.svg" alt="">
        <span>Sample Lessons</span>
      </div>
      <div class="title">
        Lesson 1 - Introduction
      </div>
      <div class="avatar">
        <img src="../assets/img/avatar.png" alt="">
      </div>

    </div>
    <div class="little-header">
      Lesson 1 - Introduction
    </div>
    <div class="little-header-toggle-btn navbar-light" @click="toggleClassRoomActive">
      <span class="navbar-toggler-icon"></span>
    </div>
    <div class="little-header-avatar">
      <img src="../assets/img/avatar.png" alt="">
    </div>
    <div class="content-container">
      <table></table>
      <div class="aside-container">
        <div class="aside-list">
          <div class="aside-item" @click="toggleAsideDetailActive">
            <img src="../assets/img/book.png" alt="">
            章节列表
          </div>
          <div class="aside-item" @click="goback">
            <img src="../assets/img/goback.png" alt="">
            返回
          </div>
        </div>
        <div class="aside-detail" :class="asideDetailActive?'active':''" v-if="courses">
          <div v-if="courses.courseCatalog.length>0">
            <h2 class="select-prompt">
              Select a Lesson
            </h2>
            <template v-for="(lesson,index) in courses.courseCatalog">
              <div class="select-item" @click="getLessonContent(lesson.id)">
                {{lesson.title}}
              </div>
            </template>

          </div>
        </div>
      </div>

      <div class="lesson-topics" v-if="lessonContent">
        <div class="lesson-topic" >
          <div class="topic-divider" >
            {{lessonContent.title}}
          </div>
          <div class="lesson-content">
            <table></table>
            <!--<div v-html="lessonContent.abstract"></div>-->
            <div>
              {{lessonContent.content}}
            </div>
            <div v-if="lessonContent.video">
              <video :src="lessonContent.video" controls="controls"></video>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'userLesson',
    data(){
      return {
        classRoomActive:false,
        asideDetailActive:true,
        courses:null,
        lessonContent:null
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      toggleClassRoomActive(){
        this.classRoomActive = !this.classRoomActive;
      },
      toggleAsideDetailActive(){
        let w = document.body.clientWidth;
//        console.log(w)
        if(w>=1034){
          this.asideDetailActive = !this.asideDetailActive;
        }else{
          this.classRoomActive = !this.classRoomActive;
//          console.log(this.asideDetailActive)
        }
      },
      getUserCourses(){
        let _this = this;
        this.$http({
          method:'get',
          url:'/users/courses?user_id=2',
        }).then(res=>{
          console.log(res.data)
          _this.courses=res.data.data.items[0].course
          ;
          console.log(_this.courses)
        })
      },
      getLessonContent(id){
        let _this = this;
        this.$http({
          method:'get',
          url:'/courses/lessons/'+id,
        }).then(res=>{
          console.log(res.data)
          _this.lessonContent=res.data.data;
          console.log(_this.lessonContent)
        })
      }
    },
    beforeMount(){
      this.getUserCourses();
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
  .classroom .content-container{
    margin-top: 60px;
    width: 100%;
    overflow: hidden;
  }
  .classroom .content-container .aside-container{
    background: rgba(86, 96, 104, 1);
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    width: 60px;
    color: #fff;
  }
  .classroom .content-container .aside-detail{
    background-color: #fff;
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 60px;
    width: 360px;
    color: #000;
    overflow: auto;
    display: none;
    border-right:1px solid #ccc;
  }
  .classroom .content-container .aside-detail.active{
    display: block;
  }


  @media (max-width: 1034px) {
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
    .classroom .content-container .aside-container{
      left: -100%;
    }
    .classroom.active .content-container .aside-container{
      left: 0;
    }
    .classroom.active .content-container .aside-detail{
      left: 60px;
    }
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

  .header avatar {
    border: none;
    border-radius: 0;
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin: 5px 29px 0 0;
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
  @media (min-width: 1034px){
    .little-header-toggle-btn{
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
  .aside-list{
    padding-top: 2rem;
  }
  .aside-item{
    text-align: center;
    width: 60px;
    padding:6px 0;
    cursor: pointer;
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .aside-detail>*{
    cursor: pointer;
  }
  .aside-detail h2.select-prompt {
    text-align: left;
    padding: 16px 24px;
    font-size:1.3rem;
    cursor: pointer;
    -webkit-transition: color 0.25s;
    transition: color 0.25s;
    border-bottom: 1px solid #DDD;
    font-weight: 500;
    margin-bottom: 0;
    /*padding-bottom: 15px;*/
  }
  .aside-detail h2.select-prompt:hover{
    color: rgb(240, 32, 46);
  }
  .select-item{
    color: #222;
    margin-bottom: 0;
    padding: 10px 0 10px 20px;
    border-bottom: 1px solid rgba(212, 212, 208, .45);
    font-size: 15px;
  }
  .select-item:hover{
    background: #EFF1F2;
  }
  .select-item.active{
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
  .lesson-topics .lesson-content>div{
    margin: 40px 0;
  }
</style>
