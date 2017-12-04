<template>
  <div id="app">
    <router-view></router-view>
    <spinner></spinner>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'

import spinner from './components/common/Spinner';

Vue.use(Vuelidate);

export default {
  name: 'app',
  components: {
    spinner
  }
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
}

.btn-primary, .btn-primary:hover, .btn-primary[disabled]:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:active:hover, .btn-primary:active:focus {
  background-color: #36C617;
  border-color: #36C617;
}
</style>
