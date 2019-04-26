<template>
  <div id="app">
    <div  v-if="authenticated">
      <h1>Welcome to our weather app !</h1>
      <hr>
      <router-link to="/home" class="btn btn-success">
        <a>Home</a>
      </router-link>
      <router-link to="/search" class="btn btn-success">
        <a>Search</a>
      </router-link>
      <hr>
      <div id="nav">
    </div>
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated"/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'nraboy',
        password: 'password'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
