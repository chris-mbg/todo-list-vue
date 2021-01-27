<template>
  <div class="todo-item" v-bind:class="{done: todoItem.done}">
    <div class="content">
      <p>{{ todoItem.content}}</p><span v-show="todoItem.done">Done!</span>
    </div>
    <div class="details">
      <p class="author">{{ todoItem.author}}</p>
      <p class="timestamp">{{ todoItem.timestamp}}</p>
    </div>
    <div class="buttons">
      <button @click="deleteTodo" class="delete">Delete</button>
      <button @click="moveUp" v-show="!todoItem.done">Move up</button>
      <button @click="moveDown" v-show="!todoItem.done">Move down</button>
      <button @click="taskDone" v-show="!todoItem.done" class="done-button">Task done!</button>
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
    padding: 0.75rem;
    margin: 1rem 0;
  }
  .content {
    font-weight: 600;
    padding-bottom: 0.5rem;
    text-align: center;
    font-size: 1.1rem;
  }
  .done {
    background-color: #6a6e6add;
    border-radius: 10px;
    border: 3px solid #f7f9fb;
    font-size: 0.8rem;
  }
  .done div.content {
    padding: 0;
    margin: 0;
  }
  .done div.content > p{
    text-decoration: line-through;
    display: inline-block;
    font-size: 0.9rem;
  }
  .done span {
    font-style: italic;
    margin-left: 1rem;
    color:#5a8f4d
  }
  .done .buttons {
    justify-content: flex-start;
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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
  }
  button {
    padding: 0.3rem 0.6rem;
    background-color: #5085A5;
    color: #F7F9FB;
    border: 1px solid #F7F9FB;
    border-radius: 5px;
    margin: 0.3rem 0.5rem;
  }
  button:hover{
    background-color: #f7f9fb;
    color: #5085a5;
  }
  .delete {
     background-color: #8fc1e3;
  }
  .done-button {
    margin: 0.3rem 0.5rem 0.3rem auto;
    font-weight: 600;
  }

  @media screen and (min-width: 680px) {
    .todo-item {
      padding: 1rem;
    }

    .todo-item > *{
      margin: 0 0.5rem;
    }
    button {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
    .done .delete {
      padding: 0.3rem 0.6rem;
      font-size: 0.8rem;
      margin: 0;
    }
  }

</style>