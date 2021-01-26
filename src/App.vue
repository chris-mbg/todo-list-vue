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

    font-family: 'Quicksand', sans-serif;
    color: #F7F9FB;


    /*
     Color scheme
     #687864  dark green
     #31708E  darker blue-ish
     #5085A5  more grey blue-ish
     #8FC1E3  lighter blue
     #F7F9FB  soft light/white-ish

     */
  }

</style>
