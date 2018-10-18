<template>
  <div>
    <MyHeader/>
    <div class="body">
      <div class="bg">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 content">
              <h1>在线课程</h1>
              <p>
                我们为期12周的在线课程由行业专家和各大名校的教授进行授课。
              </p>
              <ul>
                <li>
                  由新英格兰学校和学院协会认证
                </li>
                <li>
                  在线课程适用于各类证书和学位课程
                </li>

              </ul>
              <hr>
              <div>
                <i class="svg">
                  <svg aria-hidden="true" data-prefix="far" data-icon="clock" role="img"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""
                       class="svg-inline--fa fa-clock fa-w-16">
                    <path fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                  </svg>
                </i>
                <span>
                  下一期将于1月14日开始
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="course container-fluid">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="level">
              <a href="#">All Level</a>
              <p class="title">Level</p>
            </div>
            <div class="level-list">
              <a href="#">
                <Level :level="1"></Level>
                <h6>Level 1</h6>
              </a>
              <a href="#">
                <Level :level="2"></Level>
                <h6>Level 2</h6>
              </a>
              <a href="#">
                <Level :level="3"></Level>
                <h6>Level 3</h6>
              </a>
              <a href="#">
                <Level :level="4"></Level>
                <h6>Level 4</h6>
              </a>
            </div>
            <hr>
          </div>
          <div class="col-12 col-lg-4">
            <div class="row course-list">
              <div class="col-12 course-item">
                <p class="course-id">YII001</p>
                <h2 class="course-name">Yii 2.0 权威指南</h2>
                <div class="course-info">
                  <div class="course-price">课程价格:$0</div>
                  <div class="course-level">
                    <Level :level="1"></Level>
                    <h6>Level 1</h6>
                  </div>
                </div>
                <div class="course-intr">
                  我是摘要
                </div>
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
    name: 'listF',
    components: Components,
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .body {
    /*padding-top: 120px;*/
  }

  .bg {
    padding: 90px 0px 30px;
  }

  @media (max-width: 767px) {
    .bg {
      padding: 200px 30px 30px;
    }
  }

  .bg {
    background: url(../assets/img/courses.jpg) center center no-repeat;
    -webkit-background-size: 100%;
    background-size: cover;
    margin-bottom: 50px;
  }

  .bg .container {

  }

  .bg .container .row .content {
    margin-top: -120px;
    background: #25353C;
    color: #F2F2F2;
    padding: 40px;
  }

  .bg .container .row .content p {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.5rem;

  }

  .bg .container .row .content li {
    font-size: 1.1rem;
    line-height: 2rem;
  }

  .bg .container .row .content hr {
    border-color: #7b8b96;
  }

  .bg .container .row .content .svg {

  }

  .bg .container .row .content .svg svg {
    width: 1rem;
  }

  .level a{
    color: #25353c;
    border-bottom: 1px solid #ee243c;
    float: right;
    font-size: 1.2rem;
  }
  .level .title{
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem;
  }
  .level-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .level-list a{
    text-align: center;
    display: inline-block;
    width: 60px;
  }
  .level-list a h6{
    color: #25353c;
    margin-top: 0.1rem;
    font-weight: 600;
  }

  .course-item{
    box-shadow: rgba(0, 0, 0, 0.22) 3px 3px 8px;
    margin: 15px;
    padding: 30px;
    border:1px solid rgb(222, 226, 229);
  }

  .course-id{
    margin-bottom: 0;
    font-size: 1.15rem;
  }
  .course-name{
    box-shadow: rgb(238, 36, 60) 0px -1px 0px inset;
    display: inline-block;
    font-weight: 500;
  }
  .course-info{
    text-align: right;
  }
  .course-price{
    float: left;
    font-size: 1.2rem;
  }
  .course-level{
    display: inline-block;
    text-align: center;
    /*float: right;*/
  }
  .course-intr{
    font-size: 1.1rem;
  }
</style>
