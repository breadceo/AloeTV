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
      fullscreenEntered: false,
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
      this.player.mute();
      this.registerFullscreenEvent();
      // this.player.addEventListener('onStateChange', (arg) => {
      //   console.log(this.player, 'onStateChange', arg);
      // });
      setTimeout(() => {
        if (this.lastWatchingTime) {
          this.player.seekTo(this.lastWatchingTime);
        }
        this.player.playVideo();
      });
    },
    ended() {
    },
    error() {
    },
    registerFullscreenEvent() {
      const fullscreenevts = {
        requestFullscreen: 'onfullscreenchange',
        webkitRequestFullscreen: 'onwebkitfullscreenchange',
        mozRequestFullScreen: 'onmozfullscreenchange',
        msRequestFullscreen: 'onmsfullscreenchange',
      };
      for (const ev in fullscreenevts) {
        if (this.player.a[ev]) {
          this.player.a[fullscreenevts[ev]] = () => {
            this.fullscreenEntered = !this.fullscreenEntered;
            if (this.fullscreenEntered) {
              alert('unmute');
              this.player.unMute();
            }
          };
        }
      }
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
        if (this.timerId) {
          clearInterval(this.timerId);
        }
        if (this.player) {
          this.lastWatchingTime = this.player.getCurrentTime();
        }
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
