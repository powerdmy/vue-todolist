<template>
    <div class="sidebar">
        <p>已有时长</p>
        <p>{{time}}</p>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  computed:{
      time(){
           return this.$store.state.totalTime;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar p{
    line-height: 70px;
    text-align: center;
    font-size: 40px;
}
.sidebar p:nth-child(1){
    border-bottom: 1px solid #f1f1f1;
    background-color: #f1f1f1;
}
.sidebar{
    border: 1px solid #f1f1f1;
    border-radius: 4px
}
</style>