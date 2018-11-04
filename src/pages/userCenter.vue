<template>
  <div>
    <div class="body">
      <MyHeader/>
    </div>

    <div style="background-color: #25353c;" class="centerTitle">
      <div class="body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h1>
                个人中心
              </h1>
              <h4>继续我的学习之旅</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #cbf3eb;" class="knowMore">
      <div class="body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 text-center">
              <p>点击此处了解更多</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #e2e3e5;" class="userList">
      <div class="body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-3">
              <p :class="{active:active=='course'}" @click="changeTab('course')">
                我的课程
                <span class="triangle"></span>
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p :class="{active:active=='favorites'}" @click="changeTab('favorites')">
                我的收藏
                <span class="triangle"></span>
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p :class="{active:active=='account'}" @click="changeTab('account')">
                我的账户
                <span class="triangle"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="course">
      <div class="body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-8 tab-container" style="margin-bottom: 2rem;" :class="{active:active=='course'}">
              <template v-if="lessonList">
                <template v-for="(item,index) in lessonList">
                  <div class="courseItem">
                    <router-link :to="{ name: 'userLesson'}">
                      <a class="nav-link" href="#">
                        {{item.course.name}}
                      </a>
                    </router-link>

                  </div>
                </template>
              </template>
            </div>
            <div class="col-12 col-lg-8 tab-container" style="margin-bottom: 2rem;"
                 :class="{active:active=='favorites'}">
              <template v-if="favoritesList">
                <template v-for="(item,index) in favoritesList">
                  <div class="courseItem">
                    <span class="delete" @click="deleteFavorites(item.course_id)">删除</span>
                    <router-link :to="{name: 'detail', params: { num: item.course.num } }">
                      <a class="nav-link" href="#">
                        {{item.course.name}}
                      </a>
                    </router-link>

                  </div>
                </template>
              </template>
            </div>
            <div class="col-12 col-lg-8 tab-container" style="margin-bottom: 2rem;" :class="{active:active=='account'}">
              <div class="courseItem">
                  <a class="nav-link" href="#">
                    更改密码
                  </a>
              </div>
              <div class="courseItem">
                <a class="nav-link" href="#">
                  编辑姓名和电子邮件地址
                </a>
              </div>
              <div class="courseItem">
                <a class="nav-link" href="#">
                  修改电子邮件偏好
                </a>
              </div>
            </div>
            <div class="col-12 col-lg-1"></div>
            <div class="col-12 col-lg-3">
              <div class="courseInfo">
                <div>
                  <h4>学校链接</h4>
                  <p><a href="#">学校日历</a></p>
                  <p><a href="#">学术政策</a></p>
                  <p><a href="#">常见问题解答</a></p>
                  <p><a href="#">税务信息</a></p>
                  <p><a href="#">技术援助</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <MyFooter/>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Components from '../components/index'

  export default {
    name: 'userCenter',
    components: Components,
    data() {
      return {
        lessonList: null,
        favoritesList: null,
        active: 'course'
      }
    },
    methods: {
      goToStudyPage() {
        this.$router.push({name: 'userLesson'})
      },
      changeTab(tab) {
        this.active = tab;
        if (tab == 'favorites' && !this.favoritesList) {
          this.getFavorites();
        }
      },
      getFavorites() {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/favorites?user_id=' + _this.getUserInfo.user_id,
        }).then(res => {
          console.log(res.data)
          _this.favoritesList = res.data.data;
        })
      },
      deleteFavorites(course_id){
        let _this = this;
        let params = {
          user_id:_this.getUserInfo.user_id,
          course_id
        }
        this.$http.delete("/favorites", {data: params}).then(res => {
          console.log(res.data);
          if(parseInt(res.data.state.code) === 0){
            _this.getFavorites();
          }
        })
      }
    },
    beforeMount() {
      let _this = this;
      console.log(_this.getUserInfo.user_id)
      this.$http({
        method: 'get',
        url: '/users/courses?user_id=' + _this.getUserInfo.user_id,
      }).then(res => {
        console.log(res.data)
        _this.lessonList = res.data.data;
        console.log(_this.lessonList)
      })
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'getIsLogin',
        'getUserInfo'
      ])
    }

  }
</script>

<style scoped>
  .centerTitle {
    padding-top: 3rem;
  }

  .centerTitle h1 {
    color: #ffffff;
  }

  .centerTitle h4 {
    color: #f0202e;
    margin-bottom: 5rem;
  }

  .knowMore {
    padding: 1rem 0;
  }

  .knowMore p {
    color: #078baa;
    margin-bottom: 0;
  }

  .userList {
    padding: 1rem 0;
  }

  .userList p {
    font-weight: bold;
    margin-bottom: 0;
    position: relative;
    cursor: pointer;
  }

  .triangle {
    position: absolute;
    bottom: -16px;
    left: 18px;
    margin: auto;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    display: none;
  }

  .userList p.active .triangle {
    display: block;
  }

  @media (max-width: 768px) {
    .userList p.active .triangle {
      display: none;
    }

    .userList p {
      text-align: center;
    }
  }

  .tab-container {
    display: none;
  }

  .tab-container.active {
    display: block;
  }

  .course {
    padding: 0.4rem 0;
    min-height: 240px;
    margin-bottom: 5rem;
    position: relative;
  }

  .courseItem {
    padding: 0.4rem 0;
    border-bottom: 1px solid #ccc;
  }

  .course a {
    font-weight: bold;
    font-size: 1rem;
    /*margin-right: 4rem;*/
  }
  .course .delete{
    position: absolute;
    color: #f0202e;
    line-height: 2.4rem;
    cursor: pointer;
    z-index: 20;
    right: 2rem;
  }
  .courseItem:hover {
    background-color: #ccc;
  }

  .courseInfo {
    padding: 0.5rem 1.6rem;
  }

  .courseInfo > div {
    background-color: #ccc;
    padding: 1rem;
  }

  .courseInfo h4 {
    margin-bottom: 1rem;
  }
</style>
