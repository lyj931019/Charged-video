<template>
  <div>
    <MyHeader/>
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-8 p-2" v-if="courses">
            <div class="section">
              <p class="course-tips">您正准备购买</p>
              <h2 class="course-title">{{courses.name}}</h2>
              <p class="course-time">Fall Term Starts September 24,2018/Duration,12 Weeks</p>
            </div>
            <div class="section">
              <div class="choose-title">
                <img src="../assets/img/right.png" alt="">Choose Payment Method
              </div>
              <div class="form-group">
                <div class="custom-control custom-radio pay-type p-2 m-4">
                  <input type="radio" id="pay" name="sex" v-model="payType" class="custom-control-input" value="1" checked>
                  <label class="custom-control-label" for="pay">Wechat Pay</label>
                </div>
              </div>
            </div>
            <div class="section p-4">
              <form>
                <div class="form-group">
                  <label for="name" class="label">First and Last Name *</label>
                  <input type="email" class="form-control" id="name" >
                </div>
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label for="addr" class="label">Address Line 1*</label>
                      <input type="text" class="form-control" id="addr" >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label for="addr2" class="label">Address Line 2</label>
                      <input type="text" class="form-control" id="addr2" >
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label for="country" class="label">Country *</label>
                      <input type="text" class="form-control" id="country" >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label for="city" class="label">City *</label>
                      <input type="text" class="form-control" id="city" >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label for="state" class="label">State/Province *</label>
                      <input type="text" class="form-control" id="state" >
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <label for="code" class="label">Postal Code *</label>
                      <input type="text" class="form-control" id="code" >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="phone" class="label">Phone *</label>
                  <input type="email" class="form-control" id="phone" >
                  <div id="emailHelp" class="form-text text-muted">Used only in event of question about order</div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2">
            <div class="section">
              <div class="choose-title mb-2">
                <img src="../assets/img/right.png" alt="">Review Cart and Checkout
              </div>
              <div class="checkout-course">
                <div class="checkout-course-title">
                  <span>1 Olart-310 3D Design with </span>
                  <span>$1,572.00</span>
                </div>
                <div>
                  (3 Credits)<a href="#">Remove</a>
                </div>
              </div>
              <hr>
              <div class="checkout">
                <span class="check-price">
                  <b>Total</b> $1,572.00
                </span>
                <br>
                <button class="checkout-btn btn">
                  Checkout
                </button>
              </div>
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
        payType: '1'
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
        console.log(res.data);
      })
    },
  }
</script>
<style scoped>
  .jumbotron{
    border-top: 2px solid #d2d2d2;
  }
  .section {
    background-color: #fff;
    margin-bottom: .5rem;
    padding: 1rem;
  }

  .course-tips{
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .course-title{
    font-weight: bold;
  }
  .course-time{
    font-size: 1.05rem;
  }
  .choose-title{
    font-weight: bold;
    font-size: 1.2rem;
  }
  .choose-title img{
    width: 1.2rem;
    vertical-align: top;
    margin-right: 0.5rem;
    margin-top: 1.5px;
  }

  .pay-type{
    font-size: 1rem;
  }
  .pay-type:hover{
    background-color: #eee;
  }
  .label{
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.1rem;
  }
  .checkout{
    text-align: right;
    font-size: 1.3rem;
  }
  .check-price{
    display: inline-block;
    padding: 0.5rem 1rem;
    text-align: center;
  }
  .checkout-btn{
    font-size: 1.2rem;
    padding: 0.5rem 3rem;
    background-color: #d81e06;
    color: #ffffff;
  }
  .checkout-course{
    background-color: #e8e8e8;
    padding: 1rem;
  }
  .checkout-course-title{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .checkout-course-title>span:nth-child(1){
    max-width: 60%;
    font-weight: bold;
  }
</style>
