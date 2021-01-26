<template>
  <div class="todo-list">
    <div class="todo-container">
      <TodoItem v-for="(item, i) in todoList" :key="i" :todoItem="item"/>
    </div>
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
  .todo-container {
    display: grid;
    max-width: 800px;
    margin: 2rem auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

</style>
