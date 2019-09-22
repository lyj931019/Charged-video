<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 22:52:35
 * @LastEditTime: 2019-09-01 17:01:36
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="col-md-12 col-xl-6">
    <div class="class-card" >
      <div class="class-card-img">
        <router-link :to="{name: 'detail', params: { num: item.course.num } }" target="_blank">
          <img
            style="margin-right: 10px;"
            width="200"
            height="116"
            :src="item.course.image"
          />
        </router-link>
      </div>
      <div class="class-card-cont">
        <h3 class="study-hd">
          <router-link :to="{name: 'detail', params: { num: item.course.num } }" target="_blank">
            {{{zh: item.course.name, en: item.course.name_en}[getLang]}}
            <span class="try" v-if="item.try">({{$t('userCenter.tryCourse')}})</span>
          </router-link>
          <!-- <span class="i-new">新批改</span> -->
        </h3>
        <div class="study-points">
          <span class="span-common">Progress: {{parseInt((item.progress_submit / item.progress_total) * 100) || 0}}%</span>
          <span class="i-mid span-common">{{$t('userCenter.cutoff')}}: {{item.used_at | formatDate}}</span>
          <router-link :to="{ name: 'pay', params: {num:item.course.num}}" class="i-right span-common" v-if="item.try">{{$t('detail.buyCourse')}}</router-link>
        </div>
        <div class="catog-points">
          <span class="btn-red continute-btn" @click="handleClick">{{$t('detail.enter')}}</span>
          <span class=" span-common">
            <a href="/u/8037422/notepad/1011">
              {{$t('learningCenter.homework')}}
              <i>{{item.progress_total}}</i>
            </a>
          </span>
          <span class="i-mid span-common">
            <a href="/u/8037422/course/1011/codes">
              {{$t('userCenter.correct')}}
              <i>{{item.progress_completed}}</i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '../common/date'
import {mapGetters} from 'vuex'

export default {
  name: "ClassCard",
  filters:{
    formatDate(time){
      let date = new Date(time*1000);
      return formatDate(date,'yyyy-MM-dd');
    }
  },
  computed: {
    ...mapGetters([
      'getLang'
    ])
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', this.item.course.id)
    }
  }
}
</script>
<style lang="scss">
.class-card {
  width: 100%;
  padding: 0;
  border-bottom: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  &-img{
    float: left;
    img{
      vertical-align: top;
    }
  }
  &-cont{
    float: left;
    padding-left: 0;
    padding-top: 24px;
    padding-bottom: 28px;
    min-width: 270px;
    width: 100%;
    border-bottom: 1px solid #d9dde1;
    box-sizing: border-box;
    .study-hd{
      font-size: 20px;
      line-height: 36px;
      height: 36px;
      display: flex;
      flex-direction: row;
      align-items: center;
      a{
        width: calc(100% - 54px);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #5e5e5e;
        &:link, &:visited {
          color: #1c1f21;
        }
      }
      .i-new {
        width: 42px;
        margin-left: 12px;
        font-size: 14px;
        color: #787d82;
      }
    }
    .study-points {
      padding: 0;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      color: #4d555d;
      align-items: center;
      span{
        font-size: 14px;
        margin-right: 14px;
        color: #787d82;
        &:first-child{
          color: #f01400;
        }
      }
    }
    .catog-points {
      margin-top: 12px;
      padding-bottom: 0;
      flex-direction: row;
      align-items: center;
      position: relative;
      .continute-btn{
        display: inline-block;
        right: 0;
        bottom: 0;
        font-size: 14px;
        border: none;
        color: #fff;
        width: 104px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background: rgba(240,20,20,.6);
        border-radius: 18px;
        position: static;
        margin-right: 32px;
        &:hover {
          background-color: #f01414;
          color: #fff;
        }
      }
      a {
        color: #787d82;
        &a:link, &:visited {
          color: #1c1f21;
        }
      }
      span {
        width: auto;
        margin-right: 35px;
        i {
          color: #b5b9bc;
          font-style: normal;
        }
      }
    }
  }
  .span-common{
    &.i-right{
      background: rgba(240,20,20,.6);
      border-radius: 8px;
      color: #fff;
      padding: 5px 8px;
      &:hover {
        background-color: #f01414;
        color: #fff;
      }
    }
  }
}

  @media (max-width: 600px) {
    .class-card{
      display: block;
      &-img{
        text-align: center;
        float: none;
        img{
          width: 100% !important;
          height: auto !important;
        }
      }
      .class-card-cont{
        padding: 12px 0;
        .study-hd{
          font-size: 16px;
          line-height: 24px;
          height: 24px;
        }
      }
    }
    .col-md-12{
      padding: 0;
      margin-bottom: 15px;
    }
  }
</style>
