<template>
  <div class="community">
     <ul class="nav">
        <router-link tag="li" to="/community/academic">学术讨论</router-link>
        <router-link tag="li" to="/community/download">资源下载</router-link>
        <router-link tag="li" to="/community/personal">个人中心</router-link>
      </ul>
      <router-view class="view"/>
  </div>
</template>
<style scoped>
.nav{
  display:flex;
  margin:0;
  padding:0;
}
.nav li{
  margin-right:30px;
  cursor:pointer;
  padding:10px 20px;
  list-style:none;
}
.view{
  padding-top:20px;
  padding-left:20px;
}
.active-exact{
  background-color:#099872;
  color:#fff;
}
</style>
