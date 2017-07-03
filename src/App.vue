<template>
  <div id="app">
    <div id="main-menu">
      <router-link exact to="/">Home</router-link>
      <router-link exact to="/latest">Latest</router-link>
    </div>
      <router-view></router-view>
    <footer>
      <span>Copyright © {{ new Date().getFullYear() }} Gregor Laan. All rights reserved.</span>
    </footer>
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
    box-shadow: 0 0 5px #ddd;
  }
  #main-menu a {
    color: white;
    padding: 10px 20px;
    display: inline-block;
    text-decoration: none;
    position: relative;
  }
  #main-menu a.active:after {
    content: '';
    background: rgba(0, 0, 0, 0.15);
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  footer {
    text-align: center;
    background: white;
    box-shadow: 0 0 5px #ddd;
    margin: 35px;
    padding: 15px 10px;
  }
</style>
