<template>
  <div>
    <MyHeader/>
    <div class="body">
      <div class="bg">
        <div class="container">
          <div class="row">
            <div class="col-6 bg-grey">
              <h1>Learn Music Online with Berklee</h1>
              <ul class="offerings-list">
                <li>
                  <a href="#">
                    <h4>
                      <span>Master's Degrees</span>
                      <span>New!</span>
                    </h4>
                    <div class="txt-sm">
                      <span class="date">Nov. 19</span>
                      - application deadline for Jan. 2019 term start
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h4>Bachelor's Degrees</h4>
                    <div class="txt-sm">
                      <span class="date">Nov. 19</span>
                      - application deadline for Jan. 2019 term start
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h4>Multi-Course Certificates</h4>
                    <div class="txt-sm">
                      <span class="date">January 14</span>
                      - next term starts, no application required
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h4>12-Week Courses</h4>
                    <div class="txt-sm">
                      <span class="date">January 14</span>
                      - next term starts, no application required
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Compare Our Offerings
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6">dsa</div>
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
    name:'index-f',
    components:Components,
  }
</script>

<style scoped>
  .bg{
    background: url(../assets/img/home_bg_grad_2_color.jpg) 0 1rem  no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  .bg-grey{
    background-color: #eff1f3;
    padding: 45px 30px 60px 30px;
  }


  .offerings-list{
    list-style: none;
    padding: 0;
  }
  .offerings-list a{
    color: #000;
  }
  .offerings-list li{
    margin-bottom: 2rem;
  }
  .offerings-list li h4{
    text-decoration: underline;
    margin-bottom: 0;
  }
  .offerings-list .txt-sm{
    color: #888;
  }
  .offerings-list .txt-sm .date{
    font-weight: bold;
    color: #25353c;
  }
  .offerings-list li:nth-child(1) h4{
    text-decoration: none;
  }
  .offerings-list li:nth-child(1) h4>span:nth-child(1){
    text-decoration: underline;
  }
  .offerings-list li:nth-child(1) h4>span:nth-child(2){
    color: #ee243c;
  }
</style>
