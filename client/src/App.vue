<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background-image: url('./assets/background.jpg');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:active:hover, .btn-primary:active:focus {
  background-color: #36C617;
  border-color: #36C617;
}
</style>
