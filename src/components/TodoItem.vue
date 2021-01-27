<template>
  <div class="todo-item">
    <div class="content">
      <p>{{ todoItem.content}}</p>
    </div>
    <div class="details">
      <p class="author">{{ todoItem.author}}</p>
      <p class="timestamp">{{ todoItem.timestamp}}</p>
    </div>
    <div class="buttons">
      <button @click="deleteTodo" class="delete">Delete</button>
      <button @click="moveUp">Move up</button>
      <button @click="moveDown">Move down</button>
      <button @click="taskDone">Task done!</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todoItem'],

  methods: {
    deleteTodo() {
      this.$store.dispatch('removeTodoFromList', this.todoItem);
    },
    taskDone() {
      this.$store.dispatch('changeToDone', this.todoItem);
    },
    moveUp() {
      this.$store.dispatch('moveItemUp', this.todoItem);
      console.log('In todoItem:', this.todoItem);
    },
    moveDown() {
      this.$store.dispatch('moveItemDown', this.todoItem);
    }
  }

}
</script>

<style scoped>
  .todo-item {
    background-color: #687864dd;
    border-radius: 10px;
    border: 3px solid #f7f9fb;
    padding: 1rem;
    margin: 1rem 0;
  }

  .todo-item > *{
    margin: 0.7rem;
  }
  .content {
    font-weight: 600;
    padding-bottom: 0.5rem;
    text-align: center;
    font-size: 1.1rem;
  }
  .details {
    border-top: 0.5px dashed #f7f9fb;
    display: flex;
    justify-content: space-between;
  }
  .author{
    font-style: italic;
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
  }
  button {
    padding: 0.2rem 0.6rem;
    background-color: #5085A5;
    color: #F7F9FB;
    border: 1px solid #F7F9FB;
    border-radius: 5px;
    margin: 0 0.5rem;
  }
  button:hover{
    background-color: #f7f9fb;
    color: #5085a5;
  }
  .delete {
     background-color: #8fc1e3;
  }

  /*
     Color scheme
     #687864  dark green
     #31708E  darker blue-ish
     #5085A5  more grey blue-ish
     #8FC1E3  lighter blue
     #F7F9FB  soft light/white-ish

     */

</style>