<template>
  <div class="login-container">
    <div class="login-form">
      <form name="loginForm" novalidate @submit.prevent="login()">
        <div class="form-group">
          <label> {{ template.label.username }} </label>
          <input
            type="text"
            name="username"
            v-model="username"
            class="form-control"
            :placeholder="template.placeholder.username"
            required>
        </div>
        <div class="form-group">
          <label> {{ template.label.password }} </label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="form-control"
            :placeholder="template.placeholder.password"
            required>
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary form-control">
            {{ template.submit }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import template from '../services/constants/login.template';
import PreLoginDataService from '../services/data/pre-login';

const data = new PreLoginDataService();

export default {
  name: 'login',
  data () {
    return {
      template,
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      data.login(this.username, this.password)
      .then((data) => {
        // Success login
      })
      .catch((error) => {
        // Error login
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading-container {
  margin: 10% 25%;
}

.app-logo {
  width: 95px;
}
</style>
