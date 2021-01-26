import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        content: 'Do Vuex tutorial',
        author: 'Christina',
        timestamp: 'DD/MM/ÅÅ'
      },
      {
        content: 'Clean kitchen',
        author: 'Someone',
        timestamp: 'DD/MM/ÅÅ'
      },
      {
        content: 'Collect package at post office',
        author: 'Someone else',
        timestamp: 'DD/MM/ÅÅ'
      },
      {
        content: 'Buy coffee!',
        author: 'Christina',
        timestamp: 'DD/MM/ÅÅ'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
