<template>
  <div>
    <MyHeader/>
    <div class="container-fluid">
      <!--<h1 class="about-header">{{$t('about.methods')}}</h1>-->

      <div class="row about-container">
        <div class="col-12" style="overflow: auto">
          <div class="about-content" v-if="content">
            <div class="active pt-3">
              <!--<h1>{{page.title}}</h1>-->
              <template v-if="content.content">
                <!--<div v-html="content.content"></div>-->
                <div v-html="content.content" v-show="getLang == 'zh'"></div>
                <div v-html="content.content_en" v-show="getLang == 'en'"></div>
              </template>
              <template v-else>
                <div>{{$t('common.noContent')}}</div>
              </template>
            </div>

          </div>


        </div>
      </div>
    </div>
    <MyFooter class="pt-0 pt-md-4"/>
  </div>
</template>

<script>
  import Common from '../components/common'
  import Guidance from '../common/guidance.vue'
  import {mapGetters} from 'vuex'
  export default {
    name: 'about',
    components: {...Common, Guidance},
    data() {
      return {
        active: 'methods',
        content: null
      }
    },
    computed: {
      ...mapGetters([
        'getLang'
      ])
    },
    methods: {
      changePage(pageName) {
        this.active = pageName;
      }
    },
    beforeMount() {
      let _this = this;
      this.$http({
        method: 'get',
        url: '/pages/methods',
      }).then(res => {
        if (res.data.state.code == 0) {
          _this.content = res.data.data;
        }
      });
    },
//    beforeRouteUpdate (to, from, next) {
//      this.active = to.params.item;
//      next();
//    },
  }
</script>

<style scoped>
  .about-header {
    font-weight: 700;
    padding: 2rem 0;
  }

  .about-container {
    /*border-top: 1px solid #25353c;*/
    margin-bottom: 5rem;
    min-height: 450px;
  }

  .about-aside {
    padding-top: 2.5rem;
    padding-right: 0;
    border-right: 1px solid #25353c;
  }

  @media (max-width: 768px) {
    .about-aside {
      border-bottom: 1px solid #25353c;
      border-right: none;
      padding-right: 15px;

    }
  }

  .about-aside .aside-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }

  .about-aside .aside-list .aside-item {
    padding: 0.7rem;
    cursor: pointer;
  }

  .about-aside .aside-list .aside-item.active {
    background-color: #eff1f3;
    font-weight: bold;
  }

  .about-aside .aside-list .aside-item:hover {
    background-color: #dee2e5;
  }

  .about-section {
    padding-top: 2.5rem;
  }

  .phone {
    background-color: #25353c;
    color: #fff;
    padding: 20px 15px;
    text-align: center;
  }

  .phone p {
    font-size: 1.1rem;
  }

  .about-content > div {
    display: none;
  }

  .about-content > div.active {
    display: block;
  }
</style>
