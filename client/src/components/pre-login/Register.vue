<template>
  <div class="register-container">
    <error-banner :message="errorMessage" @closeBanner="closeBanner"></error-banner>
    <div class="register-form">
      <form name="registerForm" novalidate @submit.prevent="register()">
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
        <div class="form-group email-container" :class="{'has-error': $v.email.$error}">
          <label>
            {{ template.label.email }}
          </label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="form-control"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
            :placeholder="template.placeholder.email">
            <span class="validation-message" v-if="$v.email.$error && !$v.email.required">
              {{ template.error.email }}
            </span>
            <span class="validation-message" v-if="$v.email.$error && !$v.email.email">
              {{ template.error.valid_email }}
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
    <div class="login-message-container">
      <label class="label-message">
        {{ template.login.label }}
      </label>
      <button class="btn btn-link switch-view-link" @click="switchView">
        {{ template.login.link }}
      </button>
    </div>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  import login from './Login';
  import errorBanner from '../common/ErrorBanner';
  import template from '../../services/constants/register.template';
  import PreLoginDataService from '../../services/data/pre-login';
  import SpinnerService from '../../services/helpers/spinner';
  import CommonDataService from '../../services/data/common';

  const commonDataService = new CommonDataService();
  const data = new PreLoginDataService();

  export default {
    name: 'register',
    // Data properties be used in Login component
    data () {
      return {
        template,
        username: '',
        password: '',
        email: '',
        errorMessage: '',
      };
    },
    // Vuelidate validations object
    validations: {
      username: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      }
    },
    // Methods used in Login component
    methods: {
      register() {
        SpinnerService.showSpinner();
        data.register(this.username, this.password, this.email)
          .then((data) => {
            // If successful registration, log user in & set validity of token true.
            commonDataService.setTokenValidity(true);
            SpinnerService.hideSpinner();
            this.$router.push('/dashboard');
          })
          .catch((error) => {
            // Error while registering
            this.errorMessage = error.data.code;
            SpinnerService.hideSpinner();
          });
      },
      switchView() {
        this.$emit('switchView', login);
      },
      closeBanner() {
        this.errorMessage = '';
      }
    },
    // Outside components used in Register component
    components: {
      errorBanner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register-container {
    margin-top: 40px;
  }

  .register-container .register-form {
    background-color: #fff;
  }

  form .username-container {
    padding: 30px 40px 0;
  }

  form .email-container {
    padding: 0 40px;
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

  .register-container .login-message-container {
    text-align: center;
    margin-top: 5px;
  }

  .register-container .login-message-container .switch-view-link {
    color: #A12E2E;
    padding: 0;
  }
</style>
