<template>
  <div class="todo-list">
      <TodoItem v-for="(item, i) in todoList" :key="i" :todoItem="item"/>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue'

export default {
  components: {
    TodoItem
  },

  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  }
}
</script>

<style scoped>
  .todo-list {
    margin: 0.5rem;
    max-width: 600px;
  }

   @media screen and (min-width: 500px){
    .todo-list {
      margin: 2rem auto;
    }
  }
</style>
