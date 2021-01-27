<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
export default {
  components: {
    Navbar
  }

}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

  body {
    background: url('./assets/img/forest-landscape.jpg');
    margin: 0;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    color: #F7F9FB;
  }
  * {
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
  }

</style>
