<template>
  <div>
    <div class="body">
      <MyHeader/>
    </div>

    <div style="background-color: #000000;" class="centerTitle">
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
            <div class="col-12">
              <p>我的课程</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="course" v-if="lessonList">
      <div class="body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-8" style="margin-bottom: 2rem;">
              <template v-for="(item,index) in lessonList">
                <div class="courseItem">
                  <router-link :to="{ name: 'userLesson'}">
                    <a class="nav-link" href="#">
                      {{item.course.name}}
                    </a>
                  </router-link>

                </div>
              </template>

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
  import Components from '../components/index'
  export default {
    name:'userCenter',
    components:Components,
    data(){
      return {
        lessonList:null
      }
    },
    methods:{
      goToStudyPage(){
        this.$router.push({ name: 'userLesson'})
      }
    },
    beforeMount(){
      let _this = this;
      this.$http({
        method:'get',
        url:'/users/courses?user_id=2',
      }).then(res=>{
        console.log(res.data)
        _this.lessonList=res.data.data.items;
        console.log(_this.lessonList)
      })
    }

  }
</script>

<style scoped>
  .centerTitle{
    padding-top: 3rem;
  }
  .centerTitle h1{
    color: #ffffff;
  }
  .centerTitle h4{
    color: #f0202e;
    margin-bottom: 5rem;
  }
  .knowMore{
    padding:1rem 0;
  }
  .knowMore p{
    color: #078baa;
    margin-bottom: 0;
  }

  .userList{
    padding: 0.6rem 0;
  }
  .userList p{
    font-weight: bold;
    margin-bottom: 0;
  }
  .course{
    padding:0.4rem 0;
    min-height: 240px;
    margin-bottom: 5rem;
  }
  .courseItem{
    padding: 0.4rem 0;
    border-bottom:1px solid #ccc;
  }
  .course a{
    font-weight: bold;
    font-size:1rem;
  }
  .courseItem:hover{
    background-color: #ccc;
  }
  .courseInfo{
    padding:0.5rem 1.6rem;
  }
  .courseInfo>div{
    background-color: #ccc;
    padding: 1rem;
  }
  .courseInfo h4{
    margin-bottom: 1rem;
  }
</style>
