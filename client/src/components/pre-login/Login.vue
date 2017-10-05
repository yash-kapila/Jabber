<template>
  <div class="login-container">
    <error-banner :message="errorMessage" @closeBanner="closeBanner"></error-banner>
    <div class="login-form">
      <form name="loginForm" novalidate @submit.prevent="login()">
        <div class="form-group username-container" :class="{'has-error': $v.username.$error}">
          <label>
            {{ template.label.username }}
          </label>
          <input
            type="text"
            name="username"
            v-model="username"
            class="form-control"
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
            :placeholder="template.placeholder.username">
            <span class="validation-message" v-if="$v.username.$error">
              {{ template.error.username }}
            </span>
        </div>
        <div class="form-group password-container" :class="{'has-error': $v.password.$error}">
          <label>
            {{ template.label.password }}
          </label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="form-control"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :placeholder="template.placeholder.password">
            <span class="validation-message" v-if="$v.password.$error">
              {{ template.error.password }}
            </span>
        </div>
        <div class="submit-btn-container">
          <button
            type="submit"
            :disabled="$v.username.$invalid || $v.password.$invalid"
            class="btn btn-primary submit-btn">
            {{ template.submit }}
          </button>
        </div>
      </form>
    </div>
    <div class="register-message-container">
      <label class="label-message">
        {{ template.register.label }}
      </label>
      <button class="btn btn-link switch-view-link" @click="switchView">
        {{ template.register.link }}
      </button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import register from './Register';
import errorBanner from '../common/ErrorBanner';
import template from '../../services/constants/login.template';
import PreLoginDataService from '../../services/data/pre-login';
import SpinnerService from '../../services/helpers/spinner';

const data = new PreLoginDataService();

export default {
  name: 'login',
  // Data properties used in Login component
  data () {
    return {
      template,
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  // Methods used in Login component
  methods: {
    login() {
      SpinnerService.showSpinner();
      data.login(this.username, this.password)
      .then((data) => {
        // Success login
        console.log(data);
      })
      .catch((error) => {
        // Error while logging in
        this.errorMessage = error.data.code;
      })
      .finally(() => {
        SpinnerService.hideSpinner();
      });
    },
    switchView() {
      this.$emit('switchView', register);
    },
    closeBanner() {
      this.errorMessage = '';
    }
  },
  // Vuelidate validations object
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  // Outside components used in Login component
  components: {
    errorBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-container {
    margin-top: 40px;
  }

  .login-container .login-form {
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

  form .has-error label, form .has-error .validation-message {
    color: #A94442;
  }

  .login-container .register-message-container {
    text-align: center;
    margin-top: 5px;
  }

  .login-container .register-message-container .switch-view-link {
    color: #A12E2E;
    padding: 0;
  }

</style>
