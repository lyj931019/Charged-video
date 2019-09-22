<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-04 22:07:30
 * @LastEditTime: 2019-08-25 00:55:37
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <MyHeader/>
    <div class="home-body" v-if="homepage">
      <div class="banner">
        <img :src="homepage.image" alt="">
        <div class="container banner-content pt-md-5 pt-sm-2 pt-0">
          <table></table>
          <div class="banner-title mt-md-5 mt-0 mt-sm-2 pt-md-5 pt-0" v-show="getLang == 'zh'">{{homepage.title}}</div>
          <div class="banner-title mt-md-5 mt-0 mt-sm-2 pt-md-5 pt-0" v-show="getLang == 'en'">{{homepage.title_en}}</div>
          <div class="banner-abs" v-show="getLang == 'zh'">{{homepage.abstract}}</div>
          <div class="banner-abs" v-show="getLang == 'en'">{{homepage.abstract_en}}</div>
        </div>

      </div>
      <div class="homepage-content pt-5 pb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12" v-html="homepage.content" v-show="getLang == 'zh'"></div>
            <div class="col-12" v-html="homepage.content_en" v-show="getLang == 'en'"></div>
          </div>
        </div>

      </div>
      <div class="floor pt-5 pb-5" v-for="(item,index) in homepage.items" :key="index">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6" v-html="item.content" v-show="getLang == 'zh'"></div>
            <div class="col-12 col-md-6" v-html="item.content_en" v-show="getLang == 'en'"></div>
            <div class="col-12 col-md-6 text-center">
              <img :src="item.image" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import Common from '@/components/common'
  import {mapMutations,mapGetters} from 'vuex'
  export default {
    name: 'home',
    components: {...Common},
    data() {
      return {
        active: true,
        homepage: null,
      }
    },
    methods: {
      ...mapMutations([
        'changeHomepage',
      ]),
      getHomepageContent() {
        let _this = this;
        this.$http({
          method: 'get',
          url: 'v1/homepage',
        }).then(res => {
          if (res.data.state.code === 0) {
            _this.homepage = res.data.data;
            _this.changeHomepage(res.data.data);
          }
        })
      },
    },
    computed: {
      ...mapGetters([
        'getHomepage',
        'getLang'
      ])
    },
    created() {
      if(this.getHomepage){
        this.homepage = this.getHomepage;
      }else{
        this.getHomepageContent();
      }

    }
  }
</script>

<style scoped>
  .home-body {
    max-width: 1920px;
  }

  .banner img{
    width: 100%;
  }
  .banner{
    position: relative;
  }
  .banner .banner-content{
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    margin: auto;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
  }
  .banner .banner-content .banner-title{
    font-size: 3.5rem;
  }
  .banner .banner-content .banner-abs{
    font-size: 1.7rem;
  }
  .floor:nth-child(odd){
    background-color: #eee;
  }
  .floor:nth-child(even) .row{
    flex-direction: row-reverse;
  }
  .floor img{
    width: 100%;
  }
</style>
