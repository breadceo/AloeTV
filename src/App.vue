<template>
  <div id="app">
    <div id="header">
    </div>
    <div id="body">
      <router-view/>
    </div>
    <div id="footer">
    </div>
  </div>
</template>

<script>
import store from './store';

export default {
  name: 'App',
  store,
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color:#343a40;
}
</style>

