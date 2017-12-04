<template>
  <div class="container home-page-container">
    <div class="panel-container">
      <div class="row heading-container">
        <div class="col-xs-12 col-md-6 app-logo-container">
          <img class="app-logo" src="../assets/logo.png" alt="Jabber">
        </div>
        <div class="col-xs-12 col-md-6 heading-container">
          <h1> Jabber </h1>
        </div>
      </div>
      <div class="component-container">
        <component :is="currentView" @switchView="switchView"></component>
      </div>
    </div>
  </div>
</template>

<script>
import login from './pre-login/Login';
import register from './pre-login/Register';

export default {
  name: 'home',
  data () {
    return {
      currentView: login,
    }
  },
  components: {
    login,
    register
  },
  methods: {
    switchView(newView) {
      this.currentView = newView;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-page-container {
    margin-top: 60px;
  }

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
