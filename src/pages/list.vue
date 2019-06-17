<template>
  <div>
    <MyHeader/>
    <div class="body">
      <div class="bg">
        <div class="container">
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
      <div class="course container-fluid">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="level">
              <a href="#" @click.prevent="getCourseListFromLevel('')">All Level</a>
              <p class="title">Level</p>
            </div>
            <div class="level-list">
              <a href="#" @click.prevent="getCourseListFromLevel(1)">
                <Level :level="1"></Level>
                <h6>Level 1</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(2)">
                <Level :level="2"></Level>
                <h6>Level 2</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(3)">
                <Level :level="3"></Level>
                <h6>Level 3</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(4)">
                <Level :level="4"></Level>
                <h6>Level 4</h6>
              </a>
              <a href="#" @click.prevent="getCourseListFromLevel(5)">
                <Level :level="5"></Level>
                <h6>Level 5</h6>
              </a>
            </div>
            <hr>
            <div class="sort">
              <p class="title">{{$t('list.classification')}}</p>
            </div>
            <ul class="sort-list">
              <li class="sort-item">
                <a href="#"  :class="typeId==''?'filter-on':''"  @click.prevent="getCourseListFromSort('')">{{$t('list.all')}}</a>
              </li>
              <template  v-if="sortList.length>0">
                <li class="sort-item" v-for="(type_item,index) in sortList">
                  <a href="#"  :class="typeId==type_item.id?'filter-on':''"  @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'zh'">{{type_item.name}}</a>
                  <a href="#"  :class="typeId==type_item.id?'filter-on':''"  @click.prevent="getCourseListFromSort(type_item.id)" v-show="getLang == 'en'">{{type_item.name_en}}</a>
                </li>
              </template>

            </ul>
          </div>
          <div class="col-12 col-lg-8">
            <div class="row course-list justify-content-center"  v-if="courseList.length>0">
              <div class="col-11 col-lg-5 course-item" v-for="(item,index) in courseList">
                <p class="course-id">{{item.num}}</p>
                <h4 class="course-name" @click.prevent="goToDetail(item.num)">{{item.name}}</h4>
                <div class="course-info">
                  <div class="course-price">{{$t('detail.coursePrice')}}&nbsp;:&nbsp;${{(item.price / 100).toFixed(2)}}</div>
                  <div class="course-level">
                    <Level :level="item.level"></Level>
                    <p>Level {{item.level}}</p>
                  </div>
                </div>
                <div class="course-intr" v-html="item.synopsis"></div>
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
                  <li class="page-item" v-if="(item-5+page>=1) && (item-5+page<=pageCount)" :class="{active:item == 5}" @click="changePage(page+item-5)">
                    <a class="page-link" href="#">{{(item-5+page)}}</a>
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
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Common from '../components/common'
  import Level from '../components/level.vue'
  export default {
    name: 'listF',
    components: {...Common,Level},
    data() {
      return {
        courseList:[],
        typeId:'',
        sortList:[],
        page:1,
        pageCount:1,
        pageSize:1,
        totalCount:1
      }
    },
    computed: {
      ...mapGetters(['getLang'])
    },
    methods: {
      getCourseList(key,value,page=1){
        let _this = this;
        let params =  {
          page,
          pageSize:10
        };
        if(key && value){
          params[key]=value;
        }
        this.$http({
          method:'get',
          url:'/courses',
          params
        }).then(res=>{
          let result = res.data.data
          _this.courseList=result.items;
          _this.page = result.page;
          _this.pageCount = result.pageCount;
          _this.pageSize = result.pageSize;
          _this.totalCount = result.totalCount;
        })
      },
      getSortList(){
        let _this = this;
        this.$http({
          method:'get',
          url:'/types',
          params: {
            page: 1,
            pageSize:10
          }
        }).then(res=>{
          _this.sortList=res.data.data.items;
        })
      },
      goToDetail(num){
        this.$router.push({ name: 'detail', params: { num }})
      },
      getCourseListFromSort(typeId){
        this.typeId = typeId;
        this.getCourseList('type_id',typeId)
      },
      getCourseListFromLevel(level){
        this.getCourseList('level',level)
      },
      changePage(page){
        if(page == this.page){

        }else{
          if(page>=1 && page<=this.pageCount){
            this.getCourseList('','',page);
          }
        }

      }
    },
    created(){
      this.getSortList();
    },
    beforeMount:function(){
//      this.getCourseList('','');
      if(this.$route.params.type === 'all'){
        this.getCourseList('','');
      }else{
        this.getCourseListFromSort(next.params.type);
      }
    },
    beforeRouteUpdate (to, from, next) {
      if(next.params.type === 'all'){
        this.getCourseList('','');
      }else{
        this.getCourseListFromSort(next.params.type);
      }
      next();
    },
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
  .level a:hover{
    text-decoration: none;
  }
  .level .title,.sort .title{
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
    font-size: 0.9rem;
  }
  .course-name{
    box-shadow: rgb(238, 36, 60) 0px -1px 0px inset;
    display: inline-block;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
  }
  .course-name:hover{
    background-color: rgba(238,36,60,0.2);
  }
  .course-info{
    text-align: right;
  }
  .course-price{
    float: left;
    font-size: 1rem;
    font-weight: 600;
  }
  .course-level{
    display: inline-block;
    text-align: center;
    /*float: right;*/
    font-size: 0.8rem;
    font-weight:900;
    vertical-align: top;
  }
  .course-level p{
    margin: 0;
  }
  .course-intr{
    font-size: 0.9rem;
  }
  .sort-list{
    list-style: none;
  }
  .sort-list .sort-item a{
    color: black;
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    position: relative;
  }
  .sort-list .sort-item{
    list-style-type: none;
    margin-bottom: .28em;
    padding: 0.25em 0 0 2.5em;
  }
  .sort-list .sort-item a.filter-on{
    text-decoration: none;
    color: #25353c;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
  }
  .sort-list .sort-item a:before{
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

  nav.page-navigation{
    margin-top: 2rem;
  }
</style>
