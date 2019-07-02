<template>
  <div>
    <div class="lesson-topic">
      <div class="topic-divider">
        {{$t('task.title')}}
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
          <template v-if="ueConfig">
            <vue-ueditor-wrap v-model="ueMsg" :config="ueConfig" :destroy="true"></vue-ueditor-wrap>
          </template>

          <!--<div id="summernote"></div>-->

          <div class="submit-btn">
            <span class="file-name" v-if="audioName">
              <b>{{$t('task.audioName')}}</b>:{{audioName}}
            </span>
            <b v-if="audioName && fileName" style="margin: 0px 1rem">|</b>
            <span class="file-name" v-if="fileName">
              <b>{{$t('task.fileName')}}</b>:{{fileName}}
            </span>
            <label for="audio_file">
              <span class="btn btn-primary">
                <img :src="'./static/img/audio.png'" alt="" class="submit-btn-img">
              </span>
              <input type="file" id="audio_file" style="display: none;" name="file" accept="audio/*" @change="chooseAudio($event)">
            </label>
            <label for="file">
              <span class="btn btn-info">
                <img :src="'./static/img/file.png'" alt="" class="submit-btn-img">
              </span>
              <input type="file" id="file" style="display: none;" name="file" @change="chooseFile($event)">
            </label>

            <button class="btn btn-secondary" type="button" @click="submitHomework">
              <img :src="'./static/img/submit.png'" alt="" class="submit-btn-img">
            </button>

          </div>
        </div>
        <div class="task" v-if="done && submits">
          <table></table>
          <div>
            <p>
              {{$t('task.yourAnswer')}}:
              <span v-if="submits.submitTime">{{submits.submitTime}}</span>
            </p>
            <div v-if="submits.submit_content" v-html="submits.submit_content"></div>
            <div class="task-file" v-if="submits.submit_file||submits.submit_audio">
              <a href="javascript:void(0);" v-if="submits.submit_audio" >
                <!--<img :src="'./static/img/audio-c.png'" alt="">-->
                <aplayer
                  :music="{
                      title: $t('learningCenter.homework'),
                      artist: getUserInfo.user_nickname,
                      src: submits.submit_audio,
                    }"
                  mutex
                  preload="true"
                  :float="true"
                />
              </a>
              <a :href="submits.submit_file" v-if="submits.submit_file">
                <img :src="'./static/img/file-c.png'" alt="">
              </a>
            </div>
          </div>
          <div>
            <p>
              {{$t('task.teacherComment')}}:
              <span v-if="submits.replyTime">{{submits.replyTime}}</span>
            </p>
            <div v-if="submits.reply_content" v-html="submits.reply_content"></div>
            <div style="color:#d81e06;font-weight: bold;font-size: 0.8rem;" v-else>
              {{$t('task.noContent')}}
            </div>
            <div class="task-file" v-if="submits.reply_file||submits.reply_audio">
              <a :href="submits.reply_audio" v-if="submits.reply_audio">
                <img :src="'./static/img/audio-c.png'" alt="">
              </a>
              <a :href="submits.reply_file" v-if="submits.reply_file">
                <img :src="'./static/img/file-c.png'" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- tips -->
    </div>
    <div class="modal fade" id="submit_task" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="submit_task_title">
              <Icon :type="icon_type"></Icon>
              {{tips}}
            </h5>
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
    <div class="modal fade" id="audio_err" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="audio_err_title">
              <Icon :type="'fail'"></Icon>
              {{$t('common.fail')}}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{$t('task.audioErr')}}</p>
          </div>
          <!--<div class="modal-footer">-->
          <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>-->
          <!--<button type="button" class="btn btn-primary" @click="deleteFavorites(deleteCourse.id)">确定</button>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <div class="submit-audio">

    </div>
  </div>
</template>

