<template>
  <div class="home_page">
    <div class="content-wrap" id="main-content">
      <section class="primary-slot" id="rtp-hero">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 column-left">
              <div id="rtp-top-two">
                <div class="top-block" id="rtp-mission">
                  <h1>Learn Music Online with Berklee</h1>
                  <ul class="offerings-list">
                    <li>
                      <a href="/music-degrees/graduate">
                        <h3 class="no-underline">
                          <span class="underline">Master's Degrees</span>
                          <span class="new">New!</span>
                        </h3>
                        <div class="txt-sm">
<span class="timing">
<span class="date">Nov. 19</span> - application deadline for Jan. 2019 term start
</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="action clearfix" href="/music-degrees/undergraduate" itemprop="url">
                        <h3>Bachelor's Degrees</h3>
                        <div class="txt-sm">
<span class="timing">
<span class="date">Nov. 19</span> - application deadline for Jan. 2019 term start
</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="action clearfix" href="/certificates" itemprop="url">
                        <h3>Multi-Course Certificates</h3>
                        <div class="txt-sm">
<span class="timing">
<span class="date">January 14</span> - next term starts, no application required
</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="action clearfix" href="/courses" itemprop="url">
                        <h3>12-Week Courses</h3>
                        <div class="txt-sm">
<span class="timing">
<span class="date">January 14</span> - next term starts, no application required
</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="txt-md compare" href="/about/compare-online-music-education-offerings">Compare Our Offerings</a>
                    </li>
                  </ul>
                  <div class="column-left-cta">
                    <a href="#footer-form">Request Info</a>
                    <a class="hidden-md-down" href="/sample-a-lesson" itemprop="url">Sample a Lesson</a>
                  </div>
                </div>
                <div class="timing-message-box">
                  <div id="green-block-content">
                    <h3 style="margin-bottom: 0">Now Accepting Degree Applications for Winter 2019</h3>
                    <p>Deadline is November 19, 2018</p>
                  </div>


                  <div id="green-block-content-cta">
                    <a class="action bo-button" href="https://online.berklee.edu/music-degrees">Apply Now</a>
                  </div>
                </div>
              </div>
              <div id="rtp-contact">
                <div class="advisor-contact-block">
                  <p class="guidance">Need guidance?</p>
                  <a class="tel-main" href="tel:18662375533">1-866-BERKLEE</a>
                  <a class="tel-intl" href="tel:16177472146">Int'l: +1-617-747-2146</a>
                  <p class="call-text"><a href="tel:18662375533">Call</a>,&nbsp;<a href="sms:18662375533">Text</a>,&nbsp;or&nbsp;<a
                    href="mailto: advisors@online.berklee.edu">Email us</a></p>
                </div>
              </div>

              <div class="white-space"></div>
            </div>
            <div class="hidden-sm-down col-md-6 col-lg-6 col-xl-7 column-right">
              <div class="bo-tabs">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item hidden-sm-down">
                    <a class="nav-link txt-lg"  href="#interests" id="rtp-tab-label" :class="isInterests?'active':''" @click="changeActive(true)">
                      Interests
                    </a>
                  </li>
                  <li class="nav-item hidden-sm-down">
                    <a class="nav-link txt-lg" href="#coming-soon" :class="isInterests?'':'active'" @click="changeActive(false)">
                      New Courses
                    </a>
                  </li>
                  <li class="nav-item dropdown hidden-md-up">
                    <a class="nav-link txt-lg dropdown-toggle" data-toggle="dropdown" href="#" rel="nofollow"
                       role="tab">
                      Explore More
                      <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a data-toggle="tab" href="#interests" rel="nofollow">
                          Interest Areas
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#coming-soon" rel="nofollow">
                          New Courses <span class="hidden-tablet hidden-phone hidden-md-down">Enrolling Now</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane" id="interests" role="tabpanel" aria-expanded="true" :class="isInterests?'active':''">
                    <p class="hidden-sm-down">
                      With our degree programs, certificate programs, and more than 150 courses led by Berklee faculty and industry experts, it's easy to find the offering that's right for you.
                    </p>
                    <ul class="interest-list listToggle">
                      <li>
                        <a href="/music-production" itemprop="url">Music Production</a>
                      </li>
                      <li>
                        <a href="/guitar" itemprop="url">Guitar</a>
                      </li>
                      <li>
                        <a href="/music-theory-harmony-and-ear-training">Music Theory, Harmony, and Ear Training</a>
                      </li>
                      <li>
                        <a href="/songwriting" itemprop="url">Songwriting</a>
                      </li>
                      <li>
                        <a href="/music-business" itemprop="url">Music Business</a>
                      </li>
                      <li>
                        <a href="/voice">Voice</a>
                      </li>
                      <li>
                        <a href="/piano-and-keyboard">Piano and Keyboard</a>
                      </li>
                      <li>
                        <a href="/arranging">Arranging</a>
                      </li>
                      <li>
                        <a href="/bass">Bass</a>
                      </li>
                      <li>
                        <a href="/orchestration">Orchestration</a>
                      </li>
                      <li>
                        <a href="/drums">Drums</a>
                      </li>
                      <li>
                        <a href="/music-history-and-liberal-arts">Music History and Liberal Arts</a>
                      </li>
                      <li>
                        <a href="/music-for-film-tv-and-games" itemprop="url">Music for Film, TV, and Games</a>
                      </li>
                      <li>
                        <a href="/improvisation">Improvisation</a>
                      </li>

                    </ul>
                  </div>
                  <div class="coming-soon tab-pane" id="coming-soon" role="tabpanel" aria-expanded="false" :class="isInterests?'':'active'">

                    <br>
                    <div class="row">
                      <div class="col-12">
                        <ul>

                          <li class="clearfix">
                            <a href="/courses/ableton-live-techniques-non-linear-creative-strategies-and-composition">
                              <img class="float-left img-circle fr-dii fr-fil fr-draggable" src="//online.berklee.edu/user/avatar?user_id=48040150">
                              <h5>Ableton Live Techniques: Non-Linear Creative Strategies and Composition</h5>
                              <span style="font-size: 1.2rem;">by Erin Barra and Loudon Stearns</span>
                            </a>
                          </li>
                          <li class="clearfix">
                            <a href="/courses/ear-training-2">
                              <img class="img-circle float-left" src="https://s3.amazonaws.com/berkleemusic/users/profile_photos/1960372/large_thumbnail.jpg?1397753575">
                              <h5>Ear Training 2</h5>
                              <span style="font-size: 1.2rem;">by Gaye Tolan Hatfield</span>

                            </a>
                          </li>


                          <li class="clearfix">
                            <a href="courses/solo-guitar-performance-accompaniment-and-arranging">
                              <img class="img-circle float-left" src="//online.berklee.edu/user/avatar?user_id=490437">
                              <h5>Solo Guitar: Performance, Accompaniment, and Arranging</h5>
                              <span style="font-size: 1.2rem;">by John Baboian</span>
                            </a>
                          </li>



                        </ul>
                      </div>
                      <div class="col-12">
                        <ul>

                        </ul>
                      </div>
                    </div>
                    <div class="container-content">
                      <div class="inner text-center">
                        <a class="bo-button" href="/coming-soon/">
                          See Full List
                          <i class="icon-caret-right"></i>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-news">
        <div class="container-fluid home-thumbnails">
          <div class="row">
            <div class="col-12 col-md-8">
              <div class="promo-box-first">
                <div class="responsive-media-container">
                  <img src="../assets/img/home-masters-hero.jpg" class="img-responsive">
                </div>
                <div class="promo-block-first-text">
                  <h2>
                    Application Now Open for Graduate Degree Programs
                  </h2>
                  <p class="txt-lg">
                    We designed our online graduate programs to be completed in one year, providing you with the most affordable and flexible option for earning your master's degree with Berklee College of Music. <a
                    href="https://online.berklee.edu/apply" style="color: #FFF;">Apply today</a>.
                  </p>
                  <ul>
                    <li class="txt-lg">
                      <a href="/music-degrees/graduate/music-production">
                        Master of Music in <span>Music Production</span>
                      </a>
                    </li>
                    <li class="txt-lg">
                      <a href="/music-degrees/graduate/music-business">
                        Master of Arts in <span>Music Business</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 top-promos">
              <div id="rtp-small-promo-1">
                <a href="https://welcome.online.berklee.edu/military" class="thumb-container" target="_blank">
                  <div class="thumb-flex">
                    <img alt="Military Student Andrew Bonica, wearing camo, on a Jeep, with a pink guitar"
                         src="../assets/img/homepage_military.jpg" style="max-width: 416px;">
                    <h4>U.S. Military Saves Big on Tuition</h4>
                    <p>
                      See how active duty, veterans, and military families are saving at least 30% with Berklee Online's Military Benefits.
                    </p>
                  </div>
                </a>
              </div>
              <div id="rtp-small-promo-2">
                <a href="https://online.berklee.edu/takenote/berklee-online-achieves-97-percent-student-satisfaction/"
                   class="thumb-container" target="_blank">
                  <div class="thumb-flex">
                    <img alt="Several Berklee students in a classroom" src="../assets/img/student_satisfaction.jpg"
                         style="max-width: 416px;">
                    <h4>97% Student Satisfaction Rate at Berklee Online</h4>
                    <p>
                      A brand new exit survey of 2018 grads reveals that nearly all of our graduating students were satisfied with their Berklee Online experience.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr>
      <section class="section-sample">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div id="rtp-full-width-promo">
                <h2>
                  Discover Why Musicians Succeed at Berklee Online
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-lg-5">
                <p class="txt-lg">
                  Curious about how online learning works? Explore our unique learning environment in one of 12 free sample lessons.
                </p>
                <a class="bo-button-alt" href="/sample-a-lesson">
                  Try It Now
                </a>
              </div>
              <div class="col-12 col-md-6 col-lg-7">
                <img class="img-cross-media" src="../assets/img/boccealldevice_min.png">
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Index',
    data(){
      return {
        isInterests:true
      }
    },
    methods:{
      changeActive(bool){
        this.isInterests = bool
      }
    }
  }
