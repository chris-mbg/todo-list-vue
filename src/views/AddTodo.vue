<template>
    <div class="add-todo">
        <h1>Have another thing to do?</h1>
        <form ref="addTodoForm" @submit.prevent="addNewTodo">
            <div class="content">
                <label>What needs to be done?</label>
                <textarea v-model.trim="todo.content" rows="2" cols="40" placeholder="Describe your task" required></textarea>
            </div>

            <div class="author">
                <label>Who needs to do this?</label>
                <input type="text" v-model.trim="todo.author" placeholder="Name" required>
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
            console.log('In AddTodo.vue:', newTodo);
            this.$store.dispatch('addNewTodoToList', newTodo);
            this.$router.push('/');
        },
        getTime() {
            const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            const now = new Date();
            return new Intl.DateTimeFormat('en-GB', options).format(now);
        }
    }

}
</script>

<style scoped>

    .add-todo {
        background-color: #687864dd;
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
        margin-bottom: 3rem;
    }

    form > div {
        margin: 2rem 3rem;
        flex-basis: 50%;
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
        width: 50%;
        font-size: 1.1rem;
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
    }
    .add {
        background-color: #5085A5;
        font-size: 1.1rem;
        padding: 0.5rem 1rem;
        margin-left: 0.5rem;
    }
    .clear {
        background-color: #8fc1e3;
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
        margin: 0 0.5rem;
    }

    /*     Color scheme
     #687864  dark green
     #31708E  darker blue-ish
     #5085A5  more grey blue-ish
     #8FC1E3  lighter blue
     #F7F9FB  soft light/white-ish
     */

</style>