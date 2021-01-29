<template>
    <div class="edit-mode">
        <p>Edit your todo:</p>
        <form @submit.prevent="editedTodo">
            <div class="content">
                <textarea rows="2" cols="20" v-model="todoEdited.content"></textarea>
            </div>
            <div class="author">
                <input type="text" v-model="todoEdited.author">
            </div>
            <div class="button">
                <input type="submit" value="Confirm">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['todoItem'],

    data() {
        return {
            todoEdited: {
                content: this.todoItem.content,
                author: this.todoItem.author,
                done: false,
                timestamp: this.todoItem.timestamp,
                timeString: this.todoItem.timeString,
                editModeOn: true
            }
        }
    },

    methods: {
        editedTodo(){
            console.log('In editedTodo-method', this.todoItem, this.todoEdited);
            this.todoItem.editModeOn = false;
            this.todoEdited.editModeOn = false;
            this.todoEdited.newTimestamp = new Date();
            this.todoEdited.timeString = this.getFormattedTime(this.todoEdited.newTimestamp);
            this.$store.dispatch('editTodoInList', this.todoEdited);
        },
        getFormattedTime(time) {
            const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
            return new Intl.DateTimeFormat('en-GB', options).format(time);
        }
    }
}
</script>

<style scoped>
    form {
        margin-top: 1rem;
    }
    textarea {
        width: 100%;
    }
    .button {
        display: flex;
        justify-content: flex-end;
    }
    input[type="submit"] {
        padding: 0.3rem 0.6rem;
        background-color: #5085A5;
        color: #F7F9FB;
        border: 1px solid #F7F9FB;
        border-radius: 5px;
        margin: 0.3rem 0.5rem;
    }
    input[type="submit"]:hover{
        background-color: #f7f9fb;
        color: #5085a5;
    }

</style>