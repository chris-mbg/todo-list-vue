<template>
  <div class="navbar">
      <router-link to="/">Todo list</router-link>
      <router-link to="/add">Add new Todo</router-link>
      <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .navbar {
        background-color: #687864;
        text-align: center;
        padding: 1rem 0.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    a {
        text-decoration: none;
        color: #F7F9FB;
        text-transform: uppercase;
        font-weight: 600;
        transition: 0.3s;
        margin: 0.2rem;
        padding: 0.3rem;
        border-bottom: 1px solid #F7F9FB;
    }
    a:hover{
        color: #8fc1e3;
        border-color: #8fc1e3;
    }

    @media screen and (min-width: 680px){
        .navbar {
            justify-content: center;
        }
        a {
        padding: 0.5rem 0.8rem;
        margin: 0 1.5rem;
        font-size: 1.5rem;
        border: none;
        }
    }

</style>