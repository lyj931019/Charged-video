<template>
  <div class="pay-bg">
    <MyHeader/>
    <div >
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-8 p-2" v-if="courses">
            <div class="section">
              <p class="course-tips">{{$t('pay.preparing')}}&nbsp;<span style="color:#ee243c;">({{courses.buy_day}}&nbsp;{{$t('detail.days')}})</span></p>
              <h2 class="course-title">{{courses.name}}</h2>
              <!--<p class="course-time">Fall Term Starts September 24,2018/Duration,12 Weeks</p>-->
            </div>
            <div class="section">
              <div class="choose-title">
                <img src="../assets/img/right.png" alt="">{{$t('pay.payment')}}
              </div>
              <div class="form-group">
                <div class="custom-control custom-radio pay-type p-2 m-4">
                  <input type="radio" id="ali" name="payment" v-model="payType" class="custom-control-input" value="0" checked>
                  <label class="custom-control-label" for="ali">{{$t('pay.ali')}}</label>
                </div>
                <div class="custom-control custom-radio pay-type p-2 m-4">
                  <input type="radio" id="we" name="payment" v-model="payType" class="custom-control-input" value="1" checked>
                  <label class="custom-control-label" for="we">{{$t('pay.wechat')}}</label>
                </div>

              </div>
            </div>
            <!--<div class="section p-4">-->
              <!--<form>-->
                <!--<div class="form-group">-->
                  <!--<label for="name" class="label">{{$t('userCenter.nickname')}} *</label>-->
                  <!--<input type="text" v-model="name" class="form-control" id="name" >-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="col-12 col-md-6">-->
                    <!--<div class="form-group">-->
                      <!--<label for="addr" class="label">{{$t('userCenter.address')}} 1 *</label>-->
                      <!--<input type="text"  v-model="addr1" class="form-control" id="addr" >-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="col-12 col-md-6">-->
                    <!--<div class="form-group">-->
                      <!--<label for="addr2" class="label">{{$t('userCenter.address')}} 2</label>-->
                      <!--<input type="text" v-model="addr2" class="form-control" id="addr2" >-->
                    <!--</div>-->
                  <!--</div>-->

                  <!--<div class="col-12 col-md-6">-->
                    <!--<div class="form-group">-->
                      <!--<label for="country" class="label">{{$t('userCenter.country')}} *</label>-->
                      <!--<input type="text" v-model="country" class="form-control" id="country" >-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="col-12 col-md-6">-->
                    <!--<div class="form-group">-->
                      <!--<label for="city"  class="label">{{$t('userCenter.city')}} *</label>-->
                      <!--<input type="text" v-model="city" class="form-control" id="city" >-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="col-12 col-md-6">-->
                    <!--<div class="form-group">-->
                      <!--<label for="state" class="label">{{$t('pay.sp')}} *</label>-->
                      <!--<input type="text" v-model="state" class="form-control" id="state" >-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="col-12 col-md-6">-->
                    <!--<div class="form-group">-->
                      <!--<label for="code" class="label">{{$t('pay.postalCode')}} *</label>-->
                      <!--<input type="text" v-model="code" class="form-control" id="code" >-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="form-group">-->
                  <!--<label for="phone" class="label">{{$t('userCenter.phone')}} *</label>-->
                  <!--<input type="text" v-model="phone" class="form-control" id="phone" >-->
                  <!--<div id="emailHelp" class="form-text text-muted">{{$t('pay.questionOrder')}}</div>-->
                <!--</div>-->
              <!--</form>-->
            <!--</div>-->
          </div>
          <div class="col-12 col-md-4 p-2"  v-if="courses">
            <div class="section">
              <div class="choose-title mb-2">
                <img src="../assets/img/right.png" alt="">{{$t('pay.review')}}
              </div>
              <div class="checkout-course">
                <div class="checkout-course-title">
                  <span>{{courses.name}}</span>
                  <span>￥{{(courses.price/100).toFixed(2)}}</span>
                </div>
                <div>
                  <!--(3 Credits)<a href="#">Remove</a>-->
                </div>
              </div>
              <!--<div class="checkout-member">-->
                <!--<h6>-->
                  <!--Non-Refundable,Non-Transferable Online Course Registration Fee-->
                <!--</h6>-->
              <!--</div>-->
              <hr>
              <div class="checkout">
                <span class="check-price">
                  <b>{{$t('pay.total')}}</b> ￥{{(courses.price/100).toFixed(2)}}
                </span>
                <br>
                <button class="checkout-btn btn" @click="buyCourse">
                  {{$t('pay.checkout')}}
                </button>
              </div>
            </div>
            <p class="alert alert-danger" v-if="payErr">{{$t('pay.errTips')}}</p>
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
    <div class="modal fade" id="wechatPay" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content qr">
          <div class="qr-content">
            <div class="loading" v-if="loading">
              <img :src="'./static/img/loading.png'" alt="">
            </div>
            <div class="qrcode" id="qrcode"></div>
          </div>

          <button class="btn btn-outline-secondary" @click="cancelWechatPay">
            {{$t('common.cancel')}}
          </button>
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
  import QRCode from 'qrcodejs2'



  export default {
    name: 'pay',
    components: {...Common, Avatar, Icon},
    data() {
      return {
        courses: null,
        tips: '',
        icon_type: 'success',
        payType: '0',
        email:'',
        name:'',
        addr1:'',
        addr2:'',
        country:'',
        city:'',
        state:'',
        code:'',
        phone:'',
        // errTips:'',
        payErr:false,
        orderId:'',
        checkOrderTimer:null,
        succTimer:null,
        qrcode:null,
        loading:false
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
      checkForm(){
        return this.name && this.addr1 && this.country && this.city && this.state && this.code && this.phone;
      },
      // 打开二维码
      openQr(url){
        if(this.qrcode){
          this.qrcode.makeCode(url);
        }else{
          this.qrcode = new QRCode('qrcode', {
            width: 200,  // 设置宽度
            height: 200, // 设置高度
            text: url,
          })
        }
        this.loading =false;
      },
      async checkOrder(){
        let _this = this;
        await this.$http({
          method: 'get',
          url: 'v1/payment/'+_this.orderId,
        }).then(res=>{
          let code = res.data.state.code;
          if(code === 0){
             _this.tips = _this.$t('common.success');
             _this.icon_type = 'success';
            $('#payTips').modal('show');
            $('#wechatPay').modal('hide');
            _this.succTimer = setTimeout(()=>{
              $('#payTips').modal('hide');
              _this.$router.push({ name: 'userCenter'})
            },5000)
          }else{}
          return false;
        }).catch(err=>err);
        _this.checkOrderTimer = setTimeout(()=>{
          _this.checkOrder();
        },3000);
      },
      // 微信支付
      wechatPay(){
        let _this = this;
        this.loading = true;
        $('#wechatPay').modal('show');
        this.$http({
          method: 'post',
          url: 'v1/payment/native',
          data: {
            user_id: _this.getUserInfo.user_id,
            course_id: _this.courses.id,
          },
          transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
        }).then(res=>{
          let data = res.data.data;
          _this.orderId = data.order_no;
          _this.openQr(data.code_url);
          _this.checkOrder();
        })
      },
      // 取消微信支付
      cancelWechatPay(){
        $('#wechatPay').modal('hide');
        this.qrcode.clear();
        this.clearTimer();
      },
      // 清除查询订单的定时器
      clearTimer(){
        if(this.checkOrderTimer){
          clearTimeout(this.checkOrderTimer);
          this.checkOrderTimer = null;
        }
        if(this.succTimer){
          clearTimeout(this.succTimer);
          this.succTimer = null;
        }
      },
      buyCourse() {
        // this.payErr = !this.checkForm();
        // // return ;
        // if(this.payErr){
        //   // this.errTips = ''
        //   return ;
        // }
        if (this.getIsLogin) {
          let _this = this;
          console.log(this.payType)

          if(this.payType+'' === '1'){
            if(this.is_weixn()){
              this.pay_jsapi();
            }else{
              this.wechatPay();
            }

          }else{
            this.$http({
              method: 'post',
              url: 'v1/payment/page',
              data: {
                user_id: _this.getUserInfo.user_id,
                course_id: _this.courses.id,
                return_url: 'http://'+window.location.host+'/#/userCenter'
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
                // _this.tips = _this.$t('common.success');
                // _this.icon_type = 'success';
                window.open(res.data.data);
              } else {
                _this.tips = _this.$t('common.bought');
                _this.icon_type = 'fail';
              }
              // $('#payTips').modal('show');
//            _this.$router.push({ name: 'userCenter'})
            })
          }

        } else {
          this.gotoLogin();
        }
      },
      gotoLogin(){
        this.$router.push({ name: 'login'})
      },
      // 判断是不是微信浏览器打开
      is_weixn(){

        var ua = navigator.userAgent.toLowerCase();
        console.log(ua)
        if(ua.match(/MicroMessenger/i)=="micromessenger") {

          return true;

        } else {

          return false;

        }
      },
      //支付方法
      pay_jsapi(){
        //必须先等微信授权获取openid后
        if(!this.openid)
          return false;

        //进行JSAPI下单
        var api = "/payment/jsapi";
        var data = "openid=" + this.openid + "&url=" + location.href;
        this.$http.post(api, data).then(function(response){
          //判断结果
          if(response.data.state.code !== 0){
            alert("微信统一下单失败");
            return;
          }

          //提取接口返回
          var signature = response.data.data.payConfig;   //JSSDK签署配置
          var payConfig = response.data.data.payConfig;   //JSAPI支付配置

          //配置微信JSSDK
          wx.config({
            debug       : true, //开启调试模式(正式打包时请用false)
            appId       : signature.appId,
            timestamp   : signature.timestamp,
            nonceStr    : signature.nonceStr,
            signature   : signature.signature,
            jsApiList   : ['chooseWXPay']
          });
          //调起微信支付
          wx.ready(function(){
            wx.chooseWXPay({
              "timestamp" : payConfig.timeStamp,
              "nonceStr"  : payConfig.nonceStr,
              "package"   : payConfig.package,
              "signType"  : payConfig.signType,
              "paySign"   : payConfig.paySign,
              "success"   : function (res) {
                alert("支付完成");
              }
            });
          });
        });
      }
    },
    created(){

      if(this.is_weixn()){
        //定义this, 在异步方法中使用
        var self = this;

        //获取GET参数code
        var code = this.$url()["code"];

        //判断code参数是否存在
        if(code){
          //如果有code，则用这个code获取授权配置
          var api = "/payment/wechat-auth";
          var data = "code=" + code;
          this.$http.post(api, data).then(function(response){
            //获取返回的openid
            if(response.data.state.code === 0){
              self.openid = response.data.data;
              console.log("授权成功获取OPNEID：",self.openid);
            } else {
              console.log("授权失败CODE无效或过期")
            }
          });
        } else {
          //如果不存在，则获取微信OAUTH授权地址然后进行跳转
          var api = "/payment/wechat-auth-url";
          var data = "redirectUrl=" + location.href;
          this.$http.post(api, data).then(function(response){
            //跳转到微信授权页面(授权后会自动跳转回来)
            if(response.data.state.code === 0)
              location.href = response.data.data;
            else{}
            // alert("获取授权地址失败,请检查接口配置");
          });
        }

      }

    },
    beforeMount() {
      let num = this.$route.params.num;
      let _this = this;
      this.$http({
        method: 'get',
        url: 'v1/courses/' + num,
      }).then(res => {
        _this.courses = res.data.data;
      });
      this.name = this.getUserInfo.user_nickname;
      this.addr1 = this.getUserInfo.user_adderss;
      this.addr2 = this.getUserInfo.user_adderss2;
      this.country = this.getUserInfo.user_country;
      this.city = this.getUserInfo.user_city;
      this.phone = this.getUserInfo.user_phone;
    },
    beforeDestroy(){
      this.clearTimer();
    }
  }
</script>
<style scoped>
  .pay-bg{
    background:#e9ecef;
    outline: #e9ecef solid 999px;
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

  .checkout-member{
    border-top:2px solid #666;
    padding-top: 0.4rem;
    margin-top:0.2rem;
  }
  .checkout-member h6{
    font-weight: bold;
  }

  .modal-content.qr{
    background-color: #fff;
    padding:20px;
  }
  .qrcode{
    text-align: center;
    width: 200px;

  }

  .qr-content{
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;
    position: relative;
  }
  .loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: rgba(255,255,255,.9);
  }
  .loading img{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    animation: loading 2s linear infinite;
  }
  @keyframes loading {
    to{
      transform:rotate(0deg);
    }
    from{
      transform:rotate(-180deg);
    }
  }
</style>
