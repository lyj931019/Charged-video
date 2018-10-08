<template>
  <div>
    <div class="feature feature-photo">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="feature-callout col-12 col-sm-12 col-md-8 col-lg-6">
                <h1 isrender="true">
                  Online
                  Music
                  Courses
                </h1>
                <p isrender="true">
                  Our 12-week online
                  music
                  courses are authored and taught by industry experts and the same renowned instructors that teach at Berklee College of Music's Boston campus.
                </p>
                <ul>
                  <li isrender="true">Accredited by the New England Association of Schools and Colleges</li>
                  <li isrender="true">Credits transfer to hundreds of other colleges and universities</li>
                  <li isrender="true">Many Berklee Online courses apply toward certificates and degree programs</li>
                </ul>
                <hr>
                <div class="interest-dates">
                  <div class="cert-course-dates">
                    <i>
                      <svg class="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far"
                           data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                           data-fa-i2svg="">
                        <path fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                      </svg><!-- <div class="far fa-clock"></div> -->
                    </i>
                    <a href="/about/academic-calendar" target="blank" isrender="true">
                      Next Term Starts January 14
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-container container">
      <div class="row ">
        <div class="type-list col-12 col-md-4">
        </div>
        <div class="lesson-list col-12 col-md-8">
          <div class="row">
            <div class="col-12 col-md-6"></div>
            <div class="col-12 col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list'
  }
</script>

<style scoped>
  @media (max-width: 767px){
    .feature.feature-photo {
      padding: 200px 30px 30px;
    }
  }

  .feature.feature-photo {
    background-color: #DEE2E5;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
  }
  .feature {
    padding: 75px 0;
    color: #25353c;
    background-color: #dee2e5;
    margin-bottom: 50px;
  }
  .feature.feature-photo {
    background-image: url(../assets/img/courses.jpg);
  }
  .feature .feature-callout {
    background-color: #eff1f3;
    padding: 40px;
  }
  .feature.feature-photo .feature-callout {
    position: relative;
    background: #25353C;
    color: #F2F2F2;
    margin-top: -104px;
    transition: all ease .2s;
  }

  .feature.feature-photo .feature-callout h1 {
    line-height: 120%;
    font-size: 2.5rem;
  }

  .feature p {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.3rem;
    line-height: 2.50rem;
  }

  .course_offering_index .feature ul li {
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
  }

  .feature .cert-course-dates, .feature .cert-course-dates a {
    color: #dee2e5;
    margin-top: 1rem;
    text-transform: uppercase;
  }
  .feature hr {
    margin-top: .5rem;
    margin-bottom: .5rem;
    border-top: 1px solid #7b8b96;
    color: #7b8b96;
  }

  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }

  svg:not(:root).svg-inline--fa {
    overflow: visible;
  }

  .svg-inline--fa.fa-w-16 {
    width: 1em;
  }

  .svg-inline--fa.fa-w-16 {
    width: 1em;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em;
  }

  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em;
  }
</style>
