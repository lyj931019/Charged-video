<template>
  <div>
    <MyHeader/>
    <div class="body" v-if="courses">
      <div class="bg">
        <div class="container-fluid">
          <h5 class="online-course">
            <a href="#">在线课程</a>
          </h5>
          <div class="row">
            <div class="col-12 col-lg-9 course-intr">
              <h1 class="title">{{courses.name}}</h1>
              <div class="course-author">
                <img alt="author.full_name" class="avatar"
                     :src="courses.instructor.avatar">
                <span>
                  教师:
                  <a class="a-body-link" href="#">{{courses.instructor.name}}</a>
                </span>
                <span>
                  课程编号:{{courses.num}}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import Components from '../components'

  export default {
    name: 'detailF',
    components: Components,
    data() {
      return {
        courses:null
      }
    },
    beforeMount() {
      console.log(12312)
      let num = this.$route.params.num;
      let _this = this;
      this.$http({
        method: 'get',
        url: '/courses/' + num,
      }).then(res => {
        console.log(res.data)
        _this.courses = res.data.data;
        console.log(_this.courses)
      })
    }
  }
</script>

<style scoped>
  .bg{
    background-color: #eff1f3;
    padding-top: 75px;
    padding-bottom: 60px;
  }

  .online-course a{
    color: #25353c;
    font-weight: bold;
    text-decoration: underline;
    line-height: 2.50rem;
  }

  .course-intr .title{
    font-weight: 700;
    font-size: 3.0rem;
  }
  .course-author{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>
