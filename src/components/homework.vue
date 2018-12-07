<template>
  <div>
    <div class="lesson-topic">
      <div class="topic-divider">
        Submit Your Assignment
        <!--<span  class="close" aria-hidden="true">&times;</span>-->
      </div>
      <div class="lesson-content">
        <table></table>
        <!--<div v-html="lesson.abstract"></div>-->
        <div class="title" v-if="homework">
          <span class="pen">
            <img src="../assets/img/pen_w.png" alt="">
          </span>
          {{homework.title}}
        </div>
        <template v-if="homework">
          <div class="content" v-html="homework.content"></div>
        </template>

        <div class="submit" v-if="!done">
          <div id="summernote"></div>
          <!--<vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>-->

          <div class="submit-btn">
            <button class="btn btn-info" type="button" @click="summernoteSubmit">submit</button>
          </div>
        </div>
        <div class="task" v-if="done && submits">
          <div class="task-container">
            <div class="task-date">
              提交时间:8012-21-90
            </div>
            <div class="task-content" v-html="submits.submit_content"></div>
          </div>
        </div>
      </div>

      <!-- tips -->
    </div>
  </div>
</template>

<script>
  //  import VueUeditorWrap from 'vue-ueditor-wrap'
  import {mapGetters} from 'vuex'

  export default {
    name: 'homework',
//    components: {
//      VueUeditorWrap
//    },
    data() {
      return {
        msg: '',
        homework: null,
        done: false,
        submits: null,
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
      summernoteSubmit() {
        let content = $('#summernote').summernote('code');
        console.log(content);
        return content;
      },
      getHomework(id) {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/tasks/' + id,
        }).then(res => {
          _this.homework = res.data.data;
          _this.classRoomActive = false;
          _this.getSubmit(id);
        });
      },
      getSubmit(id) {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/tasks/submits',
          params: {
            task_id: id,
            user_id: _this.getUserInfo.user_id
          }
        }).then(res => {
          if (res.data.state.code == 0) {
            $('#summernote').summernote('destroy');
            setTimeout(() => {
              _this.done = true;
              _this.submits = res.data.data;
            }, 100);

          } else {
            _this.done = false;
            _this.submits = null;
            setTimeout(() => {
              $('#summernote').summernote({
                height: 240,
                minHeight: 240,
                maxHeight: 240,
                disableDragAndDrop: true,
                shortcuts: false,
                popover: {}
              });
            }, 100)
          }
        });
      },
      submitHomework() {
        let _this = this;
        this.$http({
          method: 'post',
          url: '/courses/buy',
          data: {
            user_id: _this.getUserInfo.user_id,
            task_id: _this.homework.id,
            submit_content: _this.summernoteSubmit()
          },
          transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
        }).then(res => {

        })
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
    mounted() {
      $('#summernote').summernote({
        height: 240,
        minHeight: 240,
        maxHeight: 240,
        disableDragAndDrop: true,
        shortcuts: false,
        popover: {}
      });

      let id = this.$route.params.id;
      this.getHomework(id);
    },
    beforeRouteUpdate(to, from, next) {
      this.getHomework(to.params.id);
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

  .lesson-topics .topic-divider .close {
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

  .lesson-topics .lesson-content div.title {
    font-size: 22px;
    font-weight: bold;
    margin: 16px 0 4px;
  }

  .lesson-content .title .pen {
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

  .lesson-content .title .pen img {
    width: 24px;
  }

  .lesson-topics .lesson-content .content {
    padding: 4px 16px;
    height: 400px;
    overflow-y: auto;
    overflow-x: hidden;

  }

  .submit, .task {
    width: 100%;
    height: 338px;
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

  .submit-btn {
    padding: 4px 20px;
    text-align: right;
  }

  .task {
    border-top: 1px solid #ccc;
    padding: 4px 20px;
  }

  .task-container .task-date {
    border-bottom: 1px solid #ccc;
    font-size: 1rem;
    color: #aaaaaa;
  }

  .task-container > div.task-cotent {
    height: 100px;
    overflow-y: auto;
    overflow-x: hidden;

  }
</style>
