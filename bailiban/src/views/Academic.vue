<template>
  <ol class="community">
    <!--<li v-for="item in questionList" :key="item.questionId">
      {{ item.title }}
    </li>
    -->
    <router-link
     tag="li"
     v-for="item in questionList"
     :key="item.questionId"
     :to = "{name:'question',params:{id:item.questionId}}"
     >
      {{ item.title }}
    </router-link>
  </ol>
</template>
<script>
  export default {
    beforeRouteEnter(to,from,next){ // 当进入这个组件就会触发这个函数，不next就无法进入
      console.log("beforeRouteEnter")
      console.log(this)  //组件还没有加载完成，所以没有this
      next(vm=>{
        console.log(vm)
      })
    },
    data(){
      return {
        questionList : [
          {
            questionId:202001,
            title : "vue中页面内组件和页面级组件的区别？分别放在什么文件夹中？"
          },
          {
            questionId:202002,
            title : "router-link标签如何改成自己想要的标签格式？默认是什么标签？"
          },
          {
            questionId:202003,
            title : "组件之间的传值，父传子，子传父，兄弟之间的传值"
          },
          {
            questionId:202004,
            title : "路由有几种模式？默认是那种模式"
          },
          {
            questionId:202005,
            title : "vue的生命周期？8个钩子函数？（必须背下来）"
          },
        ]
      }
    }
  }
</script>
<style scoped>

  li{
    margin-bottom:20px;
  }
</style>