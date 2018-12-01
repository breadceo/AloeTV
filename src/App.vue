<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <div class="fixed-top">
      <navbar-component></navbar-component>
       <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInUpBig"
        v-on:after-enter="afterEnterTransition"
      >
        <video-player ref="videoPlayer" class="sticky-top"></video-player>
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
  methods: {
    afterEnterTransition: function afterEnterTransition() {
      this.$refs.videoPlayer.play();
    },
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
#body {
  position: relative;
  top: 56px;
}
</style>

