<template>
  <div class="dashboard-container">
    <div class="row title-bar-container">
      <title-bar></title-bar>
    </div>
    <div class="jabber-chat-container row">
      <div class="col-xs-4">
        <h1>Friends list</h1>
      </div>
      <div class="col-xs-8">
        <h1> Chats </h1>
      </div>
    </div>
  </div>
</template>

<script>
  import titleBar from './TitleBar';

  export default {
    name: 'dashboard',
    components: {
      titleBar
    }
  }
</script>

<style scoped>
  .dashboard-container {
    margin-top: 20px;
  }

  .dashboard-container .title-bar-container {
    padding-bottom: 10px;
    border-bottom: 1px solid #A4A4A4;
  }
</style>
