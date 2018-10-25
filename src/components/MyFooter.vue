<template>
  <div class="foot-bg">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 foot-icons">
          <img src="../assets/img/footer_award_upcea.svg">
          <img src="../assets/img/footer_logo.svg">
          <img src="../assets/img/footer_award_QS_Stars.svg">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>
            <a href="#" style="color: #FFF;">
              Berklee College of Music
            </a>
            &nbsp;is accredited by the New England Association of Schools and Colleges (NEASC)
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>
            Berklee Online is a University Professional and Continuing Education Association (UPCEA) award-winner twelve years in a row (2005-2017).</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 center text-center">
          © Copyright 2001 - 2018
          <a href="#" target="_blank" class="foot-btn">Berklee College of Music</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyHeader',
    data() {
      return {
        header: 'MyHeader'
      }
    }
  }
</script>

<style scoped>
  .foot-bg{
    background-color: #4c5960;
    color: #dee2e5;
    padding: 2rem 1rem 2.5rem;
    justify-content: space-between;
    text-align: center;
  }
  .foot-icons img{
    margin: 0 10px 15px 0;
    max-height: 60px;
    max-width: 110px;
  }
  a.foot-btn{
    color: #dee2e5;
    box-shadow: inset 0 -1px 0 #ee243c;
  }
</style>
