<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button disabled class="btn-sumit">1</Button>
    <Button size="large" @on-click="handleclick2" ref="BUTTON">
      <i-icon slot="icon" type="checkmark"></i-icon>
      hello
    </Button>
    <Button disabled></Button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/button.vue'
export default {

  name: 'app',
  data(){
    return{
      userInfo:'我是provide'
    }
  },
  components: {
    HelloWorld,
    Button
  },
  methods:{
    // 通过emit子组件传递过来的
    handleclick2(data){
      console.log(data);
    }
  },
  mounted() {
    // 对元素或组件的引用
    const btn = this.$refs.BUTTON;
    window.alert(btn.title);

    this.$bus.$on('todo',(data) =>{
      console.log(data);
    })
  },
  provide(){    //通过 provide / inject通信，向下所有的组件都可以拿到
    return{
      app:this
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
