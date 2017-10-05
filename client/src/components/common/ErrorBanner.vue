<template>
  <div class="error-banner-container clearfix" v-if="message">
    <div class="error-banner">
      <div class="col-xs-11 message">
        {{ message }}
      </div>
      <div class="col-xs-1 close-banner">
        <span class="close-icon glyphicon glyphicon-remove" @click="closeBanner"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'errorBanner',
    props: ['message'],
    methods: {
      closeBanner() {
        this.$emit('closeBanner');
      }
    }
  }
</script>

<style scoped>
  .error-banner-container {
    padding: 20px 0;
    background-color: #DF0101;
    color: #FFF;
  }

  .error-banner-container .error-banner .message {
    float: left;
    padding: 0 0 0 40px;
  }

  .error-banner-container .error-banner .close-banner {
    float: right;
    padding: 0 40px 0 0;
  }

  .error-banner-container .error-banner .close-banner .close-icon {
    cursor: pointer;
  }
</style>
