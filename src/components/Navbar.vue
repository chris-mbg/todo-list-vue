<template>
  <div id="navbar">
      <router-link to="/">ToDo list</router-link>
      <router-link to="/add">Add a new ToDo</router-link>
      <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#navbar {
    background-color: #687864;
    text-align: center;
    padding: 2rem;
}

a {
    text-decoration: none;
    color: #F7F9FB;
    padding: 0.5rem 0.8rem;
    margin: 0 1.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s;
}
a:hover{
    color: #8fc1e3;
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