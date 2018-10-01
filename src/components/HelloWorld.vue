<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <Row class="row">
      <Col xl="2" sm="12" md="6" lg="4" xs="12" v-for="(index) in items" :key="index">
        <div class="item" >{{index}}</div>
      </Col>
    </Row>
    <br><br><br><br><br>
    &nbsp;<Btn type="success" size="large" @click="handleClick">按钮</Btn>
    &nbsp;<Btn type="danger" @click="testMessage">按钮</Btn>
    &nbsp;<Btn type="primary" shape="half">按钮</Btn>
    &nbsp;<Btn type="primary" shape="circle">按钮</Btn>
    &nbsp;<Btn type="warning" size="small">按钮</Btn>
    <Btn type="warning" size="small" long>按钮</Btn>
    <Icon type="android-arrow-forward" style="font-size: 88px;"/>
    <Icon type="android-arrow-forward" style="color:#0093e4"/>
    <Icon type="videocamera" style="color:#0093e4"/>
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Lwitch open @change="switchChange" />{{switchStatus}}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Lwitch />

    <div v-if="choseList.length>0">
      <div v-for="(tmp,index) in choseList">
        <div @click="removeChose(index)">
          {{tmp}}
        </div>
      </div>
    </div>
    <hr/>
    <div v-for="(tmp,index) in list">
      <div @click="addChose(index)">
        {{tmp}}
      </div>
    </div>
    <Container>container</Container>

    <br>
    <hr>
    <Radio name="sex" v-model="rdoValue" trueValue="男" falseValue="女">
      <span>男</span>
    </Radio>
    <Radio name="sex" v-model="rdoValue" trueValue="女" falseValue="男" >
      <span>女</span>
    </Radio>
    <h1>{{rdoValue}}</h1>
    <hr>
    <br>
    <br><br><br><br><br><br><br>
    <input type="text" @input="justNumber" v-model="value">

    <StoreTest></StoreTest>
    <TodoList></TodoList>
    <button class="btn">boot4</button>
  </div>

</template>

<script>
  import myComponent from '@/'
  export default {
    name: 'HelloWorld',
    components:myComponent,
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        items:[1,2,3,4,5,6],
        i:1,
        list:['蛋炒饭','西红柿炒番茄','尖椒炒朝天椒',"宫爆鸡丁"],
        choseList:[],
        value:"",
        rdoValue:'男',
        switchStatus:true,
      }
    },
    methods:{
      handleClick(){
        console.log(this.i++);
        this.$http({
          method:'get',
          url:'/lapp/data/04_shopmain/getbanner.php'
        }).then(res=>{
          console.log(res);
        })
      },
      addChose(index){
        this.choseList.push(this.list[index])
      },
      removeChose(index){
        this.choseList.splice(index, 1)
      },
      switchChange(status){
        this.switchStatus = status;
      },
      justNumber(){
//        this.value = this.value.replace(/[^1-9]/g,'');
//        console.log(this.value.replace(/D/g,''));
        console.log(this.value.replace(/[^1-9]/g,''));
      },
      testMessage(){
        this.$notification.show({
          title:'澳门首家线上赌场',
          body:'女装大佬在线发牌',
        });
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
  .item.active{
  @include bgc($dark);
  }
  .item{
  @include bgc($info);
    height: 60px;
  }
  .row{
    height: 100px;
  }


</style>
