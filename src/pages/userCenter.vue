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
    <div style="background-color: #e2e3e5;" class="userList  d-none d-md-block">
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
              <p :class="{active:active=='account' || active=='changeInfo' || active=='changePwd' }" @click="changeTab('account')">
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
            <div class="col-12 col-lg-8 tab-container"  :class="{active:active=='course'}">
              <template v-if="lessonList">
                <template v-for="(item,index) in lessonList">
                  <div class="courseItem">
                    <router-link :to="{ name: 'learningCenter',params: {num:item.course.num}}">
                      {{item.course.name}}
                      <span class="try" v-if="item.course.try">(试用)</span>
                    </router-link>
                    <img v-if="item.course.try" src="../assets/img/buy.png" class="delete" alt="">
                  </div>
                </template>
              </template>
            </div>
            <div class="col-12 col-lg-8 tab-container"
                 :class="{active:active=='favorites'}">
              <template v-if="favoritesList">
                <template v-for="(item,index) in favoritesList">
                  <div class="courseItem">
                    <router-link :to="{name: 'detail', params: { num: item.course.num } }">
                        {{item.course.name}}
                    </router-link>
                    <img src="../assets/img/delete.png" @click="confirmDelete(item.course)" class="delete" alt="">
                  </div>
                </template>
              </template>
            </div>
            <div class="col-12 col-lg-8 tab-container"  :class="{active:active=='account'}">
              <div class="courseItem">
                <a class="nav-link" href="#" @click.prevent="changeTab('changeInfo')">
                  编辑详细信息
                </a>
              </div>
              <div class="courseItem">
                <a class="nav-link" href="#" @click.prevent="changeTab('changePwd')">
                  更改密码
                </a>
              </div>
            </div>
            <div class="col-12 col-lg-8 tab-container change-container"  :class="{active:active=='changePwd'}">
              <h3 class="change-title">修改密码</h3>

              <form class="change-content">
                <div class="form-group">
                  <label for="oldpwd">原密码:</label>
                  <input type="password" v-model="oldPwd" class="form-control" id="oldpwd" aria-describedby="emailHelp" placeholder="请输入原密码">
                </div>
                <div class="form-group">
                  <label for="newpwd">新密码</label>
                  <input type="password" v-model="newPwd" class="form-control" id="newpwd" placeholder="请输入新密码">
                </div>
                <div class="form-group">
                  <label for="confirmpwd">确认密码</label>
                  <input type="password" v-model="confirmPwd" class="form-control" id="confirmpwd" placeholder="请再次输入新密码">
                </div>
                <div class="btns">
                  <button class="btn btn-outline-secondary" type="button" @click="changeTab('account')">取消</button>
                  <button class="btn btn-outline-primary" type="button">确定</button>
                </div>
              </form>

            </div>
            <div class="col-12 col-lg-8 tab-container"  :class="{active:active=='changeInfo'}">
              <h3 class="change-title">修改详细信息</h3>

              <form class="change-content">
                <div class="form-group">
                  <label for="nickname">昵称:</label>
                  <input type="text" v-model="nickName" class="form-control" id="nickname" aria-describedby="emailHelp" placeholder="请输入新的昵称">
                </div>
                <div class="form-group">
                  <span style="margin-right: 1rem;">性别:</span>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="sex1" name="sex" class="custom-control-input">
                    <label class="custom-control-label" for="sex1" v-model="sex" value="1">男</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="sex2" name="sex" class="custom-control-input">
                    <label class="custom-control-label" for="sex2" v-model="sex" value="0">女</label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone">电话:</label>
                  <input type="text" v-model="phone" class="form-control" id="phone" placeholder="请输入电话号码">
                </div>
                <div class="form-group">
                  <label for="adderss1">地址:</label>
                  <input type="text" v-model="adderss" class="form-control" id="adderss1" placeholder="请输入地址">
                </div>
                <div class="btns">
                  <button class="btn btn-outline-secondary" type="button" @click="changeTab('account')">取消</button>
                  <button class="btn btn-outline-primary" type="button">确定</button>
                </div>
              </form>
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

    <!--<div class="body">-->
      <MyFooter/>
    <div class="d-md-none course-footer">
      <!--<a href="#" class="box">{{$t('header.userCenter')}}</a>-->
      <a href="#" class="box" @click.prevent="changeTab('course')">我的课程</a>
      <a href="#" class="box" @click.prevent="changeTab('favorites')">我的收藏</a>
      <a href="#" class="box" @click.prevent="changeTab('account')">我的账户</a>
    </div>
    <!--</div>-->
    <div class="modal fade" id="deleteConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" v-if="deleteCourse">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">警告</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否删除:{{deleteCourse.name}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="deleteFavorites(deleteCourse.id)">确定</button>
          </div>
        </div>
      </div>
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
        active: 'course',
        deleteCourse:null,
        oldPwd:'',
        newPwd:'',
        confirmPwd:'',
        nickName:'',
        sex:'1',
        phone:'',
        adderss:''
      }
    },
    methods: {
      goToStudyPage() {
//        this.$router.push({name: 'learningCenter'})
      },
      changeTab(tab) {
        this.active = tab;
        if (tab == 'favorites' && !this.favoritesList) {
          this.getFavorites();
        }else if(tab == 'changeInfo'){
          console.log(123);
          this.nickName = this.getUserInfo.user_nickname;
          this.sex= this.getUserInfo.user_sex;
          this.phone= this.getUserInfo.user_phone;
          this.adderss= this.getUserInfo.user_adderss;
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
      confirmDelete(course){
        this.deleteCourse = course;
        console.log(this.deleteCourse);
        $('#deleteConfirm').modal('show');
      },
      deleteFavorites(course_id) {
        let _this = this;
        let params = {
          user_id: _this.getUserInfo.user_id,
          course_id
        };
        let data = params;
        console.log(params)
        this.$http({
          url: "/favorites",
          data,
          method: 'delete',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }]
        }).then(res => {
          console.log(res.data);
          if (parseInt(res.data.state.code) === 0) {
            console.log('lalala');
            _this.getFavorites();
            $('#deleteConfirm').modal('hide');
            _this.deleteCourse = null;
          }
        });
      }
    },
    beforeMount() {
      let _this = this;
      if (_this.getIsLogin) {
        this.$http({
          method: 'get',
          url: '/users/courses?user_id=' + _this.getUserInfo.user_id,
        }).then(res => {
          console.log(res.data)
          _this.lessonList = res.data.data;
          console.log(_this.lessonList)
        })
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
    margin-bottom: 2rem
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

  .courseItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .courseItem span.try {
    color: #cf1027;
  }

  .courseItem img.try {
    width: 1.6rem;
    cursor: pointer;
  }
  .courseItem img.delete {
    width: 1.6rem;
    cursor: pointer;
  }

  .course a {
    font-weight: bold;
    font-size: 1rem;
    /*margin-right: 4rem;*/
  }

  .course .delete {
    position: absolute;
    color: #f0202e;
    line-height: 2.4rem;
    cursor: pointer;
    z-index: 20;
    right: 2rem;
  }

  .courseItem:hover {
    /*background-color: #ccc;*/
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



  .change-container{}
  .change-title{
    padding: 2rem 0;
  }
  .change-content{
    font-size: 1.1rem;
  }
  .btns{
    text-align: right;
    padding-top: 1rem;
  }
  .btns .btn{
    margin-right: 2rem;
  }

  .course-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 0em 0em 2rem rgba(0,0,0,0.45);
    background-color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .course-footer .box{
    padding: 1rem;
    background-color: #fff;
    text-align: center;
    border-right: 2px solid #eff1f3;
    display: inline-block;
    width: 24%;
    box-sizing: border-box;
    flex: auto;
  }
  .course-footer .box:last-child{
    border:none;
  }
</style>
