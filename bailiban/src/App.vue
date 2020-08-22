<template>
  <div id="app">
  
    <div class="header">
      <div class="logo" @click="handelClick">百里半</div>
      <ul class="nav">
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/learn">课程学习</router-link>
        <router-link tag="li" to="student">学员展示</router-link>
        <router-link tag="li" :to="{path:'/about'}">关于</router-link>
        <router-link tag="li" to="/community">社区</router-link>
      </ul>
    </div>
    <router-view class="view"/>
  </div>
</template>

<style scoped>
.header{
  display:flex;
  justify-content:space-between;
  padding:0 200px;
  background-color:#099872;
  line-height:70px;
  padding-bottom:2px;
  color:#fff;
}
.nav{
  display:flex;
  margin:0;
  padding:0;
}
.nav li{
  margin:0 20px;
  cursor:pointer;
  list-style:none;
}
.view{
  padding:50px 200px;
}
.active{
  color:yellow;
  font-weight:bold;
}
</style>
<script>
  export default {
    data(){
      return {}
    },
    methods : {
      handelClick(){
        this.$router.push('/home')
      }
    }
  }
</script>