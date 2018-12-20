<template>
  <div class="videolist">
    <virtual-list :size="elementHeight" :remain="4" :bench="8"
    :onscroll="handleScroll" :debounce="300">
        <video-card v-for="(video, index) of videos" class="videolistitem" v-bind='{ video }'
        v-bind:index="index" v-bind:key="video.id" />
    </virtual-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import virtualList from 'vue-virtual-scroll-list';
import VideoCard from './VideoCard';

export default {
  name: 'VideoList',
  components: { VideoCard, 'virtual-list': virtualList },
  computed: mapState({
    videos: state => state.videos.all,
    playingId: state => state.videos.playingId,
  }),
  created() {
    this.$store.dispatch('videos/getAllVideos');
  },
  methods: {
    ...mapActions('videos', [
      'play',
    ]),
    handleScroll: function handleScroll(event, data) {
      const idx = Math.ceil(data.offset / this.$data.elementHeight);
      const videoId = this.videos[idx].id;
      if (this.playingId !== videoId) {
        this.play(videoId);
      }
    },
  },
  data: function data() {
    return {
      elementHeight: 328,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videolistitem {
  background-color:#343a40;
  padding: 4px;
}
</style>
