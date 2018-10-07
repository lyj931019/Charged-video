<template>
  <div class="sample_courses">
    <!--<MyHeader />-->
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid feature feature-sample-lesson">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <h1>Sample a Lesson</h1>
            <p class="txt-lg">
              Take our online school for a test drive in our free sample course, containing 12 real lessons from our most popular courses.</p>
            <div class="sample-btn-container">
              <span class="btn btn-danger">Sign up</span>
              <span class="btn btn-secondary">Login in</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7 offset-lg-1">
            <div class="responsive-media-container" style="background-color: #ff0000;">
              <div class="div signal"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-8 container-scroller-text">
            <h2>Choose a Free Lesson to Try</h2>
            <p class="txt-lg">Your sample course includes lessons from 12 different courses, each highlighting a different interest area. Each lesson offers content pulled straight from its course, including video and audio clips, discussion topics, and weekly assignments.</p>
          </div>
          <div class="col-12 col-lg-4 text-center">
            <img class="sample-character" src="../assets/img/sample-chars-staff-paper.svg">
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Index',
  }
</script>


<style scoped>
  .sample_courses .feature.feature-sample-lesson p, .sample_courses .feature.feature-sample-lesson li, .sample_courses .page-section p, .sample_courses .page-section li {
    color: #25353c;
    /*padding: 130px 0 60px 0;*/
  }



  .feature p {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.3rem;
    line-height: 2.50rem;
  }

  .responsive-media-container, .about-vid-container, .course-video-container {
    height: 0;
    margin-bottom: 15px;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: 0;
    position: relative;
  }

  .sample_courses .sample-btn-container {
    margin: 15px 0 30px;
  }

  .sample_courses .page-section {
    padding: 60px 0;
  }

  .sample_courses .sample-character {
    max-width: 170px;
  }
</style>
