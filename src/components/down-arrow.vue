<template>
  <i class="down-arrow" :class="{active:active}"><svg class="svg-inline--fa fa-caret-right fa-w-6" aria-hidden="true" data-prefix="fa"
         data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
         data-fa-i2svg="">
      <path fill="currentColor"
            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
    </svg>
  </i>
</template>

<script>
  export default {
    name:'down-arrow',
    props:{
      active:Boolean
    }
  }
</script>

<style>
  i.down-arrow{
    display: inline-block;
    width: .73rem;
    height: 1.3rem;
    transition: transform .2s linear;
    vertical-align: top;
  }
  i.down-arrow svg{
    width: 100%;
    height: 100%;
  }
  i.down-arrow.active{
    transform:rotate(90deg) translate(.5rem,0);
  }
</style>
