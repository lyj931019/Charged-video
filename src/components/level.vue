<template>
  <!--<span class="level-container">-->
    <!--<template v-if="level ==1">-->
      <!--<img src="../assets/img/skill-level-1.svg">-->
    <!--</template>-->
    <!--<template v-else-if="level ==2">-->
      <!--<img src="../assets/img/skill-level-2.svg">-->
    <!--</template>-->
    <!--<template v-else-if="level ==3">-->
      <!--<img src="../assets/img/skill-level-3.svg">-->
    <!--</template>-->
    <!--<template v-else>-->
      <!--<img src="../assets/img/skill-level-4.svg">-->
    <!--</template>-->
  <!--</span>-->
  <div class="signal-container" >
    <div class="level" :style="{width:level*5+(level-1)+'px'}"></div>
    <div class="signal-wrap">
      <div class="line line-1 bar"></div>
      <div class="line"></div>
      <div class="line line-2 bar"></div>
      <div class="line"></div>
      <div class="line line-3 bar"></div>
      <div class="line"></div>
      <div class="line line-4 bar"></div>
      <div class="line"></div>
      <div class="line line-5 bar"></div>
      <div class="line"></div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'level',
    props: {
      level: {
        type: Number,
        default: 4,
      }
    }
  }
</script>
<style scoped>
  .level-container{
    /*display: flex;*/
    /*justify-content: flex-start;*/
    text-align: center;
  }
  img {
    max-width: 30px;
    vertical-align: middle;
  }
  .name{
    font-size: 1.1rem;
    font-weight: bold;
  }
  .signal-container{
    width: 30px;
    height: 30px;
    overflow: hidden;
    display: inline-block;
    background-color: #c5ccd2;
    position: relative;
  }
  .cable{
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-align: center;
  }
  .cable img{
    max-width: 85%;
  }
  .level{
    background-color: #ee243c;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 1px;
    left: 0;

  }

  .signal-wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    z-index: 2;
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
  .line{
    background-color: #fff;
    height: 100%;
    margin:0;
    padding:0;
    font-size: 0;
    display: inline-block;
    flex: 1 0 auto;
    /*border:0.5px solid #fff;*/
    width: 1px;
  }
  .line.bar{
    width: 5px;
    /*border:0.5px solid #fff;*/
  }
  .line.line-1{
    height: 80%;
  }
  .line.line-2{
    height: 60%;
  }
  .line.line-3{
    height: 40%;
  }
  .line.line-4{
    height: 20%;
  }
  .line.line-5{
    height: 1%;
  }

</style>
