<template>
  <div class="videolist">
    <virtual-list :size="328" :remain="4" :bench="8" :onscroll="handleScroll">
        <video-card v-for="(video, index) of videos" class="videolistitem" v-bind='{ video }'
        v-bind:index="index" v-bind:key="video.id" />
    </virtual-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import virtualList from 'vue-virtual-scroll-list';
import VideoCard from './VideoCard';

export default {
  name: 'VideoList',
  components: { VideoCard, 'virtual-list': virtualList },
  computed: mapState({
    videos: state => state.videos.all,
  }),
  created() {
    this.$store.dispatch('videos/getAllVideos');
  },
  methods: {
    handleScroll: function handleScroll(event, data) {
      console.log(event, data);
    },
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
