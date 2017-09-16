<template>
  <div class="container home-page-container">
    <div class="row heading-container">
      <div class="col-xs-12 col-md-2">
        <img class="app-logo" src="../assets/logo.png" alt="Jabber">
      </div>
      <div class="col-xs-12 col-md-10">
        <h1>
          {{ template.heading }}
        </h1>
      </div>
    </div>
    <div class="login-container">
      <login></login>
    </div>
  </div>
</template>

<script>
import template from '../services/constants/home.template.js';
import login from './Login';

export default {
  name: 'home',
  data () {
    return {
      template,
    }
  },
  components: {
    login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-logo {
  width: 95px;
}
</style>
