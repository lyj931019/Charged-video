<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-15 23:25:35
 * @LastEditTime: 2019-08-24 17:35:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <MyHeader/>
    <div class="container-fluid">
      <!--<h1 class="about-header">{{$t('about.title')}}</h1>-->
      <h1 class="about-header" v-show="active==='AboutUs'">{{$t('about.aboutUs')}}</h1>
      <h1 class="about-header" v-show="active==='TermsOfUse'">{{$t('about.termsOfUse')}}</h1>
      <h1 class="about-header" v-show="active==='Privacy'">{{$t('about.privacy')}}</h1>
      <h1 class="about-header" v-show="active==='Support'">{{$t('about.support')}}</h1>

      <div class="row about-container">

        <div class="col-12 col-md-4 col-lg-3 about-aside">
          <ul class="aside-list">
            <!--<li class="aside-item" :class="{active:active==='CompanyProfile'}" @click="changePage('CompanyProfile')">-->
              <!--{{$t('about.companyProfile')}}-->
            <!--</li>-->
            <!--<li class="aside-item" :class="{active:active==='Tutorial'}" @click="changePage('Tutorial')">-->
              <!--{{$t('about.learningTutorial')}}-->
            <!--</li>-->
            <!--<li class="aside-item" :class="{active:active==='UserAgreement'}" @click="changePage('UserAgreement')">-->
              <!--{{$t('about.userAgreement')}}-->
            <!--</li>-->
            <!--<li class="aside-item" :class="{active:active==='PaymentAgreement'}" @click="changePage('PaymentAgreement')">-->
              <!--{{$t('about.paymentAgreement')}}-->
            <!--</li>-->
            <!--<li class="aside-item" :class="{active:active==='Methods'}" @click="changePage('Methods')">-->
              <!--{{$t('about.methods')}}-->
            <!--</li>-->
            <li class="aside-item" :class="{active:active==='AboutUs'}" @click="gotoPage('AboutUs')">
              {{$t('about.aboutUs')}}
            </li>
            <li class="aside-item" :class="{active:active==='TermsOfUse'}" @click="gotoPage('TermsOfUse')">
              {{$t('about.termsOfUse')}}
            </li>
            <li class="aside-item" :class="{active:active==='Privacy'}" @click="gotoPage('Privacy')">
              {{$t('about.privacy')}}
            </li>
            <li class="aside-item" :class="{active:active==='Support'}" @click="gotoPage('Support')">
              {{$t('about.support')}}
            </li>
            <!--<li class="aside-item" :class="{active:active==='CopyrightPolicy'}" @click="changePage('CopyrightPolicy')">-->
              <!--{{$t('about.copyrightPolicy')}}-->
            <!--</li>-->

          </ul>
          <!--<div class="d-none d-md-block">-->
            <!--<Guidance></Guidance>-->
          <!--</div>-->

        </div>
        <div class="col-12 col-md-8 col-lg-9 about-section">
          <div class="row">
            <div class="col-1 d-none d-md-block"></div>
            <div class="col-12 col-md-11" style="overflow: auto">
              <template v-if="pages">
                <div class="about-content" v-for="(page,index) in pages" :key="page.name">
                  <div :class="{active:active===page.name}">
                    <!--<h1>{{page.title}}</h1>-->
                    <template v-if="page.content">
                      <div v-html="page.content" v-show="getLang == 'zh'"></div>
                      <div v-html="page.content_en" v-show="getLang == 'en'"></div>
                    </template>
                    <template v-else>
                      <div :class="{active:active===page.name}">{{$t('common.noContent')}}</div>
                    </template>
                  </div>

                </div>
              </template>


            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="d-block d-md-none">-->
      <!--<Guidance></Guidance>-->
    <!--</div>-->
    <MyFooter class="pt-0 pt-md-4"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Common from '../components/common'
  import Guidance from '../common/guidance.vue'
  export default {
    name:'about',
    components:{...Common,Guidance},
    data(){
      return {
        active:'AboutUs',
        pages:[]
      }
    },
    computed: {
      ...mapGetters([
        'getLang'
      ])
    },
    methods:{
      gotoPage(pageName){
        this.$router.push({ name: 'about', params:{item:pageName}})
      },
      changePage(pageName){
        this.active = pageName;
        let _this = this;
        if(this.pages.find((value) => value.name == pageName) ){

        }else{
          var key = pageName.replace(/([A-Z])/g,"-$1").toLowerCase();
          key = key.substring(1);
          this.$http({
            method: 'get',
            url: 'v1/pages/'+key,
          }).then(res => {
            if(res.data.state.code == 0){
              _this.pages.push(res.data.data);
            }else{}
          });
        }

      }
    },
    beforeMount() {
//      let _this = this;
//      this.$http({
//        method: 'get',
//        url: '/pages',
//      }).then(res => {
//        _this.pages = res.data.data;
//      });
//      if(this.$route.params.item){
//        this.active = this.$route.params.item;
//      }

    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.changePage(to.params.item);
      })
    },
    beforeRouteUpdate (to, from, next) {
//      this.active = to.params.item;
      this.changePage(to.params.item);
      next();
    },
  }
</script>

<style scoped>
  .about-header{
    font-weight: 700;
    padding: 2rem 0;
  }
  .about-container{
    border-top:1px solid #25353c;
    margin-bottom: 5rem;
    min-height: 450px;
  }
  .about-aside{
    padding-top: 2.5rem;
    padding-right: 0;
    border-right:1px solid #25353c;
  }
  @media (max-width: 768px) {
    .about-aside{
      border-bottom:1px solid #25353c;
      border-right:none;
      padding-right: 15px;

    }
  }
  .about-aside .aside-list{
    list-style: none;
    padding: 0;
    margin:0 0 1rem 0;
  }
  .about-aside .aside-list .aside-item{
    padding: 0.7rem;
    cursor: pointer;
  }
  .about-aside .aside-list .aside-item.active{
    background-color: #eff1f3;
    font-weight: bold;
  }
  .about-aside .aside-list .aside-item:hover{
    background-color: #dee2e5;
  }
  .about-section{
    padding-top: 2.5rem;
  }
  .phone{
    background-color: #25353c;
    color: #fff;
    padding: 20px 15px;
    text-align: center;
  }
  .phone p{
    font-size: 1.1rem;
  }
  .about-content>div{
    display: none;
  }
  .about-content>div.active{
    display: block;
  }
</style>
