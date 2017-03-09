<template>
    <div class="home">
       <h1>任务追踪</h1>
       <p><router-link to='/time-entries'>创建一个任务</router-link></p>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  height: 200px;
  width: 100%;
  background-color: #f6f6f6;
  overflow: hidden;
}
.home h1{
  font-size: 40px;
  font-weight: normal;
  margin-top: 50px;
  margin-left: 30px;
}
.home p {
  color: #5e905f;
  margin-left: 30px;
}
</style>
