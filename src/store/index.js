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
    // Om det finns en array med todos i Local Storage hämtas denna innan App skapas, se main.js.
    initialiseStore: (state) => {
      if(localStorage.getItem('todos')){
        state.todoList = JSON.parse(localStorage.getItem('todos'));
        return state.todoList;
      }
    },

    // För varje ändring i array:n, eller item i array:n, uppdateras även Local Storage.
    // Använder timestamp för att hitta rätt todo i array:n.

    addNewTodo: (state, payload) => {
      state.todoList.unshift(payload);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },

    deleteTodo: (state, payload) => {
      state.todoList =
        state.todoList.filter(item => item.timestamp !== payload.timestamp);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
      return state.todoList;
    },
    taskDone: (state,payload) => {
      payload.done = true;
      const indexOfItem = state.todoList.findIndex(item => item.timestamp === payload.timestamp);
      if(indexOfItem < 0 || indexOfItem >= state.todoList.length){
        return;
      }
      const doneItem = state.todoList.splice(indexOfItem, 1)[0];
      state.todoList.push(doneItem);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    moveUp: (state,payload) => {
      const indexOfItem = state.todoList.findIndex(item => item.timestamp === payload.timestamp);
      if(indexOfItem < 1 || indexOfItem >= state.todoList.length){
        return;
      }
      const temp = state.todoList[indexOfItem - 1];
      Vue.set(state.todoList, indexOfItem - 1, payload);
      Vue.set(state.todoList, indexOfItem, temp);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    moveDown: (state, payload) => {
      const indexOfItem = state.todoList.findIndex(item => item.timestamp === payload.timestamp);
      if(indexOfItem < 0 || indexOfItem >= state.todoList.length - 1){
        return;
      }
      const temp = state.todoList[indexOfItem + 1];
      Vue.set(state.todoList, indexOfItem + 1, payload);
      Vue.set(state.todoList, indexOfItem, temp);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    changeEditMode: (state, payload) => {
      const indexOfItem = state.todoList.findIndex(item => item.timestamp === payload.timestamp);
      if(indexOfItem < 0 || indexOfItem >= state.todoList.length){
        return;
      }
      state.todoList[indexOfItem].editModeOn = !state.todoList[indexOfItem].editModeOn;
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },

    // För den editerade todo:n används den tidigare timestamp till att hitta rätt todo i arrayn, därefter sätts en ny timestamp.
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
    // Använder actions, efter att ha sett Net Ninjas Vuex-tutorial, där han rekommenderar att trots att man inte utför ngt som är asynkront är det 'good practice' att ändå ta vägen via actions.

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
    },
    toggleEditMode: (context, payload) => {
      context.commit('changeEditMode', payload);
    }
  },

  modules: {
  }
})
