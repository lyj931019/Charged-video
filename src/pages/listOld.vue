<template>
  <div>
    <MyHeader/>
    <div class="body">
      <div class="bg">
        <div class="container" style="min-height: 240px">
          <!--<div class="row">-->
            <!--<div class="col-12 col-md-6 content">-->
              <!--<h1>在线课程</h1>-->
              <!--<p>-->
                <!--我们为期12周的在线课程由行业专家和各大名校的教授进行授课。-->
              <!--</p>-->
              <!--<ul>-->
                <!--<li>-->
                  <!--由新英格兰学校和学院协会认证-->
                <!--</li>-->
                <!--<li>-->
                  <!--在线课程适用于各类证书和学位课程-->
                <!--</li>-->

              <!--</ul>-->
              <!--<hr>-->
              <!--<div>-->
                <!--<i class="svg">-->
                  <!--<svg aria-hidden="true" data-prefix="far" data-icon="clock" role="img"-->
                       <!--xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""-->
                       <!--class="svg-inline&#45;&#45;fa fa-clock fa-w-16">-->
                    <!--<path fill="currentColor"-->
                          <!--d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>-->
                  <!--</svg>-->
                <!--</i>-->
                <!--<span>-->
                  <!--下一期将于1月14日开始-->
                <!--</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
      <div class="course-mode" v-show="mode == 'orther'">
        <img src="../assets/img/list.png" @click="changeMode('list')" alt="">
      </div>
      <div class="course-mode" v-show="mode == 'list'">
        <img src="../assets/img/kuai.png" @click="changeMode('orther')" alt="">
      </div>
      <div class="course" v-show="mode == 'list'">
        <div class="row">
          <div class="col-12">
            <div class="sort d-sm-block d-none">
              <span class="title" @click.prevent="getCourseListFromSort('')"
                    :class="{'active':typeActive=='all'}">{{$t('list.all')}}</span>
              <div class="dropdown title" :class="{'active':typeActive=='sort'}" >
                <span class="dropdown-toggle" role="button"
                      id="classification" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false" data-offset="10,20">{{$t('list.classification')}}</span>
                <div class="dropdown-menu" aria-labelledby="classification" v-if="sortList.length>0">
                  <a class="dropdown-item" href="#" v-for="(type_item,index) in sortList"
                     @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'zh'">{{type_item.name}}</a>
                  <a class="dropdown-item" href="#" v-for="(type_item,index) in sortList"
                     @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'en'">{{type_item.name_en}}</a>
                </div>
              </div>
              <div class="dropdown title" :class="{'active':typeActive=='teacher'}">
                <span class="dropdown-toggle"  role="button"
                      id="teacher" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">{{$t('list.teachers')}}</span>
                <div class="dropdown-menu" aria-labelledby="teacher" v-if="teacherList.length>0">
                  <a class="dropdown-item" href="#" v-for="(type_item,index) in teacherList" @click.prevent="getCourseListFromTeacher(type_item.id)"
                  >{{type_item.name}}</a>
                </div>
              </div>

            </div>
            <div class="d-block d-sm-none">
              <div class="level">
                <a href="#" @click.prevent="getCourseListFromLevel('')">{{$t('list.all')}} {{$t('detail.level')}}</a>
                <p class="title">{{$t('detail.level')}}</p>
              </div>
              <div class="level-list">
                <a href="#" @click.prevent="getCourseListFromLevel(1)">
                  <Level :level="1"></Level>
                  <h6>{{$t('detail.level')}} 1</h6>
                </a>
                <a href="#" @click.prevent="getCourseListFromLevel(2)">
                  <Level :level="2"></Level>
                  <h6>{{$t('detail.level')}} 2</h6>
                </a>
                <a href="#" @click.prevent="getCourseListFromLevel(3)">
                  <Level :level="3"></Level>
                  <h6>{{$t('detail.level')}} 3</h6>
                </a>
                <a href="#" @click.prevent="getCourseListFromLevel(4)">
                  <Level :level="4"></Level>
                  <h6>{{$t('detail.level')}} 4</h6>
                </a>
                <a href="#" @click.prevent="getCourseListFromLevel(5)">
                  <Level :level="5"></Level>
                  <h6>{{$t('detail.level')}} 5</h6>
                </a>
              </div>
              <hr>
              <div class="sort">
                <p class="title">{{$t('list.classification')}}</p>
              </div>
              <ul class="sort-list">
                <li class="sort-item">
                  <a href="#" :class="typeId==''?'filter-on':''"
                     @click.prevent="getCourseListFromSort('')">{{$t('list.all')}}</a>
                </li>
                <template v-if="sortList.length>0">
                  <li class="sort-item" v-for="(type_item,index) in sortList">
                    <a href="#" :class="typeId==type_item.id?'filter-on':''"
                       @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'zh'">{{type_item.name}}</a>
                    <a href="#" :class="typeId==type_item.id?'filter-on':''"
                       @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'en'">{{type_item.name_en}}</a>
                  </li>
                </template>

              </ul>
              <hr>
              <div class="sort">
                <p class="title">{{$t('list.teachers')}}</p>
              </div>
              <ul class="sort-list">
                <li class="sort-item">
                  <a href="#" :class="teacherId==''?'filter-on':''"
                     @click.prevent="getCourseListFromTeacher('')">{{$t('list.all')}}</a>
                </li>
                <template v-if="teacherList.length>0">
                  <li class="sort-item" v-for="(type_item,index) in teacherList">
                    <a href="#" :class="teacherId==(type_item.id+'')?'filter-on':''"
                       @click.prevent="getCourseListFromTeacher(type_item.id+'')">{{type_item.name}}</a>
                  </li>
                </template>

              </ul>
            </div>
          </div>

        </div>
        <div class="row item-title d-none d-md-flex">
          <div class="col-12 col-md-4 mb-2 mb-md-0">{{$t('list.courseName')}}</div>
          <div class="col-6 col-md-3 mb-2 mb-md-0">{{$t('list.academicHour')}}</div>
          <div class="col-6 col-md-3 text-md-center">{{$t('list.tuition')}}</div>
          <div class="col-6 col-md-2 text-right">
            {{$t('detail.level')}}:
            <span class="dropdown-toggle " style="cursor: pointer;" role="button" id="level" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false" data-offset="0,0">
              <template v-if="levelActive != 'All'">
                {{levelActive}}
              </template>
              <template v-else>{{$t('list.all')}}</template>
            </span>
            <div class="dropdown-menu level-all" aria-labelledby="level" v-if="sortList.length>0">
              <a href="#" @click.prevent="getCourseListFromLevel('All')">
                <h6>{{$t('list.all')}}</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(1)">
                <Level :level="1"></Level>
                <h6>{{$t('detail.level')}} 1</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(2)">
                <Level :level="2"></Level>
                <h6>{{$t('detail.level')}} 2</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(3)">
                <Level :level="3"></Level>
                <h6>{{$t('detail.level')}} 3</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(4)">
                <Level :level="4"></Level>
                <h6>{{$t('detail.level')}} 4</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(5)">
                <Level :level="5"></Level>
                <h6>{{$t('detail.level')}} 5</h6>
              </a>
            </div>
          </div>
        </div>
        <template v-if="courseList.length>0">
          <div class="course-item row" v-for="(item,index) in courseList">
            <div class="course-info col-12 col-md-4 mb-2 mb-md-0">
              <h4 @click.prevent="goToDetail(item.num)">
                <span class="course-name" v-show="getLang == 'zh'">{{item.name}}</span>
                <span class="course-name" v-show="getLang == 'en'">{{item.name_en}}</span>
                <span class="course-id">({{item.num}})</span>
              </h4>

            </div>
            <div class="course-time col-6 col-md-3 mb-2 mb-md-0">{{item.period}}h</div>
            <div class="course-price col-6 col-md-3 text-md-center">
              {{$t('detail.coursePrice')}}&nbsp;:&nbsp;${{item.price}}
            </div>
            <div class="course-level col-6 col-md-2 text-md-right">
              <div>
                <Level :level="item.level"></Level>
                <p>{{$t('detail.level')}} {{item.level}}</p>
              </div>

            </div>
          </div>
        </template>
      </div>
      <div class="course new-list"  v-show="mode == 'orther'">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="level">
              <a href="#" @click.prevent="getCourseListFromLevel('')">{{$t('list.all')}} {{$t('detail.level')}}</a>
              <p class="title">{{$t('detail.level')}}</p>
            </div>
            <div class="level-list">
              <a href="#" @click.prevent="getCourseListFromLevel(1)" :class="{ active: levelActive == 1 }">
                <Level :level="1"></Level>
                <h6>{{$t('detail.level')}} 1</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(2)" :class="{ active: levelActive == 2 }">
                <Level :level="2"></Level>
                <h6>{{$t('detail.level')}} 2</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(3)" :class="{ active: levelActive == 3 }">
                <Level :level="3"></Level>
                <h6>{{$t('detail.level')}} 3</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(4)" :class="{ active: levelActive == 4 }">
                <Level :level="4"></Level>
                <h6>{{$t('detail.level')}} 4</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(5)" :class="{ active: levelActive == 5 }">
                <Level :level="5"></Level>
                <h6>{{$t('detail.level')}} 5</h6>
              </a>
            </div>
            <hr>
            <div class="sort">
              <p class="title">{{$t('list.classification')}}</p>
            </div>
            <ul class="sort-list">
              <li class="sort-item">
                <a href="#" :class="typeId==''?'filter-on':''"
                   @click.prevent="getCourseListFromSort('')">{{$t('list.all')}}</a>
              </li>
              <template v-if="sortList.length>0">
                <li class="sort-item" v-for="(type_item,index) in sortList">
                  <a href="#" :class="typeId==type_item.id?'filter-on':''"
                     @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'zh'">{{type_item.name}}</a>
                  <a href="#" :class="typeId==type_item.id?'filter-on':''"
                     @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'en'">{{type_item.name_en}}</a>
                </li>
              </template>

            </ul>
            <hr>
            <div class="sort">
              <p class="title">{{$t('list.teachers')}}</p>
            </div>
            <ul class="sort-list">
              <li class="sort-item">
                <a href="#" :class="teacherId==''?'filter-on':''"
                   @click.prevent="getCourseListFromTeacher('')">{{$t('list.all')}}</a>
              </li>
              <template v-if="teacherList.length>0">
                <li class="sort-item" v-for="(type_item,index) in teacherList">
                  <a href="#" :class="teacherId==(type_item.id+'')?'filter-on':''"
                     @click.prevent="getCourseListFromTeacher(type_item.id+'')">{{type_item.name}}</a>
                </li>
              </template>

            </ul>
          </div>
          <div class="col-12 col-lg-8">
            <div class="row course-list justify-content-start" v-if="courseList.length>0">
              <div class="col-12 col-lg-6" v-for="(item,index) in courseList">
                <div class="course-item">
                  <p class="course-id">{{item.num}}</p>
                  <h4 class="course-name" @click.prevent="goToDetail(item.num)" v-show="getLang == 'zh'">{{item.name}}</h4>
                  <h4 class="course-name" @click.prevent="goToDetail(item.num)" v-show="getLang == 'en'">{{item.name_en}}</h4>
                  <div class="course-info">
                    <div class="course-price">{{$t('detail.coursePrice')}}&nbsp;:&nbsp;${{item.price}}</div>
                    <div class="course-level">
                      <Level :level="item.level"></Level>
                      <p>{{$t('detail.level')}} {{item.level}}</p>
                    </div>
                  </div>
                  <!--<div class="course-intr" v-html="item.synopsis"></div>-->
                </div>

              </div>
            </div>
            <nav aria-label="Page navigation example" v-if="pageCount>1" class="page-navigation">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{disabled:page<=1}" @click="changePage(page-1)">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <template v-for="item in 9">
                  <li class="page-item" v-if="(item-5+page>=1) && (item-5+page<=pageCount)" :class="{active:item == 5}"
                      @click="changePage(page+item-5)">
                    <a class="page-link" href="#">{{(item - 5 + page)}}</a>
                  </li>
                </template>

                <li class="page-item" :class="{disabled:page>=pageCount}" @click="changePage(page+1)">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example" v-if="pageCount>1" class="page-navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled:page<=1}" @click="changePage(page-1)">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <template v-for="item in 9">
            <li class="page-item" v-if="(item-5+page>=1) && (item-5+page<=pageCount)" :class="{active:item == 5}"
                @click="changePage(page+item-5)">
              <a class="page-link" href="#">{{(item - 5 + page)}}</a>
            </li>
          </template>

          <li class="page-item" :class="{disabled:page>=pageCount}" @click="changePage(page+1)">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Common from '../components/common'
  import Level from '../components/level.vue'

  export default {
    name: 'listOld',
    components: {...Common, Level},
    data() {
      return {
        courseList: [],
        typeId: '',
        sortList: [],
        page: 1,
        pageCount: 1,
        pageSize: 100,
        totalCount: 1,
        typeActive: 'all',
        levelActive: 'All',
        teacherList:[],
        teacherId:'',
        mode:'list'
      }
    },
    computed: {
      ...mapGetters(['getLang'])
    },
    methods: {
      changeMode(mode){
        this.mode = mode;
      },
      getCourseList(key, value, page = 1) {
        let _this = this;
        let params = {
          page,
          pageSize: 100
        };
        if (key && value) {
          params[key] = value;
        }
        this.$http({
          method: 'get',
          url: '/courses',
          params
        }).then(res => {
          let result = res.data.data
          _this.courseList = result.items;
          _this.page = result.page;
          _this.pageCount = result.pageCount;
          _this.pageSize = result.pageSize;
          _this.totalCount = result.totalCount;
        })
      },
      getSortList() {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/types',
          params: {
            page: 1,
            pageSize: 100
          }
        }).then(res => {
          _this.sortList = res.data.data.items;
        })
      },
      getTeacherList() {
        let _this = this;
        this.$http({
          method: 'get',
          url: '/instructors',
          params: {
            page: 1,
            pageSize: 100
          }
        }).then(res => {
          _this.teacherList = res.data.data.items;
        })
      },
      goToDetail(num) {
        this.$router.push({name: 'detail', params: {num}})
      },
      getCourseListFromSort(typeId) {
        this.typeId = typeId;
        this.teacherId = '';
        if (typeId.length <= 0) {
          this.typeActive = 'all';
        } else {
          this.typeActive = 'sort';
        }
        this.levelActive = "All";
        this.getCourseList('type_id', typeId)
      },
      getCourseListFromTeacher(id){
        this.teacherId = id;
        this.typeId = '';
        if (id.length <= 0) {
          this.typeActive = 'all';
          this.getCourseList('', '');
        } else {
          this.typeActive = 'teacher';
          this.getCourseList('instructor_id', id)
        }
        this.levelActive = 'All';
      },
      getCourseListFromLevel(level) {
        if (level.length <= 0) {
          this.levelActive = 'All';
        } else {
          this.levelActive = level;
        }
        this.typeActive = 'all';
        this.getCourseList('level', level)
      },
      changePage(page) {
        if (page == this.page) {

        } else {
          if (page >= 1 && page <= this.pageCount) {
            this.getCourseList('', '', page);
          }
        }

      }
    },
    created(){
      this.getSortList();
      this.getTeacherList();
    },
    beforeMount:function(){
      if(this.$route.params.type === 'all'){
        this.getCourseList('','');
      }else{
        this.getCourseListFromSort(this.$route.params.type);
      }
      this.levelActive = 'All';
    },
    beforeRouteUpdate (to, from, next) {
      if(to.params.type === 'all'){
        this.getCourseList('','');
      }else{
        this.getCourseListFromSort(to.params.type);
      }
      this.levelActive = 'All';
      next();
    },
  }
