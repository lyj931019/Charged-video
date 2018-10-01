<template>
  <div class="list-container">
    <!--<h1 v-show="myShow">{{msg}}</h1>-->
    <!--<button @click="changeShow">{{getMyShow}}</button>-->
    <div v-for="item in showItems" :key="item.id">
      <TodoItem :index="item.id" :msg="item.msg"/>
    </div>
    <div class="add">
      <input type="text" v-model="msg">
      <span @click="myAddItem">ADD</span>
    </div>
  </div>
</template>

<script>
  import TodoItem from './todo-item.vue'
  import { createNamespacedHelpers } from 'vuex'

  const { mapMutations, mapGetters } = createNamespacedHelpers('todo')
  export default {
    name:'todo-list',
    components:{TodoItem},
    data(){
      return {
        msg : ''
      }
    },
    computed:{
      ...mapGetters(['showItems'])
    },
    methods:{
      ...mapMutations(['addItem']),
      myAddItem(){
        this.addItem(this.msg);
        this.msg = '';
      }
    }
  }
</script>


<style lang="scss">
  .list-container{
    width: 250px;
    margin: 0 auto;
    border: 2px solid #0093e4;
    font-size: 20px;
    box-sizing: border-box;
    div.add{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      input{
        outline: none;
        border: none;
        font-size: 24px;
        padding-left:12px;
        width: 75%;
      }
      span{
        border-left: 2px solid #0093e4;
        font-weight: bold;
        font-size: 22px;
        color: #0093e4;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        width: 24%;
        box-sizing: border-box;
      }
    }
  }
</style>
