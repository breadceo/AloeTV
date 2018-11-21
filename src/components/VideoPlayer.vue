<template>
    <div v-if="this.show">
        <youtube :video-id="this.videoId"
        :player-vars=this.opt
        :player-width=this.window.width
        :player-height=this.window.height
        @ready="ready"
        @ended="ended"
        @playing="playing"
        @error="error"
    ></youtube>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VideoPlayer',
  data: function data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      opt: {
        autoplay: 1,
      },
    };
  },
  computed: mapState({
    videoId: state => state.videos.playingId,
    show: state => state.videos.playingId !== '',
  }),
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      // 0.5625 = 16/9
      this.window.height = this.window.width * 0.5625;
    },
    ready(event) {
      this.player = event.target;
    },
    ended() {
    },
    error() {
    },
    playing() {
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
