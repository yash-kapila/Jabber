<template>
  <div class="spinner" v-if="spinner">
    <div class="spinner-icon"></div>
  </div>
</template>

<script>
import SpinnerService from '../services/helpers/spinner';

export default {
  name: 'spinner',
  data() {
    return {
      spinner: false,
    };
  },
  created() {
    /*
    ** SpinnerService methods showSpinner & hideSpinner bound to
    ** Spinner component's method. This way, through the way of SpinnerService,
    ** other components needing spinner will be able to access it.
    */
    SpinnerService.showSpinner = this.showSpinner.bind();
    SpinnerService.hideSpinner = this.hideSpinner.bind();
  },
  methods: {
    showSpinner() {
      this.spinner = true;
    },
    hideSpinner() {
      this.spinner = false;
    },
  },
}
</script>

<style scoped>
/*
** spinner.gif downloaded from https://loading.io/.
*/
.spinner-icon {
    background: url('../assets/spinner.gif') center center no-repeat;
    height: 100%;
    z-index: 20;
}

.spinner {
    background: #e9e9e9;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.5;
}
</style>
