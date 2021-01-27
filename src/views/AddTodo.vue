<template>
    <div class="add-todo">
        <h1>Have another thing to do?</h1>
        <form ref="addTodoForm" @submit.prevent="addNewTodo">
            <div class="content">
                <label>What needs to be done?</label>
                <textarea v-model.trim="todo.content" rows="3" cols="40" placeholder="Describe your task" required></textarea>
            </div>

            <div class="author">
                <label>Who needs to do this?</label>
                <input type="text" v-model.trim="todo.author" placeholder="Name">
            </div>
            <div class="buttons">
                <button class="clear" @click="clearForm">Clear</button>
                <input type="submit" class="add" value="Add it to the list!">
            </div>
        </form>
    </div>

</template>

<script>
export default {
    data(){
        return {
            todo: {
                content: '',
                author: ''
            }
        }
    },

    methods: {
        addNewTodo(){
            let newTodo = {
                content: this.todo.content,
                author: this.todo.author,
                timestamp: this.getTime(),
                done: false
            };
            this.$store.dispatch('addNewTodoToList', newTodo);
            this.$router.push('/');
        },
        getTime() {
            const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            const now = new Date();
            return new Intl.DateTimeFormat('en-GB', options).format(now);
        },
        clearForm() {
            this.todo.author = '',
            this.todo.content = ''
        }
    }

}
</script>

<style scoped>

    .add-todo {
        background-color: #687864dd;
        border-radius: 5px;
        border: 3px solid  #F7F9FB;
        margin: 1rem;
        padding: 0.5rem;
        max-width: 700px;
        line-height: 1.7rem;
    }
    .add-todo h1{
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        line-height: 1.9rem;
    }

    form > div {
        margin: 1rem;
    }
    .content, .author {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    label {
        font-weight: 600;
    }
    input[type=text], textarea {
        width: 75%;
        font-size: 0.9rem;
    }

    input[type="submit"], button {
        color: #F7F9FB;
        border: 1px solid #F7F9FB;
        border-radius: 5px;

    }
    input[type="submit"]:hover, button:hover{
        background-color: #f7f9fb;
        color: #5085a5;
    }
    .buttons {
        text-align: right;
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap-reverse;
    }
    .add {
        background-color: #5085A5;
        font-size: 1rem;
        padding: 0.3rem 0.5rem;
        margin-left: 1rem;

    }
    .clear {
        background-color: #8fc1e3;
        font-size: 0.8rem;
        height: 1.8rem;

    }

   @media screen and (min-width: 680px){
    .add-todo {
      margin: 2rem auto;
      padding: 1rem;
      font-size: 1.2rem;
    }
    .add-todo h1 {
        font-size: 2rem;
        margin-bottom: 3rem;
    }
    form > div {
        margin: 2rem 3rem;
    }
    input[type=text], textarea {
        width: 50%;
        font-size: 1.1rem;
    }
    .add {
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
        margin-left: 1rem;
    }
    .clear {
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
        height: 2rem;
    }
  }

</style>