<template>
    <div class="list">
      <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn-ent">
      创建
      </router-link>
    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
      <hr>
    </div>
    <router-view></router-view>
    <ul>
        <li v-for="(item,index) in plans" class="list-item">
            <img :src='item.imgsrc' alt="头像">
            <p>名字:{{item.name}}</p>
            <p>日期:{{item.date}}</p>
            <p>时间:{{item.totalTime}}</p>
            <p>备注:{{item.comment}}</p>
            <div class="btn-ent red" @click='del(index)'>删除</div>
        </li>   
    </ul>
    </div>
</template>

<script>
export default {
  name: 'timeEntry',
   computed:{
       plans(){
           return this.$store.state.list;
       }
   },
   methods:{
       del(idx){
            // 减去总时间
            this.$store.dispatch('decTotalTime',this.plans[idx].totalTime);
            // 删除该计划
            this.$store.dispatch('deletePlan',idx);
       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-ent{
    display: block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    background-color: #3b85bf;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
}
.red{
    background-color: red;
}
img{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
ul{
    list-style: none;
}
.list-item{
    border: 1px solid #f1f1f1;
}
</style>