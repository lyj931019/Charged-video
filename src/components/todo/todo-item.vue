<template>
  <div class="item-container">
    <span class="index">{{index}}</span>
    <span class="msg">{{msg}}</span>
    <span class="del" @click="removeItem(index)">X</span>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapMutations } = createNamespacedHelpers('todo')
  export default {
    name:'todoItem',
    props:['msg','index'],
    methods:{
      ...mapMutations(['removeItem'])
    }
  }
</script>

<style lang="scss">
  .item-container{
    border-bottom: 2px solid #0093e4;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      display: inline-block;
      vertical-align: middle;
      height: 40px;
      line-height: 40px;
    }
    span.index{
      font-weight: bold;
      color: #0093e4;
      font-size: 26px;
      width: 15%;
      text-align: center;
      border-right: 2px solid #0093e4;
    }
    span.msg{
      width: 70%;
    }
    span.del{
      width: 10%;
      color: #ff200b;
      text-align: center;
      border-left: 2px solid #0093e4;
    }
  }
</style>
