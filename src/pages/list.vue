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
    <div class="list-container">
      <div class="row ">
        <div class="type-list col-12 col-lg-3">
          <div class="inner-scroller">
            <div class="filter form-group" id="filter_controls"></div>
            <div class="filter level-filter-list">
              <p>
                Level
              </p>
              <ul class="filter-level sidebar-filter filter-all">
                <li class="filter course-filter-all">
                  <a class="level-filter all filter-on" data-filter-by="all" href="#">All Levels</a>
                </li>
                <li class="filter">
                  <a class="level-filter" data-filter-by="level-1" data-html="true" data-toggle="tooltip" href="#" title="" data-original-title="<p class='level-tip'>Foundational courses, no prerequisites required.</p>" @click.prevent="getLessionFromLevel(1)">
                    <img alt="Level 1" src="../assets/img/skill-level-1.svg">
                    Level 1
                  </a>
                </li>
                <li class="filter">
                  <a class="level-filter" data-filter-by="level-2" data-html="true" data-toggle="tooltip" href="#" title="" data-original-title="<p class='level-tip'>Intermediate courses, some prerequisites may be required.</p>" @click.prevent="getLessionFromLevel(2)">
                    <img alt="Level 2" src="../assets/img/skill-level-2.svg">
                    Level 2
                  </a>
                </li>
                <li class="filter">
                  <a class="level-filter" data-filter-by="level-3" data-html="true" data-toggle="tooltip" href="#" title="" data-original-title="<p class='level-tip'>Advanced intermediate courses, some prerequisites required.</p>" @click.prevent="getLessionFromLevel(3)">
                    <img alt="Level 3" src="../assets/img/skill-level-3.svg">
                    Level 3
                  </a>
                </li>
                <li class="filter">
                  <a class="level-filter" data-filter-by="level-4" data-html="true" data-toggle="tooltip" href="#" title="" data-original-title="<p class='level-tip'>Advanced courses, prerequisites required.</p>" @click.prevent="getLessionFromLevel(4)">
                    <img alt="Level 4" src="../assets/img/skill-level-4.svg">
                    Level 4
                  </a>
                </li>
              </ul>
            </div>
            <div class="filter filter-interest">
              <hr>
              <p>Interest</p>
              <ul class="interest-filter-list sidebar-filter expand-list filter-all">
                <li class="filter">
                  <a class="all" data-filter-by="all" href="#" :class="type==0?'filter-on':''" @click.prevent="getLessionFromType('')">All</a>
                </li>
                <template v-if="typeList.length>0">
                  <li class="filter" v-for="(type_item,index) in typeList">
                    <a class="all" data-filter-by="all" href="#" :class="type==type_item.id?'filter-on':''" @click.prevent="getLessionFromType(type_item.id)">{{type_item.name}}</a>
                  </li>
                </template>

              </ul>
            </div>
          </div>
        </div>
        <div class="lesson-list col-12 col-lg-9">
          <div class="filtered-index row">
            <ul class="filtering-by"></ul>
            <div class="filtered-index row"></div>
            <template v-if="lessonList.length>0">
              <div class="all item music-history-and-liberal-arts music-production" v-for="(item,index) in lessonList">
                <div class="card-main">
                  <div class="course-code hidden-sm-down">{{item.num}}</div>
                  <a class="title" href="#" @click.prevent="goToDetail(item.num)">{{item.name}}</a>
                  <div class="details">
                    <div class="course-level">
                      <div style="cursor:pointer;" class="course-level-icon offering-supporting-detail skill-level-3" data-toggle="popover" data-trigger="focus" tabindex="0" data-content="300 level course. Advanced Intermediate course material." data-placement="left" data-original-title="Level 3 Course" rel="nofollow">
                        <!--<img :src="'../assets/img/skill-level-'+item.level+'.svg'" >-->
                        <template v-if="item.level ==1">
                          <img src="../assets/img/skill-level-1.svg">
                        </template>
                        <template v-else-if="item.level ==2">
                          <img src="../assets/img/skill-level-2.svg">
                        </template>
                        <template v-else-if="item.level ==3">
                          <img src="../assets/img/skill-level-3.svg">
                        </template>
                        <template v-else>
                          <img src="../assets/img/skill-level-4.svg">
                        </template>
                      </div>
                      <div class="key-course-text">
                        <h4>Level {{item.level}}</h4>
                      </div>
                    </div>
                    <div class="course-tuition">
                      <div class="for-credit">
                        Credit:
                        ${{item.price}}
                      </div>
                      <div class="no-credit">
                        Non-credit:
                        ${{item.price}}
                      </div>
                    </div>
                  </div>
                  <div class="desc" v-html="item.synopsis"></div>
                </div>
                <div class="card-foot">

                </div>
              </div>
            </template>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data(){
      return {
        lessonList:[],
        type:'0',
        typeList:[]
      }
    },
    methods:{
      getLessonList(){
        let _this = this;
        this.$http({
          method:'get',
          url:'/courses',
          params: {
            page: 1,
            pageSize:20
          }
        }).then(res=>{
          _this.lessonList=res.data.data.items;
        })
        this.$http({
          method:'get',
          url:'/types',
          params: {
            page: 1,
            pageSize:20
          }
        }).then(res=>{
          console.log(res.data)
          _this.typeList=res.data.data.items;
//          console.log(_this.lessonList)
        })
      },
      getLessionFromLevel(level){
        let _this = this;
        this.$http({
          method:'get',
          url:'/courses',
          params: {
            page: 1,
            pageSize:20,
            level
          }
        }).then(res=>{
          console.log(res.data)
          _this.lessonList=res.data.data.items;
          console.log(_this.lessonList)
        })
      },
      getLessionFromType(type_id){
        let _this = this;
        this.type = type_id;
        type_id = type_id===0?'':type_id;
        this.$http({
          method:'get',
          url:'/courses',
          params: {
            page: 1,
            pageSize:20,
            type_id
          }
        }).then(res=>{
          console.log(res.data)
          _this.lessonList=res.data.data.items;
          console.log(_this.lessonList)
        })
      },
      goToDetail(num){
        this.$router.push({ name: 'detail', params: { num }})
      }
    },
    beforeMount:function(){
      this.getLessonList();
    }
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


  /**/
  /**/
  .filtered-index {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-left: -15px;
    margin-right: -15px;
  }
  .filtering-by {
    display: block;
    margin: 0px 0px 0px 15px;
    padding: 0px;
  }
  .filtered-index {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-left: -15px;
    margin-right: -15px;
  }
  .filtered-index .item {
    box-shadow: rgba(0, 0, 0, 0.22) 3px 3px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(222, 226, 229);
    border-image: initial;
    margin: 15px;
    padding: 30px;
  }
  .filtered-index .course-code {
    font-size: 1.16rem;
    margin-top: 5px;
  }
  .filtered-index a.title {
    color: rgb(37, 53, 60);
    box-shadow: rgb(238, 36, 60) 0px -1px 0px inset;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.67rem;
    line-height: 2.25rem;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  .filtered-index .details {
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 1.33rem;
    line-height: 1.7rem;
    margin: 10px 0px;
  }
  .filtered-index .course-level {
    float: right;
  }
  .filtered-index .course-level-icon > img {
    height: 20px;
    margin-left: 7px;
  }
  .filtered-index .course-level h4 {
    font-size: 1rem;
    line-height: 1rem;
    margin-top: 5px;
  }
  .filtered-index .desc {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  .inner-scroller {
    padding-top: 15px;
    padding-bottom: 30px;
  }
  .filter {
    margin-bottom: 15px;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .level-filter-list {
    position: relative;
  }
  .filters p, .filter .col-form-label {
    font-family: "Avenir Next Cyr W00 Demi", Helvetica, Arial, sans-serif;
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
  .sidebar-filter.filter-level {
    margin: 0;
    padding: 0;
    -webkit-display: flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-around;
    justify-content: space-between;
  }
  .sidebar-filter.filter-level li.course-filter-all {
    font-family: "Avenir Next Cyr W00 Light", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    line-height: 1.2rem;
    position: absolute;
    top: 3px;
    right: 0;
    z-index: 1;
  }
  .sidebar-filter.filter-level li {
    list-style-type: none;
    margin-bottom: 0;
  }
  .sidebar-filter.filter-level li.course-filter-all a.filter-on {
    background: none;
  }
  .sidebar-filter.filter-level li a.filter-on {
    background: #EFF1F3;
    border-bottom: 1px solid #ee243c;
  }
  .sidebar-filter.filter-level li.course-filter-all a {
    padding: 0 0 2px 0;
  }
  .sidebar-filter.filter-level li a {
    border: 2px solid #FFF;
    color: black;
    -webkit-display: flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    padding: 10px 8px 2px 8px;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }
  .sidebar-filter.filter-level li a img {
    margin: auto;
    width: 30px;
  }
  .sidebar-filter:not(.filter-level) li:not(.expand-section) {
    list-style-type: none;
    margin-bottom: .28em;
    padding: 0.25em 0 0 2.5em;
  }
  .sidebar-filter:not(.filter-level) li:not(.expand-section) a.filter-on {
    text-decoration: none;
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }
  .sidebar-filter:not(.filter-level) li:not(.expand-section) a {
    color: black;
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    position: relative;
  }
  .sidebar-filter:not(.filter-level) li:not(.expand-section) a:before {
    content: " ";
    display: block;
    border: solid 0.8em #DEE2E5;
    border-radius: 1.4em;
    height: 0;
    width: 0;
    position: absolute;
    left: -2.75em;
    top: 40%;
    margin-top: -0.75em;
  }
  .sidebar-filter:not(.filter-level) li:not(.expand-section) a.filter-on:after {
    content: " ";
    display: block;
    width: 0.7em;
    height: 1.2em;
    border: solid limegreen;
    border-width: 0 0.3em 0.3em 0;
    position: absolute;
    left: -2.3em;
    top: 0;
    margin-top: -0.2em;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
