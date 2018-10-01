import state from "../rootState";

const todo = {
  namespaced: true,
  state: {
    id:0,
    list:[
      {id:0,msg:'睁开眼睛',isRemove:false}
    ]
  },
  mutations: {
    addItem:(state,msg)=>{
      state.id++;
      state.list.push({id:state.id,msg,isRemove:false});
    },
    removeItem:(state,id)=>{
      for(let item of state.list){
        if(item.id === id){
          item.isRemove = true;
          break;
        }
      }
    }
  },
  // actions: { ... },
  getters: {
    showItems: state => state.list.filter(item => !item.isRemove) // 和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
  }
}
export default todo;
