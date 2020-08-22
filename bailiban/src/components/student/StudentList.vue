<template>
    <div>
        <div>学生列表</div>
        {{ $store.state.name }}
        {{ $store.getters.person }}
        <ul>
            <li v-for="item in $store.state.studentList" :key="item.id">
                姓名：{{ item.name }}
                年龄 ： {{ item.age }}
            </li>
        </ul>
        <ul>
            <li v-for="(item,index) in newStudentList" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapActions,mapGetters} from "vuex";
    export default {
        computed : {
            ...mapGetters(['newStudentList'])
        }
    }
</script>