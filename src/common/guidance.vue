<template>
  <div class="advisor-contact-block">
    <p class="guidance">Need guidance?</p>
    <a class="tel-main" href="tel:18662375533">1-866-BERKLEE</a>
    <a class="tel-intl" href="tel:16177472146" isrender="true">Int'l: +1-617-747-2146</a>
    <p class="call-text">
      <a href="tel:18662375533">Call</a>,&nbsp;<a href="sms:18662375533">Text</a>,&nbsp;or&nbsp;<a href="mailto: advisors@online.berklee.edu">Email us</a></p>
  </div>
</template>
<script>
  export default {
    name : 'guidance'
  }
</script>

<style scoped>
  .advisor-contact-block {
    background-color: #25353c;
    color: white;
    padding: 30px;
    text-align: center;
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    margin: 0;
  }
  p, p.txt-md, .txt-md {
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.65rem;
  }
  .advisor-contact-block .tel-main {
    font-family: "Avenir Next Cyr W00 Bold", Helvetica, Arial, sans-serif;
    font-size: 1.5rem;
    line-height: 1.69rem;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-weight: bold;

  }
  .advisor-contact-block a:hover, .advisor-contact-block a:hover:hover,.advisor-contact-block a:active:hover {
    background-color: rgba(238, 36, 60, 0.2);
    text-decoration: none;
    box-shadow: rgb(238, 36, 60) 0px -1px 0px inset;
    color: white;
    transition: all 0.2s ease;
  }
  .advisor-contact-block .tel-intl{
    font-family: "Avenir Next Cyr W00 Regular", Helvetica, Arial, sans-serif;
    font-size: .8rem;
    line-height: 1.65rem;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: block;
    font-weight: normal;
  }
  .advisor-contact-block a{
    text-decoration: none;
    color: white;
  }
  .guidance {
    margin-bottom: .26rem;
  }
  .call-text {
    margin: .38rem auto 0;
  }
  .advisor-contact-block a, .advisor-contact-block a:hover, .advisor-contact-block a:active {
    color: #25353c;
    text-decoration: none;
    -webkit-box-shadow: inset 0 -1px 0 #ee243c;
    box-shadow: inset 0 -1px 0 #ee243c;
    transition: all ease .2s;
    color: white;
    font-weight: bold;
  }
  .advisor-contact-block a{
    font-size: 1rem;
  }
</style>