</script>

<style scoped>
  #level +.dropdown-menu.level-all{
    left: -30px !important;
  }
  @media (max-width: 991px) {
    #level +.dropdown-menu.level-all{
      left: -15px !important;
    }
  }
  .course-mode {
    text-align: right;
  }
  .course-mode img{
    cursor: pointer;
    width: 24px;
  }
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

  .level a {
    color: #25353c;
    border-bottom: 1px solid #ee243c;
    float: right;
    font-size: 1.2rem;
  }

  .level a:hover {
    text-decoration: none;
  }

  .sort {
    margin-bottom: 3rem;
    border-bottom: 2px solid #aaa;
    padding-bottom: 1px;
  }

  .level .title, .sort .title {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: bold;
    margin-right: 4rem;
    display: inline-block;
    padding-bottom: 0.8rem;
    cursor: pointer;
    position: relative;
  }

  .title:hover {
    box-shadow: 0px 4px 0px 0px #ee243c;
  }

  .title.active {
    box-shadow: 0px 4px 0px 0px #ee243c;
  }

  #classification + .dropdown-menu {
    top: -20px !important;
    left: -20px !important;
  }

  #level + .dropdown-menu {
    left: -86px !important;
    text-align: center;
  }

  #level + .dropdown-menu a {
    font-weight: bold;
    color: #000000;
  }

  #level + .dropdown-menu a h6 {
    font-weight: bold;
  }

  .level-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .level-list a {
    text-align: center;
    display: inline-block;
    width: 60px;
  }
  .level-list a.active{
    text-decoration: underline;
  }
  .level-list a h6 {
    color: #25353c;
    margin-top: 0.1rem;
  }

  .item-title {
    font-weight: bold;
    font-size: 1rem;
  }

  .course-item {
    padding: 1.2rem 0 0.2rem;
    border-top: 1px solid rgb(222, 226, 229);
  }

  .new-list .course-item {
    box-shadow: rgba(0, 0, 0, 0.22) 3px 3px 8px;
    margin: 15px 0;
    padding: 30px;
    border: 1px solid rgb(222, 226, 229);
  }

  .new-list .sort{
    margin-bottom: 1rem;
    height: auto;
  }
  .new-list .sort .title{
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: bold;
    margin-right: 4rem;
    display: inline-block;
    padding-bottom: .2rem;
    padding-top: .2rem;
    cursor: pointer;
  }
  .new-list .course-info {
    text-align: right;
  }

  .new-list .course-price {
    float: left;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .course-item .course-info h4 {
    margin-bottom: 0.2rem;
  }

  .course-id {
    margin-bottom: 0;
    font-size: 1.2rem;
    color: #919191;
    cursor: pointer;
  }

  .course-name {
    box-shadow: rgb(238, 36, 60) 0px -1px 0px inset;
    display: inline-block;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
  }

  .course-name:hover {
    background-color: rgba(238, 36, 60, 0.2);
  }

  .course-time {
    font-size: 1.2rem;
  }

  .course-price {
    font-size: 1.2rem;
  }

  .course-level {
    font-size: 0.8rem;
    font-weight: 900;
    vertical-align: top;
  }

  .course-level > div {
    display: inline-block;
    text-align: center;
  }

  .course-level p {
    margin: 0;
  }

  .course-intr {
    font-size: 0.9rem;
  }

  .sort-list {
    list-style: none;
  }

  .sort-list .sort-item a {
    color: black;
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    position: relative;
  }

  .sort-list .sort-item {
    list-style-type: none;
    margin-bottom: .28em;
    padding: 0.25em 0 0 2.5em;
  }

  .sort-list .sort-item a.filter-on {
    text-decoration: none;
    color: #25353c;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }

  .sort-list .sort-item a:before {
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

  .sort-list .sort-item a.filter-on:after {
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

  nav.page-navigation {
    margin-top: 2rem;
  }
</style>
