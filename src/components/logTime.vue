<template>
    <div class="log">
        <p><span>日期:</span><input type="date" v-model="date"></p>
        <p><span>时间:</span><input type="number" v-model="totaltime"></p>
        <p><span>备注:</span><input type="text" v-model="comment"></p>
        <p class="p fixed">
            <button class="btn-log" @click='save'>保存</button>
            <router-link class="btn-log" to='/time-entries'>取消</router-link>
        </p>
    </div>
</template>
<script>
export default{
    name:'logTime',
    data(){
        return{
            date:'',
            totaltime:0,
            comment:''
        }
    },
    methods:{
        save(){
            const plan = {
              name : 'dmy',
              image : 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
              date : this.date,
              totalTime : this.totaltime,
              comment : this.comment
            };
            this.$store.dispatch('savePlan', plan);
            this.$store.dispatch('addTotalTime', this.totaltime);
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.log p input{
    width: 250px;
    height: 30px;
    line-height: 30px;
}
.log p{
    margin-top: 10px;
}
.btn-log{
    float: left;
    width: 70px;
    height: 30px;
    line-height: 30px;
    background-color: #3b85bf;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border: none;
    margin-left: 15px;
}
.p{
    margin: 0 0 0 20px;
}
</style>