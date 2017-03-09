<template>
  <div id="app">
    <div class="nav fixed">
         <h2>计划面板</h2>
         <router-link to='/home' class='btn'>首页</router-link>
         <router-link to='/time-entries' class='btn'>计划列表</router-link>
    </div>
    <div class="container fixed">
        <div class="col-3">
            <sidebar></sidebar>  
        </div>   
        <div class="col-6">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/sidebar.vue'
export default {
  name: 'app',
  components: { 'sidebar': Sidebar }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  font-family: "微软雅黑";
}
a{
  text-decoration: none;
  color: #666666;
}
.container{
  margin: 10px 10px 0 10px;
}
.col-3{
  width: 30%;
  float: left;
}
.col-6{
  width: 60%;
  float: right;
}
.fixed:after{
  clear:both;
  height:0;
  content:'';
  display:block;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 80%;
  margin: 0 auto;
  min-width: 960px;
}
.nav h2{
  float:left;
  color: #666666;
  margin-left: 18px;
}
.btn{
  float:left;
  margin-left: 15px;
}
.nav{
  line-height: 60px;
  background-color: #f8f8f8;
}
</style>
