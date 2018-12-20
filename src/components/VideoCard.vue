<template>
  <div class="videocard" v-on:click.stop="play(video.id)">
    <b-img v-if="this.$store.state.videos.playingId !== video.id"
    :src=this.video.snippet.thumbnails.high.url
    :width=this.size.width
    :height=this.size.imgHeight
    alt="Responsive image" />
    <div v-if="this.$store.state.videos.playingId === video.id"
    :width=this.size.width
    :height=this.size.height>
      <youtube
      :video-id="video.id"
      :player-vars=this.opt
      :player-width=this.size.width
      :player-height=this.size.height
      @ready="ready"
      @ended="ended"
      @playing="playing"
      @error="error"
      ></youtube>
    </div>
    <div class="d-flex w-100 justify-content-between">
        <h6 class="videocardtitle">{{ this.video.snippet.localized.title }}</h6>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'VideoCard',
  props: { video: Object },
  data() {
    return {
      size: {
        width: 0,
        height: 0,
        imgHeight: 0,
      },
      opt: {
        // autoplay: 1, // 모바일 브라우저 (iOS) 에서 동작 x
        playsinline: 1,
      },
      player: undefined,
      timerId: undefined,
      watchingTimeAcc: 0,
      lastWatchingTime: 0,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  computed: {
    ...mapState({
      playingId: state => state.videos.playingId,
    }),
  },
  methods: {
    ...mapActions('videos', [
      'play',
    ]),
    ready(event) {
      this.player = event.target;
      setTimeout(() => {
        this.player.seekTo(this.lastWatchingTime);
        this.player.playVideo();
      });
    },
    ended() {
    },
    error() {
    },
    playing() {
      this.timerId = setInterval(() => {
        this.watchingTimeAcc += 500;
      }, 500);
    },
    handleResize() {
      this.size.width = this.$el.clientWidth;
      const ratio = 360 / 480;
      this.size.height = this.size.width * ratio;
      this.size.imgHeight = this.size.height + 6.250;
    },
  },
  watch: {
    playingId(prev) {
      if (prev === this.video.id) {
        if (this.timerId !== undefined) {
          clearInterval(this.timerId);
        }
        this.lastWatchingTime = this.player.getCurrentTime();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videocardtitle {
  padding: 5px 0px 0px 5px;
}
</style>
