<template>
  <div class="todo-item">
    <div class="content">{{ todoItem.content}}</div>
    <div class="author">{{ todoItem.author}}</div>
    <div class="timestamp">{{ todoItem.timestamp}}</div>
    <div class="delete">
            <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todoItem']

}
</script>

<style scoped>
  .todo-item {
    background-color: #687864dd;
    border-radius: 10px;
    border: 3px solid #f7f9fb;
    padding: 2rem;
  }

  .todo-item > *{
    margin: 1rem;
  }

  .author{
    font-style: italic;
  }
  button {
    font-family: 'Quicksand', sans-serif;
    padding: 0.2rem 0.6rem;
    background-color: #5085A5;
    color: #F7F9FB;
    border: 1px solid #F7F9FB;
    border-radius: 5px;
  }
  button:hover{
    background-color: #f7f9fb;
    color: #5085a5;
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