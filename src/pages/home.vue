<template>
  <div>
    <MyHeader/>
    <div class="home-body" v-if="homepage">
      <div class="banner">
        <img :src="homepage.image" alt="">
        <div class="container banner-content">
          <div class="banner-title"></div>
          <div class="banner-abs"></div>
        </div>

      </div>
      <div class="homepage-content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12" v-html="homepage.content">
            </div>
          </div>
        </div>

      </div>
      <div class="floor">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cum enim iste iusto non, perspiciatis recusandae rerum unde. Aliquam aut beatae corporis culpa dicta dolorum, error facere perferendis sit? Repudiandae.
            </div>
            <div class="col-12 col-md-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt ducimus maxime mollitia ut voluptas. Animi at dolorum, ducimus quo sed sequi voluptatum! Amet autem doloremque numquam quas quidem quod.
            </div>
          </div>
        </div>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import Common from '../components/common'
  import Guidance from '../common/guidance.vue'

  export default {
    name: 'home',
    components: {...Common, Guidance},
    data() {
      return {
        active: true,
        homepage: null,
      }
    },
    methods: {
      getHomepage() {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/homepage',
        }).then(res => {
          if (res.data.state.code === 0) {
            _this.homepage = res.data.data;
            console.log(_this.homepage);
          }
        })
      },
    },
    created() {
      this.getHomepage();
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
    top: 100px;
  }
</style>
