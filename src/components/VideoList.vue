<template>
  <div class="videolist">
    <RecycleScroller
    class="scroller"
    :items="videos"
    :item-height="340"
    :min-item-height="340">
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
  },
  mounted() {
  },
  methods: {
    ...mapActions('videos', [
      'play',
    ]),
    // handleScroll: function handleScroll(event, data) {
    //   const idx = Math.ceil(data.offset / this.$data.elementHeight);
    //   const videoId = this.videos[idx].id;
    //   if (this.playingId !== videoId) {
    //     this.play(videoId);
    //   }
    // },
  },
  data: function data() {
    return {
      elementHeight: 340,
    };
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
