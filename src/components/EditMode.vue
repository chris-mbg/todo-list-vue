<template>
    <div class="edit-mode">
        <form @submit.prevent="editedTodo">
            <div class="content">
                <textarea rows="2" cols="20" v-model="todoItem.content"></textarea>
            </div>
            <div class="author">
                <input type="text" v-model="todoItem.author">
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

    methods: {
        editedTodo(){
            this.todoItem.editModeOn = false;
            this.todoItem.timestamp = this.getTime();
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
    form {
        margin-top: 2rem;
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