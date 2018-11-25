<template>
  <div>
    <MyHeader/>
    <div class="body">
      <div class="bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-5 ">
              <div class="bg-grey">
                <h1>Learn Music Online with Berklee</h1>
                <ul class="offerings-list">
                  <li>
                    <a href="#">
                      <h5 class="offerings-item-title">
                        <span>Master's Degrees</span>
                        <span>New!</span>
                      </h5>
                      <div class="txt-sm">
                        <span class="date">Nov. 19</span>
                        - application deadline for Jan. 2019 term start
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h5 class="offerings-item-title">Bachelor's Degrees</h5>
                      <div class="txt-sm">
                        <span class="date">Nov. 19</span>
                        - application deadline for Jan. 2019 term start
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h5 class="offerings-item-title">Multi-Course Certificates</h5>
                      <div class="txt-sm">
                        <span class="date">January 14</span>
                        - next term starts, no application required
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h5 class="offerings-item-title">12-Week Courses</h5>
                      <div class="txt-sm">
                        <span class="date">January 14</span>
                        - next term starts, no application required
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <h6 class="offerings-item-title">Compare Our Offerings</h6>
                    </a>
                  </li>
                </ul>
                <div class="cta">
                  <a href="#">
                    Request Info
                  </a>
                </div>
              </div>
              <div class="bg-green">
                <h5>Now Accepting Degree Applications for Winter 2019</h5>
                <p>Deadline is November 19, 2018</p>
                <div class="cta">
                  <a href="#">Apply Now</a></div>
              </div>
              <Guidance></Guidance>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-sm-none d-none d-md-block column-right">
              <div class="bo-tabs">
                <div class="tabs-nav">
                  <a href="#" :class="[{active:active}]" @click.prevent="changeActive(true)">Interests</a>
                  <a href="#" :class="[{active:!active}]" @click.prevent="changeActive(false)">New Courses</a>
                </div>
                <div class="tab-content">
                  <div :class="[{active:active}]" class="tab-item">
                    <p>
                      With our degree programs, certificate programs, and more than 150 courses led by Berklee faculty and industry experts, it's easy to find the offering that's right for you.
                    </p>
                    <div class="intersts-list">
                      <div class="intersts-item">
                        Music Production
                      </div>
                      <div class="intersts-item">
                        Guitar
                      </div>
                      <div class="intersts-item">
                        Music Theory, Harmony, and Ear Training
                      </div>
                      <div class="intersts-item">
                        Songwriting
                      </div>
                      <div class="intersts-item">
                        Music Business
                      </div>
                      <div class="intersts-item">
                        Voice
                      </div>
                      <div class="intersts-item">
                        Piano and Keyboard
                      </div>
                      <div class="intersts-item">
                        Arranging
                      </div>
                      <div class="intersts-item">
                        Bass
                      </div>
                      <div class="intersts-item">
                        Orchestration
                      </div>
                      <div class="intersts-item">
                        Drums
                      </div>
                      <div class="intersts-item">
                        Music History and Liberal Arts
                      </div>
                      <div class="intersts-item">
                        Music for Film, TV, and Games
                      </div>
                      <div class="intersts-item">
                        Improvisation
                      </div>
                    </div>
                  </div>
                  <div :class="[{active:!active}]" class="tab-item">
                    <div class="course-list">
                      <div class="course-item">
                        <div class="avatar">
                          <img src="../assets/img/avatar.png" alt="">
                        </div>
                        <div>
                          <div class="title">
                            Arranging for Songwriters: Instrumentation and Production in Songwriting
                          </div>
                          <p>by Sarah Brindell and Bonnie Hayes</p>
                        </div>
                      </div>
                      <div class="course-item">
                        <div class="avatar">
                          <img src="../assets/img/avatar.png" alt="">
                        </div>
                        <div>
                          <div class="title">
                            Ableton Live Techniques: Non-Linear Creative Strategies and Composition
                          </div>
                          <p>by Erin Barra and Loudon Stearns</p>
                        </div>
                      </div>
                      <div class="course-item">
                        <div class="avatar">
                          <img src="../assets/img/avatar.png" alt="">
                        </div>
                        <div>
                          <div class="title">
                            Ear Training 2
                          </div>
                          <p>by Gaye Tolan Hatfield</p>
                        </div>
                      </div>
                    </div>
                    <div style="text-align: center;">
                      <div class="bo-button" style="font-weight: bold;">See Full List</div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid thumbnails">
        <div class="row">
          <div class="col-12 col-md-8 middle-left">
            <img src="../assets/img/home-masters-hero.jpg" alt="">
            <div class="thumbnails-left">
              <h2>
                Application Now Open for Graduate Degree Programs
              </h2>
              <p>
                We designed our online graduate programs to be completed in one year, providing you with the most affordable and flexible option for earning your master's degree with Berklee College of Music. <a href="#">Apply today</a>
              </p>
              <ul>
                <li>
                  Master of Music in <a href="#">Music Production</a>
                </li>
                <li>
                  Master of Arts in  <a href="#">Music Business</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4 thumbnails-right">
              <div class="row">
                <div class="col-6 col-md-12 right-item">
                  <img src="../assets/img/homepage_military.jpg" alt="">
                  <h4>U.S. Military Saves Big on Tuition</h4>
                  <p>
                    See how active duty, veterans, and military families are saving at least 30% with Berklee Online's Military Benefits.
                  </p>
                </div>
                <div class="col-6 col-md-12 right-item">
                  <img src="../assets/img/student_satisfaction.jpg" alt="">
                  <h4>97% Student Satisfaction Rate at Berklee Online</h4>
                  <p>
                    A brand new exit survey of 2018 grads reveals that nearly all of our graduating students were satisfied with their Berklee Online experience.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>

      <hr style="margin-top: 30px;">

      <div class="container-fluid sample">
        <h2 class="title">
          Discover Why Musicians Succeed at Berklee Online
        </h2>
        <div class="row">
          <div class="col-12 col-md-5 col-lg-4">
            <p class="txt-lg">
              Curious about how online learning works? Explore our unique learning environment in one of 12 free sample lessons.
            </p>
            <a class="bo-button-alt" href="/sample-a-lesson">
              Try It Now
            </a>
          </div>
          <div class="col-12 col-md-6 col-lg-7">
            <img src="../assets/img/boccealldevice_min.png" alt="">
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
    name: 'index-f',
    components: {...Common,Guidance},
    data(){
      return {
        active:true
      }
    },
    methods:{
      changeActive(bool){
        this.active = bool;
      }
    }
  }
