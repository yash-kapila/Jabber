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

  import PostLoginDataService from '../../services/data/post-login';

  const data = new PostLoginDataService();

  export default {
    name: 'dashboard',
    // user prop populated from route
    props: ['user'],
    created: function() {
        console.log(this.user);
        data.getUserProfile(this.user.username)
            .then(() => {
                // success fetch of user profile details
            })
            .catch(() => {
                // error fetching user profile details
            });
    },
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
