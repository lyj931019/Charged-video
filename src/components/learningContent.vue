<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-21 17:53:27
 * @LastEditTime: 2019-08-31 15:20:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div  v-if="lesson">
    <div class="lesson-topic">
      <div class="topic-divider">
        {{lesson.title}}
      </div>
      <div class="lesson-content">
        <!-- <table></table>
        <div v-html="lesson.abstract"></div> -->
        <div v-if="lesson.video">
          <template v-if="lesson.video.indexOf('mp3',lesson.video.lastIndexOf('.'))>-1">
            <aplayer
              :key="lesson.id"
              ref="aplayer"
              :music="musicOption"
              show-lrc
              mutex
              preload="true">
              <!-- <div slot="display">123123444444444123</div> -->
            </aplayer>
          </template>
          <template v-else>
            <!--<video :src="lesson.video" controls="controls"></video>-->
            <video-player  class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            />
          </template>


        </div>
        <!--<div id="aplayer"></div>-->
        <div  v-html="lesson.content"></div>
        <!--<div v-html="lesson.content" @click="getPronunciation"></div>-->
      </div>
    </div>
    <!-- 点击单词播放单词读音，现取消 -->
    <!--<audio :src="audioUrl" id="audio" autoplay>-->
      <!--&lt;!&ndash;您的浏览器不支持 audio 标签。&ndash;&gt;-->
    <!--</audio>-->
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
            <!-- {{$t('common.supportHotline')}}:400-882-3823 -->
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
  import Aplayer from 'vue-aplayer'
  import 'video.js/dist/video-js.css'

  import { videoPlayer } from 'vue-video-player'
  // const ap = new APlayer(options);
  export default {
    name:'learningContent',
    components:{ Aplayer, videoPlayer },
    data(){
      return {
        lesson:null,
        audioUrl:'',
        classRoomActive: false,
        musicOption: {
        },
        playerOptions: {
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [

          ],
          poster: "", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
        }
      }
    },
    methods:{
      getLesson(id) {
        let _this = this;
        this.$http({
          method: 'get',
          url: 'v1/courses/lessons/' + id,
        }).then(res => {
          this.setMusicOption(res.data.data)
          this.lesson = res.data.data;
          let content = this.lesson.content;
          let html = ''
          
          // if (content && content.length > 0) {
          //   html = content.replace(/\b[a-zA-Z]+\b/g, function (world) {
          //     return '<span class="pronunciation">' + world + '</span>'
          //   })
          // }
          // _this.options.audio[0].url = _this.lesson.video;
          // _this.options.audio[0].name = _this.lesson.title;
          // setTimeout(()=>{
          //   _this.options.container = window.document.getElementById('aplayer');
          //   _this.ap = new _this.$ap(_this.options);
          // },1000)

          html = content;
          
          // 设置视频播放
          this.playerOptions.sources.push({type:'video/mp4',src:this.lesson.video});
          this.classRoomActive = false;
          this.lesson.content = html;
        })
      },
      getPronunciation(e) {
        let target = e.target || e.srcElement;
        if (target.tagName == 'SPAN') {
          let html = target.innerHTML.toLowerCase();
          let _this = this;
          _this.$http({
            method: 'get',
            url: 'v1/medias/pronunciations/' + html,
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
      },
      setMusicOption(data) {
        // 设置音频播放字幕
        if (data) {
          let lcrSrc = ''
          try {
            let lcrList = []
            data.subtitles.forEach(item => {
              const time = item.time[0].replace(/([^:]+):/, '') + '.00'
              const text = item.content
              lcrList.push(`[${time}]${text}\n`)
            })
            lcrSrc = lcrList.join('')
          } catch (error) {
          }
          this.musicOption = JSON.parse(JSON.stringify({
            artist: 'audio',
            title: data.title,
            src: data.video,
            lrc: lcrSrc
          }))
        }
      }
    },
    beforeMount() {
      if (localStorage.getItem('isLogin') === 'true') {
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


<style lang="scss">
  @media (min-width: 800px) {
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
    word-break: break-word !important;
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
    padding: 20px;
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
      padding: 40px;
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
    ul, img{
      max-width: 100% !important;
    }
  }
  .lesson-topics .lesson-content > div {
    margin: 40px 0;
  }

  #audio {
    visibility: hidden;
  }

  .lesson-topics img{
    max-width: 100%;
    max-height: 100%;
  }
  .aplayer-lrc p{
    font-size: 16px !important;
  }
</style>
