<template>
    <div class="edit-mode">
        <p>Edit your todo:</p>
        <form @submit.prevent="editedTodo">
            <div class="content">
                <textarea rows="2" cols="20" v-model="todoEdited.content" :placeholder="placeholderText.content"></textarea>
            </div>
            <div class="author">
                <input type="text" v-model="todoEdited.author" :placeholder="placeholderText.author">
            </div>
            <div class="button">
                <input type="submit" value="Confirm">
            </div>
        </form>
    </div>
</template>

<script>
// Den här komponenten är den som jag har jobbat mest med, och den gav mig en hel del huvudvärk, men också större förståelse för hur Vue fungerar :)

// Komponenten tar emot sitt tillhörande todo-item som en prop från föräldrakomponenten. Jag ville ha med content och author från 'orginal'-todo:n och dessa visas som placeholder i formulär-fälten, och uppdateras när EditMode får en ny prop från föräldrakomponenten TodoItem. Den ändrade informationen (content och/eller author) sparas i variabeln todoEdited. Fyller användaren inte i något men ändå trycker submit så sätts värdet till orginalets. På todoEdited får med sig orginal-todo:ns timestamp, och denna används sedan i /store/index.js för at leta upp rätt item i todoList (array:n) och ändra denna (även tidsstämpeln).

export default {
    props: ['todoItem'],

    data() {
        return {
            placeholderText: {
                content: this.todoItem.content,
                author: this.todoItem.author
            },
            todoEdited: {
                content: '',
                author: '',
            }
        }
    },
    watch: {
        todoItem(newVal) {
            this.placeholderText.content = newVal.content;
            this.placeholderText.author = newVal.author;
        }
    },

    methods: {
        editedTodo(){
            if(!this.todoEdited.content){
                this.todoEdited.content = this.todoItem.content;
            }
            if(!this.todoEdited.author){
                this.todoEdited.author = this.todoItem.author;
            }
            this.todoEdited.timestamp = this.todoItem.timestamp;
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