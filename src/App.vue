<template>
  <div id="app">
  <div id="main-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/latest">Latest</router-link>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:700');
  html, body, #app {
    height: 100%;
    background: whitesmoke;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;

  }
  #main-menu {
    background: #fc0;
    margin: 35px;
  }
  #main-menu a {
    color: white;
    padding: 10px 20px;
    display: inline-block;
    text-decoration: none;
  }
</style>
