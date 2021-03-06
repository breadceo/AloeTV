<template>
  <div class="videolist">
    <RecycleScroller
    class="scroller"
    :items="videos"
    :item-height="elementHeight"
    :min-item-height="elementHeight"
    :buffer="10">
      <div slot-scope='{ item, index }'>
        <video-card class="videolistitem" :video=item />
      </div>
    </RecycleScroller>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { RecycleScroller } from 'vue-virtual-scroller';
import VideoCard from './VideoCard';

export default {
  name: 'VideoList',
  components: { VideoCard, RecycleScroller },
  computed: mapState({
    videos: state => state.videos.all,
    playingId: state => state.videos.playingId,
  }),
  created() {
    this.$store.dispatch('videos/getAllVideos');
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.$store.dispatch('logs/pageview', 'listvideo');
    this.$store.dispatch('videos/getAllVideos');
  },
  methods: {
    ...mapActions('videos', [
      'play',
    ]),
    getYOffsetDiff: function getYOffsetDiff() {
      if (this.$data.lastPageYOffset === undefined) {
        this.$data.lastPageYOffset = window.pageYOffset;
        return 2;
      }
      const diff = window.pageYOffset - this.$data.lastPageYOffset;
      this.$data.lastPageYOffset = window.pageYOffset;
      return diff;
    },
    handleScroll() {
      const diff = this.getYOffsetDiff();
      if (Math.abs(diff) <= 1) {
        const sign = diff > 0 ? -1 : 1;
        const buffer = this.$data.elementHeight / 10;
        const offset = sign * buffer;
        const idx = Math.ceil((window.scrollY + offset) / this.$data.elementHeight);
        const videoId = this.videos[idx].id;
        if (videoId !== this.reqPlayingId && this.playingId !== videoId) {
          this.reqPlayingId = videoId;
          this.$store.dispatch('logs/stopPlayingByAuto', this.playingId);
          this.play({ id: videoId, auto: true });
        }
      }
    },
  },
  data() {
    return {
      elementHeight: 360,
      lastPageYOffset: undefined,
      reqPlayingId: undefined,
    };
  },
  watch: {
    playingId(_, cur) {
      this.reqPlayingId = cur;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroller {
  height: 100%;
}
.videolistitem {
  background-color:#343a40;
  padding: 4px;
}
</style>
