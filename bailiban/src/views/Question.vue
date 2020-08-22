<template>
  <div class="question">
    问题:{{ question }}
    <button @click="handleClick" v-if="nextFlag">下一个问题</button>
    <br>
    解析:{{ jiexi }}

  </div>
</template>
<script>
  export default {
    data(){
      return {
        question:"",
        jiexi : "",
        questionList : [
          {
            questionId:202001,
            title : "vue中页面内组件和页面级组件的区别？分别放在什么文件夹中？",
            xiangqing : "qwerrrtttyt"
          },
          {
            questionId:202002,
            title : "router-link标签如何改成自己想要的标签格式？默认是什么标签？",
            xiangqing : "asdfgfgrsyrty"
          },
          {
            questionId:202003,
            title : "组件之间的传值，父传子，子传父，兄弟之间的传值",
            xiangqing : "qerscdjldfiou"
          },
          {
            questionId:202004,
            title : "路由有几种模式？默认是那种模式",
            xiangqing : "qerscdjldfiou"
          },
          {
            questionId:202005,
            title : "vue的生命周期？8个钩子函数？（必须背下来）",
            xiangqing : "qerscdjldfiou"
          },
        ],
        questionId:'',
        nextFlag:"true"
      }
    },
    beforeMount(){
        const id = this.$route.params.id;
        // console.log(id)
        // const index = this.questionList.findIndex((item)=>{
        //     return item.questionId == id;
        // })
        // console.log(index)
        // this.question = this.questionList[index].title;
        // this.jiexi = this.questionList[index].xiangqing;
        // this.questionId = id;
        this.getData(id)
    },
    methods:{
        handleClick(){
            this.$router.push({
                name :'question',
                params : {
                    id : ++this.questionId
                }
            })
        },
        getData(id){
            const index = this.questionList.findIndex((item)=>{
                return item.questionId == id;
            })
            
            if(index !== -1){
                this.question = this.questionList[index].title;
                this.jiexi = this.questionList[index].xiangqing;
                this.questionId = id;
            }else{
                this.question = "没有更多题目了，请添加题目";
                this.jiexi = "";
                this.nextFlag = false;
            }
        }
    },
    beforeRouteUpdate(to,from,next){//组件进行重新加载，数据发生改变进行重新渲染
        const id = to.params.id;
        // const index = this.questionList.findIndex((item)=>{
        //     return item.questionId == id;
        // })
        // this.question = this.questionList[index].title;
        // this.jiexi = this.questionList[index].xiangqing;
        // this.questionId = id;
        this.getData(id)
        next()
    }
  }
</script>
