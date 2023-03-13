<template>
  <router-link to="/">Home</router-link><br>
  <router-link to="/login">Log In</router-link><br>
  <router-link to="/profile">Profile Page</router-link>
  <router-link to="/profile/nil">Profile Page</router-link>
  <router-view></router-view>
  {{$store.state.name}}
  {{$store.state.title}}
  <button v-on:click="changeTitle()">Click</button>
</template>

<script>

export default {
  name: 'App',
  methods:{
    changeTitle(){
      this.$store.commit({
        type: 'changeTitle',
        gender: 'male',
        name: 'mickey'
      })
    }
  }
}
</script>