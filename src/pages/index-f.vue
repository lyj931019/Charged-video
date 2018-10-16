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
              <div class="bg-dark text-white">
                <h6>咨询热线</h6>
                <h4>400-882-3823</h4>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-sm-none d-md-block column-right">
              <div class="bo-tabs">
                <div class="tabs-nav">
                  <a href="#" class="active">Interests</a>
                  <a href="#">New Courses</a>
                </div>
                <div class="tab-content">

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
    name: 'index-f',
    components: Components,
  }
</script>

<style scoped>
  .bg {
    background: url(../assets/img/home_bg_grad_2_color.jpg) 0 1rem no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .row>div{
    padding-left:0;
    padding-right:0;
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

  .column-right{
    background-color: #fff;
  }

  .tabs-nav{
    border-bottom:1px solid #25353c;
    display: flex;
    justify-content: flex-start;
  }
  .tabs-nav a{
    color: #25353c;
    font-weight: bold;
    font-size: 1.4rem;
    font-weight: bold;
    margin-right: 3rem;
    position: relative;
    top: 3px;
    padding: 15px 30px;
    text-decoration: none;
    border-bottom:5px solid;
    border-bottom-color:transparent;
    display: inline-block;
    box-sizing: border-box;
  }
  .tabs-nav a:hover{
    border-bottom-color: #ccc;
  }
  .tabs-nav a.active{
    border-bottom-color: #ee243c;
  }
</style>
