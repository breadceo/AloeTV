<template>
    <div class="w-50 center-block" v-if="this.show">
        <youtube :video-id="this.videoId" :player-vars=this.opt :player-width=this.window.width/2
        @ready="ready"
        @ended="ended"
        @playing="playing"
        @paused="paused"
        @buffering="buffering"
        @qued="qued"
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
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-block {
  margin-left: auto;
  margin-right: auto;
}
</style>
