<template>
  <div>
    <div class="lesson-topic">
      <div class="topic-divider">
        Submit Your Assignment <span  class="close" aria-hidden="true">&times;</span>
      </div>
      <div class="lesson-content">
        <table></table>
        <!--<div v-html="lesson.abstract"></div>-->
        <div class="title">
          <span class="pen">
            <img src="../assets/img/pen_w.png" alt="">
          </span>
          Assignment 10: Co-Writh with/as an Artist
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque eligendi facere impedit in ipsam labore laboriosam laudantium nam natus odit officiis, quo quos rerum saepe totam! Libero, perferendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque eligendi facere impedit in ipsam labore laboriosam laudantium nam natus odit officiis, quo quos rerum saepe totam! Libero, perferendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque eligendi facere impedit in ipsam labore laboriosam laudantium nam natus odit officiis, quo quos rerum saepe totam! Libero, perferendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque eligendi facere impedit in ipsam labore laboriosam laudantium nam natus odit officiis, quo quos rerum saepe totam! Libero, perferendis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cum cumque eligendi facere impedit in ipsam labore laboriosam laudantium nam natus odit officiis, quo quos rerum saepe totam! Libero, perferendis.
        </div>
        <div class="submit">
          <div id="summernote"></div>
          <div class="submit-btn">
            <button class="btn btn-info" type="button"  @click="summernoteSubmit">submit</button>
          </div>

        </div>
      </div>
    </div>
    <!-- tips -->
  </div>
</template>

<script>
  export default {
    name:'homework',
    data(){
      return {
//        lesson:null,
//        audioUrl:'',
//        classRoomActive: false,
      }
    },
    methods:{
      summernoteSubmit(){
        let content = $('#summernote').summernote('code');
        console.log(content);
      }
    },
    beforeMount() {
//      if (localStorage.getItem('isLogin')) {
//        let id = this.$route.params.id;
//        this.getLesson(id);
//      } else {
//        this.$router.replace({name: 'login'});
//      }

    },
    mounted(){
      console.log($('#summernote'));
      $('#summernote').summernote({
        height: 200,
        minHeight: 200,
        maxHeight: 200,
//        focus: true,
        disableDragAndDrop: true,
        shortcuts: false,
        popover: {}
      });


    },
    beforeRouteUpdate (to, from, next) {
      next();
    },
  }
</script>


<style scoped>
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
    font-weight: normal;
    font-size: 20px;
    text-align: left;
    color: #aaa;
    border-top: 0 none;
    margin: 0 0 10px;
    padding: 12px;
    border-bottom: 1px solid #aaa;

  }
  .lesson-topics .topic-divider .close{
    float: right;
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
    /*padding: 40px;*/
    background: #fff;
    margin: 0px auto 20px;
    border: 1px solid rgba(0, 0, 0, .14);
    border-width: 1px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .05);
    max-width: 760px;
  }

  .lesson-topics .lesson-content div.title{
    font-size: 22px;
    font-weight: bold;
    margin: 16px 0 4px;
  }
  .lesson-content .title .pen{
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 8px;
    margin: 0 8px 0 16px;
    background-color: #aaa;
    text-align: center;
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    line-height: 24px;
  }
  .lesson-content .title .pen img{
    width: 24px;
  }
  .lesson-topics .lesson-content .content{
    padding: 4px 16px;
    height: 438px;
    overflow-y: auto;
    overflow-x: hidden;

  }
  .submit{
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (min-width: 1280px) {
    .lesson-topics .lesson-topic {
      margin: 0px 60px 20px auto;
    }
  }

  @media (min-width: 1480px) {
    .lesson-topics .lesson-topic {
      margin: 0px auto 20px 700px;
    }
  }
  @media (min-width: 1690px) {
    .lesson-topics .lesson-topic {
      margin: 0px auto 20px 860px;
    }
  }

  .lesson-topics .lesson-content {
    /*margin-bottom: 40px;*/
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
    position: relative;
  }


  .lesson-topics .lesson-content > div {
    /*margin: 40px 0;*/
  }


  .submit-btn{
    padding: 4px 20px;
    text-align: right;
  }
</style>
