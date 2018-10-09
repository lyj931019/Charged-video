<template>
  <div style="background-color: #eff1f2;">
    <div>
     <div class="lesson-topics">
       <div class="lesson-topic">
         <div class="topic-divider">
           fasdsa
         </div>
         <div class="lesson-content">
           dsafadsa
         </div>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'userLesson'
  }
</script>

<style scoped>
  @media (max-width: 800px){
    .lesson-topics .lesson-topic {
      font-size: 1.2em;
    }
    .lesson-topics {
      padding: 5px;
      margin-top: 10px;
    }
    .lesson-topics .lesson-topic {
      border-left-width: 0;
      padding: 30px 20px;
      border-width: 1px;
    }
    .lesson-topics .topic-divider {
      padding: 0;
    }
  }

  .lesson-topics .topic-divider {
    background-color: rgb(255, 255, 255);
    line-height: 100%;
    font-weight: 700;
    font-size: 30px;
    text-align: left;
    color: rgba(0,0,0,.8);
    border-top: 0 none;
    margin: 0 0 10px;
    padding: 0;
  }

  .lesson-topics {
    list-style: none;
    line-height: 160%;
    padding: 5px;
    margin: 0;
  }
  .lesson-topics .lesson-topic {
    font-weight: 400;
    color: rgba(0,0,0,.8);
    padding: 40px;
    background: #fff;
    margin: 0px auto 20px;
    border: 1px solid rgba(0,0,0,.14);
    border-width: 1px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    max-width: 760px;
  }
  .lesson-topics .lesson-content {
    margin-bottom: 40px;
    min-height: 800px;
    word-wrap: break-word;
    -webkit-touch-callout: initial;
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: initial;
    cursor: text;
    line-height: 1.3em;
    font-size: 21px !important;
  }
</style>
