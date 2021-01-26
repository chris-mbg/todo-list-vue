<template>
    <div class="add-todo">
        <h1>Have another thing to do?</h1>
        <form ref="addTodoForm" @submit.prevent="addNewTodo">
            <div>
                <label>What needs to be done?</label>
                <input type="text" v-model.trim="todo.content" placeholder="Describe your task" required>
            </div>

            <div>
                <label>Who needs to do this?</label>
                <input type="text" v-model.trim="todo.author" placeholder="Name" required>
            </div>
            <div>
                <label>Time...</label>
                <input type="text" placeholder="Time..." >
            </div>
            <div class="buttons">
                <button class="clear">Clear</button>
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
                author: '',
                timestamp: ''
            }
        }
    },

    methods: {
        addNewTodo(){
            let newTodo = {
                content: this.todo.content,
                author: this.todo.author,
                timestamp: this.todo.timestamp
            };
            console.log('In AddTodo.vue:', newTodo);
            this.$store.dispatch('addNewTodoToList', newTodo);
            this.$router.push('/');
        }
    }

}
</script>

<style scoped>

    .add-todo {
        background-color: #687864cc;
        border-radius: 5px;
        border: 3px solid  #F7F9FB;
        margin: 2rem auto;
        padding: 1rem;
        max-width: 700px;
        font-size: 1.2rem;
        line-height: 1.7rem;
    }
    .add-todo h1{
        text-align: center;
        font-size: 2rem;
    }
    form > div {
        margin: 2rem;
    }
    label {
        margin-right: 2rem;
    }
    input[type=text] {
        width: 50%;
        font-size: 1.1rem;
    }

    input[type="submit"], button {
        font-family: 'Quicksand', sans-serif;
        color: #F7F9FB;
        border: 1px solid #F7F9FB;
        border-radius: 5px;
        margin: 0 0.5rem;
    }
    input[type="submit"]:hover, button:hover{
        background-color: #f7f9fb;
        color: #5085a5;
    }
    .buttons {
        text-align: right;
    }
    .add {
        background-color: #5085A5;
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
    }
    .clear {
        background-color: #8fc1e3;
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
    }

    /*     Color scheme
     #687864  dark green
     #31708E  darker blue-ish
     #5085A5  more grey blue-ish
     #8FC1E3  lighter blue
     #F7F9FB  soft light/white-ish
     */

</style>