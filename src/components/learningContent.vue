<template>
  <div>
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
</template>

<script>
  export default {
    name:'learningContent',
    data(){
      return {
        lesson:null,
        audioUrl:'',
        classRoomActive: false,
      }
    },
    methods:{
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
              setTimeout(()=>{
                document.getElementById("audio").load()
                document.getElementById("audio").play();
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
        let id = this.$route.params.id;
        this.getLesson(id);
      } else {
        this.$router.replace({name: 'login'});
      }

    },
    beforeRouteUpdate (to, from, next) {
      this.getLesson(to.params.id);
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
