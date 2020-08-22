<template>
  <div class="student">
    <AddStudent/>
    <StudentList></StudentList>
  </div>
</template>
<script>
  // 页面级组件在路由中配置，页面内组件在哪在哪配置
  import AddStudent from "./../components/student/AddStudent.vue";
  // @就代表src，可自己手动配置
  import StudentList from "@/components/student/StudentList";

  export default {
    components: {
      AddStudent : AddStudent,
      StudentList
    }
  }
</script>
