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
                {{$t('userCenter.userCenter')}}
              </h1>
              <h4>{{$t('userCenter.userCenterContent')}}</h4>
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
              <p>{{$t('userCenter.knowMore')}}</p>
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
                {{$t('userCenter.myCourse')}}
                <span class="triangle"></span>
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p :class="{active:active=='favorites'}" @click="changeTab('favorites')">
                {{$t('userCenter.myFavorites')}}
                <span class="triangle"></span>
              </p>
            </div>
            <div class="col-12 col-md-3">
              <p :class="{active:active=='account' || active=='changeInfo' || active=='changePwd' }" @click="changeTab('account')">
                {{$t('userCenter.myAccount')}}
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
            <div class="col-12 col-lg-7 tab-container"  :class="{active:active=='course'}">
              <template v-if="lessonList">
                <template v-for="(item,index) in lessonList">
                  <div class="courseItem">
                    <router-link :to="{ name: 'learningCenter',params: {num:item.course.num}}">
                      {{item.course.name}}
                      <span class="try" v-if="item.try">({{$t('userCenter.tryCourse')}})</span>
                    </router-link>
                    <router-link class="delete" :to="{ name: 'pay',params: {num:item.course.num}}">
                      <img v-if="item.course.try" src="../assets/img/buy.png" alt="">
                    </router-link>
                  </div>
                </template>
              </template>
            </div>
            <div class="col-12 col-lg-7 tab-container"
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
            <div class="col-12 col-lg-7 tab-container"  :class="{active:active=='account'}">
              <div class="courseItem">
                <a class="nav-link" href="#" @click.prevent="changeTab('changeInfo')">
                  {{$t('userCenter.editDetails')}}
                </a>
              </div>
              <div class="courseItem">
                <a class="nav-link" href="#" @click.prevent="changeTab('changePwd')">
                  {{$t('userCenter.changeThePassword')}}
                </a>
              </div>
            </div>
            <div class="col-12 col-lg-7 tab-container change-container"  :class="{active:active=='changePwd'}">
              <h3 class="change-title">{{$t('userCenter.changeThePassword')}}</h3>
              <p class="alert alert-danger" v-if="isPwdChangeErr">{{PwdChangeErrTips}}</p>
              <form class="change-content">
                <div class="form-group">
                  <label for="oldpwd">{{$t('userCenter.old')}}{{$t('userCenter.password')}}:</label>
                  <input type="password" v-model="oldPwd" class="form-control" id="oldpwd" aria-describedby="emailHelp" :placeholder="$t('placeholder.pwd_old')">
                </div>
                <div class="form-group">
                  <label for="newpwd">{{$t('userCenter.fresh')}}{{$t('userCenter.password')}}:</label>
                  <input type="password" v-model="newPwd" class="form-control" id="newpwd" :placeholder="$t('placeholder.pwd')">
                </div>
                <div class="form-group">
                  <label for="confirmpwd">{{$t('userCenter.confirm')}}{{$t('userCenter.password')}}:</label>
                  <input type="password" v-model="confirmPwd" class="form-control" id="confirmpwd" :placeholder="$t('placeholder.pwd_again')">
                </div>
                <div class="btns">
                  <button class="btn btn-outline-secondary" type="button" @click="changeTab('account')">{{$t('common.cancel')}}</button>
                  <button class="btn btn-outline-primary" type="button" @click="changUserPwd()">{{$t('common.sure')}}</button>
                </div>
              </form>

            </div>
            <div class="col-12 col-lg-7 tab-container"  :class="{active:active=='changeInfo'}">
              <h3 class="change-title">{{$t('userCenter.editDetails')}}</h3>

              <form class="change-content">
                <div class="form-group">
                  <label for="nickname">{{$t('userCenter.nickname')}}:</label>
                  <input type="text" v-model="nickName" class="form-control" id="nickname" aria-describedby="emailHelp" :placeholder="$t('placeholder.nickname')">
                </div>


                <div class="form-group">
                  <span style="margin-right: 1rem;">{{$t('userCenter.sex')}}:</span>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="sex1" name="sex" v-model="sex" class="custom-control-input" value="1">
                    <label class="custom-control-label" for="sex1">{{$t('userCenter.male')}}</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="sex2" name="sex" v-model="sex" class="custom-control-input" value="0">
                    <label class="custom-control-label" for="sex2">{{$t('userCenter.female')}}</label>
                  </div>
                </div>

                <hr>

                <div class="form-group">
                  <label for="phone">{{$t('userCenter.phone')}}:</label>
                  <input type="text" v-model="phone" class="form-control" id="phone" :placeholder="$t('placeholder.phone')">
                </div>


                <div class="form-group">
                  <label for="adderss1">{{$t('userCenter.address')}} 1:</label>
                  <input type="text" v-model="adderss" class="form-control" id="adderss1" :placeholder="$t('placeholder.address')">
                </div>
                <div class="form-group">
                  <label for="adderss2">{{$t('userCenter.address')}} 2:</label>
                  <input type="text" v-model="adderss2" class="form-control" id="adderss2" :placeholder="$t('placeholder.address')">
                </div>

                <div class="form-group">
                  <label for="country">{{$t('userCenter.country')}}:</label>
                  <input type="text" v-model="country" class="form-control" id="country" :placeholder="$t('placeholder.address')">
                </div>
                <div class="form-group">
                  <label for="city">{{$t('userCenter.city')}}:</label>
                  <input type="text" v-model="city" class="form-control" id="city" :placeholder="$t('placeholder.address')">
                </div>
                <div class="btns">
                  <button class="btn btn-outline-secondary" type="button" @click="changeTab('account')">{{$t('common.cancel')}}</button>
                  <button class="btn btn-outline-primary" type="button" @click="changeUseInfo">{{$t('common.sure')}}</button>
                </div>
              </form>
            </div>

            <div class="col-12 col-lg-1"></div>
            <div class="col-12 col-lg-4">
              <div class="courseInfo">
                <div>
                  <h4>{{$t('userCenter.schoolLink')}}</h4>
                  <p><a href="#">{{$t('userCenter.schoolLink')}}</a></p>
                  <p><a href="#">{{$t('userCenter.academicPolicy')}}</a></p>
                  <p><a href="#">{{$t('userCenter.frequentlyAskedQuestions')}}</a></p>
                  <p><a href="#">{{$t('userCenter.taxInformation')}}</a></p>
                  <p><a href="#">{{$t('userCenter.technicalAssistance')}}</a></p>
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
      <!--<a href="#" class="box" @click.prevent="changeTab('course')">我的课程</a>-->
      <a href="#" class="box" @click.prevent="changeTab('course')"><img src="../assets/img/course.png" alt=""></a>
      <!--<a href="#" class="box" @click.prevent="changeTab('favorites')">我的收藏</a>-->
      <a href="#" class="box" @click.prevent="changeTab('favorites')"><img src="../assets/img/fav.png" alt=""></a>
      <!--<a href="#" class="box" @click.prevent="changeTab('account')">我的账户</a>-->
      <a href="#" class="box" @click.prevent="changeTab('account')"><img src="../assets/img/user.png" alt=""></a>
    </div>
    <!--</div>-->
    <div class="modal fade" id="deleteConfirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" v-if="deleteCourse">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <Icon :type="'error'"></Icon>
              {{$t('common.warning')}}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{$t('userCenter.deleteCollection')}}:{{deleteCourse.name}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{$t('common.cancel')}}</button>
            <button type="button" class="btn btn-primary" @click="deleteFavorites(deleteCourse.id)">{{$t('common.sure')}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="changeSuccess" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="changeSuccessTitle">
              <Icon :type="'success'"></Icon>
              {{$t('common.success')}}
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
  import Icon from '../components/icon.vue'
  import {mapGetters} from 'vuex'
  import Components from '../components/index'
  import { mapMutations } from 'vuex'
  export default {
    name: 'userCenter',
    components: {...Components,Icon},
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
        adderss:'',
        isPwdChangeErr:false,
        PwdChangeErrTips:'',
        adderss2:'',
        city:'',
        country:''
      }
    },
    methods: {
      ...mapMutations([
        'changeLoginStatus', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        'changeUserInfo' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      ]),
      goToStudyPage() {
//        this.$router.push({name: 'learningCenter'})
      },
      changeTab(tab) {
        this.active = tab;
        if (tab == 'favorites' && !this.favoritesList) {
          this.getFavorites();
        }else if(tab == 'changeInfo'){
          this.nickName = this.getUserInfo.user_nickname || '';
          this.sex= this.getUserInfo.user_sex;
          this.phone= this.getUserInfo.user_phone || '';
          this.adderss= this.getUserInfo.user_adderss || '';
          this.adderss2= this.getUserInfo.user_adderss2 || '';
          this.city= this.getUserInfo.user_city || '';
          this.country= this.getUserInfo.user_country || '';
        }else if(tab == 'changePwd'){
          this.isPwdChangeErr = false;
          this.PwdChangeErrTips = '';
        }
      },
      getFavorites() {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/favorites?user_id=' + _this.getUserInfo.user_id,
        }).then(res => {
          _this.favoritesList = res.data.data;
        })
      },
      confirmDelete(course){
        this.deleteCourse = course;
        $('#deleteConfirm').modal('show');
      },
      deleteFavorites(course_id) {
        let _this = this;
        let params = {
          user_id: _this.getUserInfo.user_id,
          course_id
        };
        let data = params;
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
          if (parseInt(res.data.state.code) === 0) {
            _this.getFavorites();
            $('#deleteConfirm').modal('hide');
            _this.deleteCourse = null;
          }
        });
      },
      changUserPwd(){
        if(this.newPwd == this.confirmPwd){
          let _this = this;
          this.$http({
            method: 'put',
            url: '/users/modify-password',
            data: {
              email: _this.getUserInfo.user_email,
              password: _this.oldPwd,
              password_new: _this.newPwd,
              password_again: _this.confirmPwd,
            },
            transformRequest: [function (data) {
              let ret = ''
              for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
            }]
          }).then(res => {
            let code = res.data.state.code;
            _this.oldPwd = _this.newPwd = _this.confirmPwd = '';
            if(code == 0){
              $('#changeSuccess').modal('show');
            }else{
              _this.isPwdChangeErr = true;
              _this.PwdChangeErrTips = this.$t('common.pwdErr');
            }
          })
        }else{
          this.isPwdChangeErr = true;
          this.PwdChangeErrTips = this.$t('common.twoPwdErr');
        }

      },
      changeUseInfo(){
        let _this = this;
        this.$http({
          method: 'put',
          url: '/users/'+_this.getUserInfo.user_id,
          data: {
            id:_this.getUserInfo.user_id,
            nickname: _this.nickName,
            sex: _this.sex,
            phone: _this.phone,
            adderss_1: _this.adderss,
            adderss_2: _this.adderss2,
            city:_this.city,
            country:_this.country
          },
          transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }]
        }).then(res => {
          let code = res.data.state.code;
          if(code == 0){
            $('#changeSuccess').modal('show');
            _this.changeUserInfo(res.data.data);
            _this.nickName = _this.getUserInfo.user_nickname;
            _this.sex= _this.getUserInfo.user_sex;
            _this.phone= _this.getUserInfo.user_phone;
            _this.adderss= _this.getUserInfo.user_adderss;
            _this.adderss2= _this.getUserInfo.user_adderss2;
            _this.city= _this.getUserInfo.user_city;
            _this.country= _this.getUserInfo.user_country;
          }else{
            $('#changeSuccess').modal('show');
          }
        })
      }
    },
    mounted() {
      let _this = this;
      console.log(_this.getIsLogin);
      if (localStorage.getItem('isLogin')) {
        this.$http({
          method: 'get',
          url: '/users/courses?user_id=' + localStorage.getItem('user_id'),
        }).then(res => {
          _this.lessonList = res.data.data;
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
  .course .delete img{
    width: 1.8rem;
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