</script>

<style scoped>
  .bg {
    background: url(../assets/img/home_bg_grad_2_color.jpg) 0 1rem no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .row > div {
    padding-left: 0;
    padding-right: 0;
  }

  .bg-grey {
    background-color: #eff1f3;
    padding: 45px 30px 60px 30px;
    margin-top: -25px;
  }

  @media (max-width: 768px) {
    .bg-grey {
      margin-top: 300px;
    }
  }

  .bg-grey > h1 {
    font-size: 3.2rem;
    font-weight: bold;
  }

  .offerings-list {
    list-style: none;
    padding: 0;
  }

  .offerings-list a {
    color: #000;
  }

  .offerings-list a:hover {
    text-decoration: none;
  }

  .offerings-list li {
    margin-bottom: 2rem;
  }

  .offerings-list li .offerings-item-title {
    text-decoration: underline;
    margin-bottom: 0;
    font-weight: bold;
  }

  .offerings-list .txt-sm {
    color: #888;
  }

  .offerings-list .txt-sm .date {
    font-weight: bold;
    color: #25353c;
  }

  .offerings-list li:nth-child(1) .offerings-item-title {
    text-decoration: none;
  }

  .offerings-list li:nth-child(1) .offerings-item-title > span:nth-child(1) {
    text-decoration: underline;
  }

  .offerings-list li:nth-child(1) .offerings-item-title > span:nth-child(2) {
    color: #ee243c;
  }

  .bg-grey .cta a {
    display: inline-block;
    border: 3px solid #25353c;
    padding: 7px;
    text-decoration: none;
    color: #25353c;
    font-weight: bold;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }

  .bg-green {
    background-color: #16ac96;
    color: white;
    padding: 30px;
  }

  .bg-green h5 {
    font-weight: bold;
  }

  .bg-green p {
    font-size: 0.92rem;
  }

  .bg-green .cta a {
    display: inline-block;
    border: 3px solid #fff;
    padding: 7px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
  }

  .bg-dark {
    padding: 30px;
    text-align: center;
  }

  .bg-dark h6 {
    /*margin-bottom: 1rem;*/
  }

  .column-right {
    margin-top: 575px;
    padding-left: 0;
  }

  @media (max-width: 1200px) {
    .column-right {
      margin-top: 400px;
    }
  }

  @media (max-width: 992px) {
    .column-right {
      margin-top: 350px;
    }
  }

  .column-right {
    background-color: #fff;
  }

  .tabs-nav {
    border-bottom: 1px solid #25353c;
    display: flex;
    justify-content: flex-start;
  }

  .tabs-nav a {
    color: #25353c;
    font-weight: bold;
    font-size: 1.4rem;
    font-weight: bold;
    margin-right: 3rem;
    position: relative;
    top: 3px;
    padding: 15px 30px;
    text-decoration: none;
    border-bottom: 5px solid;
    border-bottom-color: transparent;
    display: inline-block;
    box-sizing: border-box;
  }

  .tabs-nav a:hover {
    border-bottom-color: #ccc;
  }

  .tabs-nav a.active {
    border-bottom-color: #ee243c;
  }

  .tab-content {
    padding: 30px 30px 0 30px;
    min-height: 450px;
  }

  .tab-item {
    display: none;
  }

  .tab-item.active {
    display: block;
  }

  .tab-item {
    line-height: 2.2rem;
  }

  .intersts-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .intersts-item {
    width: 40%;
    margin-right: 10px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .course-list{
    padding-top: 20px;
  }
  .course-item{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 40px;
  }
  .course-item .avatar{
    width: 60px;

  }
  .course-item .title{
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0;
  }


  .thumbnails{
    margin-top: 60px;
  }
  .thumbnails img{
    width: 100%;
  }
  .thumbnails-left{
    background-color: #25353c;
    color: #ffffff;
    padding: 45px 30px;
    font-size: 1.2rem;
  }
  .thumbnails-left h2{
    font-size: 2.38rem;
    line-height: 2.38rem;
    margin-bottom: .75rem;
    font-weight: bold;
  }
  .thumbnails-left p{
    margin-bottom: .75rem;
    font-size: 1.25rem;
  }
  .thumbnails-left a{
    color: #ffffff;
    text-decoration: underline;
    font-weight: bold;
  }

  .thumbnails-right .row{
    margin-left: 15px;
    margin-right: 0;
  }
  .thumbnails-right>.row>.col-6 {
    padding:0 15px;
  }

  .thumbnails-right .right-item h4{
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    line-height: 1.69rem;
    margin-top: 10px;
    margin-bottom: .38rem;
    font-weight: bold;
  }
  .thumbnails-right .right-item p{
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.65rem;
    margin-bottom: .75rem;
  }
  .sample{
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .sample .title{
    text-align: center;
    font-weight: bold;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 2.38rem;
    line-height: 2.38rem;
    margin-bottom: 60px;
  }
  .sample .bo-button-alt{
    background: white;
    color: #ee243c;
    display: inline-block;
    margin: 0px;
    outline: 0;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 0.85rem;
    line-height: 1.13rem;
    border: 3px solid #ee243c;
    padding: 7px;
    font-weight: bold;
  }
  .sample .txt-lg{
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    line-height: 1.89rem;
    color: #0e1416;
    margin-bottom: 0.8rem;
    font-weight: 200;
  }
  .sample img{
    width: 100%;
  }
  .bo-button{
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: #ee243c;
    border: 0;
    color: white;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 6px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
  }
</style>
