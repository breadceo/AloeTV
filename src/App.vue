<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent';

export default {
  name: 'App',
  components: { NavbarComponent },
};
</script>

<style>
html {
  background-color:#343a40;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color:#343a40;
}
</style>

