<template>
  <div class="container home-page-container">
    <div class="panel-container">
      <div class="row heading-container">
        <div class="col-xs-12 col-md-6 app-logo-container">
          <img class="app-logo" src="../assets/logo.png" alt="Jabber">
        </div>
        <div class="col-xs-12 col-md-6 heading-container">
          <h1>
            {{ template.heading }}
          </h1>
        </div>
      </div>
      <div class="login-container">
        <login></login>
      </div>
      <div class="register-message-container">
        <label class="label-message">
          {{ template.register.label }}
        </label>
        <router-link to="/register" class="redirect-link">
          {{ template.register.link }}
        </router-link>
      </div>
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
.panel-container {
  margin:0 20%;
}

.app-logo-container {
  text-align: right;
}

.app-logo {
  width: 95px;
  border-radius: 20px
}

.register-message-container {
  text-align: center;
  margin-top: 5px;
}

.redirect-link, .redirect-link:hover {
  color: #A12E2E;
}

/*
** Stack logo and heading in mobile views and adjust display accordingly
*/
@media only screen and (max-device-width: 768px) {
  .panel-container {
    margin: 0 auto;
  }

  .app-logo-container, .heading-container {
    text-align: center;
  }
}
</style>
