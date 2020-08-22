import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:process.env.NODE_EVN !== 'production',
  state: {
    name:'jack',
    aihao:'qwe',
    age:18,
    studentList:[]
  },
  getters:{
    person(state){
      return`姓名：${state.name} 年龄:${state.age}`
    },
    newStudentList(state,getters){
      return state.studentList.map(student=>`姓名：${student.name} 年龄:${student.age} ${getters.person}`)
    },
  },
  mutations: {
    changeStudentList(state,{obj,qianname,qianage}){
      state.studentList.push(obj)
      state.name=qianname
      state.age=qianage
    }
  },
  actions: {
    changeStudentList({commit},payload){
      setTimeout(()=>{
        commit('changeStudentList',payload)
      },3000)
    }
  },
  modules: {
  }
})