</script>


<style scoped>

  .home_page .primary-slot {
    background: url(../assets/img/home_bg_grad_2_color.jpg) no-repeat top left;
    background-size: 100% auto;
  }

  .home_page .column-left {
    background-color: #eff1f3;
    color: #25353c;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 0;
    padding-right: 0;
    padding: 0;
    margin-top: -25px;
  }

  .home_page .column-left .top-block {
    background-color: #eff1f3;
    padding: 45px 30px 60px 30px;
  }

  .home_page .column-left .offerings-list {
    list-style-type: none;
    padding-left: 0;
  }

  .home_page .column-left .offerings-list li {
    margin-bottom: 2rem;
  }

  .home_page .column-left .offerings-list a, .home_page .column-left .offerings-list a:hover, .home_page .column-left .offerings-list a:focus {
    color: #25353c;
    text-decoration: none;
  }

  .home_page .column-left .offerings-list h3.no-underline {
    text-decoration: none;
  }

  .home_page .column-left .offerings-list h3 {
    text-decoration: underline;
    margin-bottom: 0;
  }

  .home_page .column-left .offerings-list h3 span.underline {
    text-decoration: underline;
  }

  .home_page .column-left .offerings-list h3 span.new {
    text-decoration: none;
    color: #ee243c;
  }

  .home_page .column-left .offerings-list span.timing, .home_page .column-left .offerings-list span.timing span.date {
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
  }

  .home_page .column-left .offerings-list a.compare {
    display: block;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    margin: 2.5rem 0;
    text-decoration: underline;
  }

  .home_page .column-left .column-left-cta {
    display: flex;
    justify-content: space-between;
  }

  .home_page .column-left .column-left-cta a:first-child {
    margin-right: 10px;
  }

  .home_page .column-left .column-left-cta a {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: #eff1f3;
    border: 0;
    color: #25353c;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    border: 3px solid #25353c;
    padding: 7px;
    width: 100%;
  }

  .home_page .timing-message-box {
    background-color: #16ac96;
    color: white;
    padding: 30px;
  }

  .home_page .timing-message-box .bo-button {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: #16ac96;
    border: 0;
    color: white;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    border: 3px solid white;
    padding: 7px;
    width: 100%;
  }

  .bo-button, .bo-button-primary {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: #ee243c;
    border: 0;
    color: white;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
  }

  .home_page #main-content .advisor-contact-block {
    background-color: #25353c;
    color: white;
    padding: 30px;
    text-align: center;
  }

  #main-content .advisor-contact-block {
    background-color: #0e1416;
    color: white;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 20px 15px;
    text-align: center;
  }

  #main-content .advisor-contact-block .guidance {
    margin-bottom: .3rem;
  }

  .home_page #main-content .advisor-contact-block .tel-main {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.67rem;
    line-height: 2.25rem;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .home_page #main-content .advisor-contact-block a, .home_page #main-content .advisor-contact-block a:hover, .home_page #main-content .advisor-contact-block a:active {
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    color: white;
  }

  #main-content .advisor-contact-block .call-text {
    margin: .5rem auto 0;
  }

  .home_page #main-content .advisor-contact-block .tel-intl {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  #main-content .advisor-contact-block .tel-intl {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    display: block;
  }

  .home_page .column-left .white-space {
    background-color: white;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    height: 100%;
  }

  /**/

  .home_page .column-right {
    margin-top: 575px;
    padding-left: 0;
  }

  .bo-tabs {
    background-color: white;
    border-bottom: 0;
    position: relative;
  }

  .bo-tabs .nav-tabs {
    border-bottom: 1px solid #4c5960;
    display: flex;
    justify-content: flex-start;
  }

  .bo-tabs .nav-item:first-child {
    padding-left: 0;
  }

  .bo-tabs .nav-tabs .nav-item {
    margin-bottom: 0;
  }

  .bo-tabs .nav-item {
    background: none;
    padding: 0 3rem;
    position: relative;
    top: 3px;
  }

  .bo-tabs .nav-tabs .nav-item + .nav-item {
    margin-left: 0;
  }

  .bo-tabs .nav-tabs .nav-item {
    margin-bottom: 0;
  }


  .home_page .nav-link {
    padding: 15px 30px;
  }

  .bo-tabs .nav-link {
    border-bottom: 5px solid transparent;
    color: black;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.75rem;
    height: 100%;
    line-height: 1.75rem;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: .5rem 0 2.3rem 0;
  }

  .bo-tabs .nav-link, .bo-tabs .nav-link{
    border: none;
  }

  .home_page .nav-link {
    padding: 15px 30px;
    border-bottom: 5px solid transparent;
  }
  .home_page .nav-link:hover {
    border-bottom: 5px solid #ddd;
  }
  .home_page .nav-link.active {
    border-bottom: 5px solid #ee243c;
  }
  .home_page .coming-soon h5 {
    margin-bottom: 0;
  }

  .tab-content .tab-pane.active {
    display: block;
  }
  .tab-content .tab-pane {
    display: none;
  }
  .home_page .tab-pane {
    padding: 30px 30px 0 30px;
    min-height: 450px;
  }
  .tab-content>.active {
    display: block;
  }
  .tab-content>.tab-pane {
    display: none;
  }
  .home_page .interest-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    margin-top: 40px;
    padding: 0;
  }
  .home_page .interest-list li {
    width: 40%;
    margin-right: 10px;
    margin-bottom: 15px;
  }
  .home_page .interest-list a {
    color: black;
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
  }
  .home_page .coming-soon a, .home_page .coming-soon a:hover {
    color: black;
    text-decoration: none;
  }
  .home_page .coming-soon .img-circle {
    float: left;
    height: 60px;
    width: 60px;
    margin-bottom: 60px;
    margin-right: 10px;
  }
  .img-circle {
    border-radius: 50%;
  }
  .home_page .coming-soon h5 {
    margin-bottom: 0;
  }
  .home_page .coming-soon h5 {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
  }
  .home_page .coming-soon span {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
  }
  .home_page .coming-soon .bo-button {
    color: white;
    margin-top: 10px;
    text-align: center;
  }
  .bo-button:hover, .bo-button-primary:hover {
    background: #cf1027;
    color: white;
    cursor: pointer;
  }
  /**/
  /**/
  .home_page .promo-box-first {
    background-color: #25353c;
    color: white;
    height: 100%;
  }

  .responsive-media-container, .about-vid-container, .course-video-container {
    height: 0;
    margin-bottom: 15px;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: 0;
    position: relative;
  }

  .home_page .promo-box-first .promo-block-first-text {
    padding: 30px;
  }

  .home_page .promo-box-first h2 {
    margin-top: 0;
  }

  .home_page .promo-box-first ul {
    margin-top: 30px;
    margin-left: 0;
    padding-left: 30px;
  }

  .home_page .promo-box-first ul li a {
    color: #FFF;
    text-decoration: underline;
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
  }

  .home_page .home-thumbnails img {
    width: 100%;
  }

  .home_page .home-thumbnails a.thumb-container h3, .home_page .home-thumbnails a.thumb-container h4 {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.67rem;
    line-height: 2.25rem;
    margin-top: 10px;
  }

  .home_page .home-thumbnails a.thumb-container, .home_page .home-thumbnails a.thumb-container:hover, .home_page .home-thumbnails a.thumb-container:focus {
    color: #0e1416;
    text-decoration: none;
  }

  .home_page .home-thumbnails a.thumb-container {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    .home_page .top-promos, .home_page .bottom-promos {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }

    #rtp-small-promo-1 {
      margin-right: 30px;
      max-width: 50%;
    }

    #rtp-small-promo-1 {
      max-width: 50%;
    }
  }

  .home_page section {
    margin-top: 60px;
    margin-bottom: 30px;
  }

  .home_page .section-sample h2 {
    margin-bottom: 60px;
    text-align: center;
  }

  .bo-button-alt, .bo-button-secondary {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 2.2rem;
    text-decoration: underline;
    background: white;
    border: 0;
    color: #ee243c;
    display: inline-block;
    margin: 0px;
    outline: 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    transition: background 0.3s ease;
    white-space: nowrap;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.16rem;
    line-height: 1.5rem;
    border: 3px solid #ee243c;
    padding: 7px;
  }
</style>
