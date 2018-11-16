<template>
  <div>
    <MyHeader/>
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 section p-5" v-if="courses">
            <h1>{{courses.name}}</h1>
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
            <!--<div class="col-12 col-lg-8 order-lg-1 order-2 mt-5" v-html="courses.abstract"></div>-->
            <div class="mt-5">
              <div  v-for="(lesson,index) in courses.lessons">
                <p class="lesson-title">
                <span>
                    Lesson {{lesson.lesson}}
                  </span>
                  <strong>{{lesson.title}}&nbsp;</strong>
                </p>
              </div>
            </div>

            <hr class="mt-5">
            <h3>
              {{$t('pay.total')}}&nbsp;&nbsp;:&nbsp;&nbsp;¥{{courses.price}}
            </h3>
            <div class="text-center">
              <span class="loginBtn" @click="buyCourse">{{$t('pay.checkout')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MyFooter/>
    <div class="modal fade" id="payTips" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="payTipsTitle">
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
  </div>
</template>

<script>
  import Avatar from '../components/avatar.vue'
  import Icon from '../components/icon.vue'
  import Common from '../components/common'
  import {mapGetters} from 'vuex'

  export default {
    name: 'pay',
    components: {...Common, Avatar, Icon},
    data() {
      return {
        courses: null,
        tips: '',
        icon_type: 'success',
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
      buyCourse() {
        if (this.getIsLogin) {
          let _this = this;
          this.$http({
            method: 'post',
            url: '/courses/buy',
            data: {
              user_id: _this.getUserInfo.user_id,
              course_id: _this.courses.id
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }],
          }).then(res => {
            if (res.data.state.code == 0) {
              _this.tips = _this.$t('common.success');
              _this.icon_type = 'success';
            } else {
              _this.tips = _this.$t('common.bought');
              _this.icon_type = 'fail';
            }
            $('#payTips').modal('show');
//            _this.$router.push({ name: 'userCenter'})
          })
        } else {
          this.gotoLogin();
        }
      },
      gotoLogin(){
        this.$router.push({ name: 'login'})
      },
    },
    beforeMount() {
      let num = this.$route.params.num;
      let _this = this;
      this.$http({
        method: 'get',
        url: '/courses/' + num,
      }).then(res => {
        _this.courses = res.data.data;
      })
    },
  }
</script>
<style scoped>
  .section {
    background-color: #fff;
  }

  .loginBtn {
    border: none;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    padding: 15px;
    -webkit-appearance: none;
    text-align: center;
    background: rgb(216, 17, 24);
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 0 rgb(176, 13, 19);
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 3px;
  }

  .loginBtn:hover {
    background: rgb(176, 13, 19);
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 0 rgb(176, 13, 19);
    text-decoration: none;
  }
</style>
