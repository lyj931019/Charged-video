<template>
  <section>
    <div class='mock'>
      <div class='main'>
        <img :src="'./static/img/loading.png'" alt="">
        <p>加载中...</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name:'loading',
  }
</script>


<style scoped>
  section{
    width:100vw;
    height:100vh;
    position:fixed;
    top: 0;
    left: 0;
    z-index:2000;
    background-color:rgba(0,0,0,0.6);
  }
  .mock{
    text-align: center;
  }
  .main{
    margin:200px auto;
    text-align:center;
    display: inline-block;
    /*background-color: #000;*/
    padding: 10px;
    color: #12a7ec;
  }
  .main>p{
    font-size: 0.8rem;
    margin-top: 0.3rem;
    font-weight: bold;
  }
  @keyframes loading {
    to{
      transform:rotate(0deg);
    }
    from{
      transform:rotate(-180deg);
    }
  }
  .main>img{
    animation: loading 2s linear infinite;
  }
</style>
