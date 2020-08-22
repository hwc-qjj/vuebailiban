<template>
    <div>
        <div>添加学生：{{ name }}</div>
        <div>
            姓名：
            <input type="text" v-model="name">
        </div>
        <div>
            年龄
            <input type="text" v-model="age">
        </div>
        {{ name }}
        <div>
            姓名：
            <button @click="handleClick">添加</button>
        </div>
        <hr>
        {{ name }}
    </div>
</template>
<script>
    console.log(this)
    import {mapState , mapGetters, mapMutations, mapActions } from 'vuex';
    // console.log(mapState(['name']))
    export default {
        data(){
            return {
                name : '',
                age : ''
            }
        },
        methods : {
            // ...mapMutations(['changeStudentList']),
            ...mapActions(['changeStudentList']),
            handleClick(){
                // this.$store.state.name = "rose"  //双向数据流，现在玩一玩，后期肯定不能用
                var obj = {
                    id : +new Date(),
                    name : this.name,
                    age : this.age
                }
                console.log(obj)
               
                this.changeStudentList({obj,qianname:"百里半",qianage:"20"})
            }
            // 

        },
        computed : {
        }
    }
</script>