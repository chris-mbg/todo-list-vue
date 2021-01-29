import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        content: 'Do Vuex tutorial',
        author: 'Christina',
        timestamp: new Date('January 22 2021 12:50:00'),
        timeString: 'Fri, 22 Jan, 12:50',
        done: false,
        editModeOn: false
      },
      {
        content: 'Clean kitchen',
        author: 'Someone',
        timestamp: new Date('January 22 2021 10:25:00'),
        timeString: 'Fri, 22 Jan, 10:25',
        done: false,
        editModeOn: false
      },
      {
        content: 'Collect package at post office',
        author: 'Someone else',
        timestamp: new Date('January 21 2021 14:04:00'),
        timeString: 'Thu, 21 Jan, 14:04',
        done: false,
        editModeOn: false
      },
      {
        content: 'Buy coffee filters',
        author: 'Christina',
        timestamp: new Date('January 21 2021 11:34:00'),
        timeString: 'Thu, 21 Jan, 11:34',
        done: false,
        editModeOn: false
      }
    ]
  },

  mutations: {
    initialiseStore: (state) => {
      if(localStorage.getItem('todos')){
        state.todoList = JSON.parse(localStorage.getItem('todos'));
        return state.todoList;
      }
    },
    addNewTodo: (state, payload) => {
      state.todoList.unshift(payload);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },

    deleteTodo: (state, payload) => {
      state.todoList =
        state.todoList.filter(item => item.content !== payload.content);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
      return state.todoList;
    },
    taskDone: (state,payload) => {
      payload.done = true;
      const indexOfItem = state.todoList.findIndex(item => item.content === payload.content);
      if(indexOfItem < 0 || indexOfItem >= state.todoList.length){
        return;
      }
      const doneItem = state.todoList.splice(indexOfItem, 1)[0];
      state.todoList.push(doneItem);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    moveUp: (state,payload) => {
      const indexOfItem = state.todoList.findIndex(item => item.content === payload.content);
      if(indexOfItem < 1 || indexOfItem >= state.todoList.length){
        return;
      }
      const temp = state.todoList[indexOfItem - 1];
      Vue.set(state.todoList, indexOfItem - 1, payload);
      Vue.set(state.todoList, indexOfItem, temp);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    moveDown: (state, payload) => {
      const indexOfItem = state.todoList.findIndex(item => item.content === payload.content);
      if(indexOfItem < 0 || indexOfItem >= state.todoList.length - 1){
        return;
      }
      const temp = state.todoList[indexOfItem + 1];
      Vue.set(state.todoList, indexOfItem + 1, payload);
      Vue.set(state.todoList, indexOfItem, temp);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    editTodo: (state, payload) => {
      const indexOfItem = state.todoList.findIndex(item => item.timestamp === payload.timestamp);
      if(indexOfItem < 0 || indexOfItem >= state.todoList.length){
        return;
      }
      state.todoList[indexOfItem].content = payload.content;
      state.todoList[indexOfItem].author = payload.author;
      state.todoList[indexOfItem].timestamp = payload.newTimestamp;
      state.todoList[indexOfItem].timeString = payload.timeString;
      state.todoList[indexOfItem].editModeOn = false;
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    }

  },

  actions: {
    addNewTodoToList: (context, payload) => {
      context.commit('addNewTodo', payload);
    },
    removeTodoFromList: (context, payload) => {
      context.commit('deleteTodo', payload);
    },
    changeToDone: (context, payload) => {
      context.commit('taskDone', payload);
    },
    moveItemUp: (context, payload) => {
      context.commit('moveUp', payload);
    },
    moveItemDown: (context, payload) => {
      context.commit('moveDown', payload);
    },
    editTodoInList: (context, payload) => {
      context.commit('editTodo', payload);
    }
  },

  modules: {
  }
})
