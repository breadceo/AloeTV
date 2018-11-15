<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent';
import store from './store';

export default {
  name: 'App',
  store,
  components: { NavbarComponent },
};

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./store/modules/videos'], () => {
    /* eslint-disable global-require */
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newVideo = require('./store/modules/videos').default;
    // swap in the new modules and mutations
    store.hotUpdate({
      modules: {
        videos: newVideo,
      },
    });
    /* eslint-enable global-require */
  });
}

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

