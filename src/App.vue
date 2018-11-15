<template>
  <div id="app">
    <div class="sticky-top">
      <navbar-component></navbar-component>
       <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
      >
        <video-player v-if="show"></video-player>
      </transition>
    </div>
    <div id="body">
      <router-view/>
    </div>
    <div id="footer">
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent';
import VideoPlayer from './components/VideoPlayer';
import store from './store';

export default {
  name: 'App',
  store,
  components: { NavbarComponent, VideoPlayer },
  data: function data() {
    return {
      show: false,
    };
  },
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