<script>
  import VueUeditorWrap from 'vue-ueditor-wrap'
  import {mapGetters, mapMutations} from 'vuex'
  import Icon from '../components/icon.vue'
  import Aplayer from 'vue-aplayer'

  export default {
    name: 'homework',
    components: {
     VueUeditorWrap,
      Icon,
      Aplayer
    },
    data() {
      return {
        msg: '',
        homework: null,
        done: true,
        submits: null,
        icon_type: 'success',
        tips: '',
        fileUrl: '',
        audioUrl: '',
        isSuccess:true,
        fileName:null,
        audioName:null,
        typeErr:false,
        ueMsg:'',
        ueConfig:{
          // 编辑器不自动被内容撑高
          autoHeightEnabled: false,
          // 初始容器高度
          initialFrameHeight: 240,
          // 初始容器宽度
          initialFrameWidth: '100%',
          // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
          serverUrl: '',
          // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
          UEDITOR_HOME_URL: '/static/UEditor/',
          //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
          toolbars:[['Undo', 'Redo','test']],
          elementPathEnabled : false,
          maximumWords: 5000
        },
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'getIsLogin',
        'getUserInfo',
      ])
    },
    methods: {
      ...mapMutations([
        'changeHomeworkList',
        'showLoading',
        'hideLoading'
      ]),
      chooseFile(event){
        this.fileName = event.target.files[0].name;

      },
      chooseAudio(event){
        this.audioName = event.target.files[0].name;
      },
      summernoteSubmit() { // 获取富文本内容
        // let content = $('#summernote').summernote('code');
        let content = this.ueMsg;
        return content;
      },
      getTaskAllInfo(id) {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/tasks/user/' + id + '?user_id=' + _this.getUserInfo.user_id,
        }).then(res => {
          if (res.data.state.code == 0) {
            _this.homework = res.data.data.task;
            _this.fileUrl = '';
            _this.audioUrl = '';
            if (res.data.data.submit) { // 如果该作业已经提交过了
              // $('#summernote').summernote('destroy');
              setTimeout(() => {
                _this.done = true;
                _this.submits = res.data.data;
              }, 100);
            } else { // 如果该作业还没做
              _this.submits = null;
              // setTimeout(() => {
              //   $('#summernote').summernote({
              //     height: 240,
              //     minHeight: 240,
              //     maxHeight: 240,
              //     disableDragAndDrop: true,
              //     shortcuts: false,
              //     popover: {}
              //   });
              // }, 100);
            }
          }

          _this.classRoomActive = false;
          _this.getSubmit(id);
        });
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
      getSubmit(id) { // 过去已经提交的作业
        let _this = this;
        this.$http({
          method: 'get',
          url: '/tasks/submits',
          params: {
            task_id: id,
            user_id: _this.getUserInfo.user_id
          }
        }).then(res => { // 已经提交作业了
          if (res.data.state.code == 0) {
            // $('#summernote').summernote('destroy');
            setTimeout(() => {
              _this.done = true;
              _this.submits = res.data.data;
            }, 100);

          } else {  // 没提交过作业了
            _this.done = false;
            _this.submits = null;
            // setTimeout(() => {
            //   $('#summernote').summernote({
            //     height: 240,
            //     minHeight: 240,
            //     maxHeight: 240,
            //     disableDragAndDrop: true,
            //     shortcuts: false,
            //     popover: {}
            //   });
            // }, 100)
          }
        });
      },
      showFail(){
        this.tips = this.$t('common.fail');
        this.icon_type = 'fail';
        if(!this.typeErr){
          $('#submit_task').modal('show');
        }
        this.hideLoading();
      },
      async submitHomework() { // 提交作业
        let _this = this;
        _this.isSuccess = true;
        _this.typeErr = false;
        let file_dom = document.getElementById('file');
        let aduio_dom = document.getElementById('audio_file');
        _this.showLoading();
        if (aduio_dom.files[0]) {
          await _this.uploadFile('audio',aduio_dom.files[0]);
        }
        if(!_this.isSuccess){
          _this.showFail();
          return false;
        }
        if (file_dom.files[0]) {
         await _this.uploadFile('file',file_dom.files[0]);
        }
        if(!_this.isSuccess){
          _this.showFail();
          return false;
        }

        let data = {
          user_id: _this.getUserInfo.user_id,
          task_id: _this.homework.id,
          submit_content: _this.summernoteSubmit()
        };
        if (_this.fileUrl.length > 0) {
          data['submit_file'] = _this.fileUrl;
        }
        if (_this.audioUrl.length > 0) {
          data['submit_audio'] = _this.audioUrl;
        }
        console.log('loading');
        await this.$http({
          method: 'post',
          url: '/tasks/submits',
          data: data,
          transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
        }).then(res => {
          if(res.data.state.code == 0){
            this.tips = this.$t('common.success');
            this.icon_type = 'success';
            $('#submit_task').modal('show');
            _this.changeList();
            _this.getTaskAllInfo(_this.$route.params.id);
          }else{
            _this.showFail();
          }
          _this.hideLoading();
        });
        return true;
      },
      changeList() {
        this.changeHomeworkList(true)
      },
      async uploadFile(type,file) {
        let _this = this;
        if(type=='audio'){
          let AllImgExt=".wav|.mp3|";
          let extName = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();//（把路径中的所有字母全部转换为小写）
          if(AllImgExt.indexOf(extName+"|")==-1) {
            _this.typeErr = true;
            $('#audio_err').modal('show');
            _this.isSuccess = false;
            return false;
          }
        }
        let param = new FormData(); //创建form对象
        param.append('file', file);
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }; //添加请求头


        await this.$http.post('upload/file', param, config).then(res => {
          if(res.data.state.code == 0){
            if(type=='file'){
              _this.fileUrl = res.data.data;
            }else{
              _this.audioUrl = res.data.data;
            }
            _this.isSuccess = true;
          }else{
            _this.isSuccess = false;
          }
          return true;
        },(err)=>{
          _this.isSuccess = false;
          return false;
        });
        return true;
      },
    },
    beforeMount() {

    },
    mounted() {
      // $('#summernote').summernote({
      //   height: 240,
      //   minHeight: 240,
      //   maxHeight: 240,
      //   disableDragAndDrop: true,
      //   shortcuts: false,
      //   popover: {}
      // });

      let id = this.$route.params.id;
      this.getTaskAllInfo(id);
    },
    beforeRouteUpdate(to, from, next) {
      this.getTaskAllInfo(to.params.id);
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
    min-height: 380px;
    /*overflow-y: auto;*/
    /*overflow-x: hidden;*/

  }

  .submit, .task {
    width: 100%;
    min-height: 358px;
    bottom: 0;
    left: 0;
    background-color: #e8e8e8;
    padding: 4px 20px;
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
    padding: 4px 0px;
    text-align: right;
  }
  .submit-btn>*{

  }
  .submit-btn-img {
    width: 20px;
  }

  .task {
  }

  .task > div {

    margin: 24px 0;
  }

  .task > div > p:nth-child(1) {
    font-size: 1rem;
    color: #000;
    margin-bottom: 0.1rem;
    line-height: 1rem;
    font-weight: bold;
  }

  .task > div > div {
    min-height: 120px;
    padding: 6px 20px;
    background-color: #fff;
  }
  .task > div > div.task-file{
    text-align: right;
    min-height: 24px;
  }
  .task > div > div.task-file img{
    width: 24px;
  }
  .file-name{
    font-size: 1rem;
    display: inline-block;
    max-width: 35%;
  }

  .submit-audio{
    width: 200px;
    margin: 0 auto;
  }
</style>
