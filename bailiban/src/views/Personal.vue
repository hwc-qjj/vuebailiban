
<template>
  <div class="community">
    个人中心
    <hr>
    姓名：<input type="text" v-model="name">
    <button @click="handleClick">确定</button>
  </div>
</template>
<script>  
  export default {
    beforeRouteLeave(to,from,next){
      if(this.name){
        var flag = window.confirm("信息没有填写完成，确定要离开吗？")
        if(flag){
          this.name = "";
          next()
        }
      }else{
        next()
      }
    },
    data(){
      return {
        name : ""
      }
    },
    methods : {
      handleClick(){
        this.name = ""
      }
    }
  }
</script>