<template>
  <router-link to="/">Home</router-link><br>
  <router-link to="/login">Log In</router-link><br>
  <router-link to="/profile">Profile Page</router-link>
  <router-link to="/profile/nil">Profile Page</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>