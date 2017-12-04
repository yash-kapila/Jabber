<template>
  <div class="row title-bar">
    <div class="col-xs-4 static-header">
      <div class="col-xs-3 app-logo-container right">
        <img class="app-logo" src="../../assets/logo.png" alt="Jabber">
      </div>
      <div class="col-xs-9 heading-container">
        <h3 class="heading"> Jabber </h3>
      </div>
    </div>
    <div class="col-xs-8 user-profile-section">
      <div class="col-xs-6 user-profile">
        <div class="col-xs-4 username">
          <h4>Yash</h4>
        </div>
        <div class="col-xs-4">
          <h4> Profile picture </h4>
        </div>
        <div class="col-xs-4">
          <h4>Dropdown menu</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .title-bar .right {
    text-align: right;
  }

  .title-bar .static-header .app-logo-container .app-logo {
    width: 60px;
    border-radius: 15px;
  }

  .title-bar .static-header .heading-container .heading {
    margin-top: 10px;
  }

  .title-bar .user-profile-section .user-profile {
    float: right;
  }
</style>
