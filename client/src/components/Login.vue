<template>
  <div class="login-container">
    <div class="login-form">
      <form name="loginForm" novalidate @submit.prevent="login()">
        <div class="form-group username-container">
          <label> {{ template.label.username }} </label>
          <input
            type="text"
            name="username"
            v-model="username"
            class="form-control"
            :placeholder="template.placeholder.username"
            required>
        </div>
        <div class="form-group password-container">
          <label> {{ template.label.password }} </label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="form-control"
            :placeholder="template.placeholder.password"
            required>
        </div>
        <div class="submit-btn-container">
          <button
            type="submit"
            class="btn btn-primary submit-btn">
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
import SpinnerService from '../services/helpers/spinner';

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
      SpinnerService.showSpinner();
      data.login(this.username, this.password)
      .then((data) => {
        // Success login
      })
      .catch((error) => {
        // Error login
      })
      .finally(() => {
        SpinnerService.hideSpinner();        
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  margin-top: 40px;
  background-color: #fff;
}

form .username-container {
  padding: 30px 40px 0;
}

form .password-container {
  padding: 0 40px;
}

form .submit-btn-container {
  margin-top: 30px;
}

form .submit-btn-container .submit-btn {
  border-radius: 0;
  width: 100%;
  padding: 15px 0;
}
</style>
