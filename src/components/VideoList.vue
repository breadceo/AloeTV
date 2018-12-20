<template>
  <div class="videolist">
    <b-list-group>
      <b-list-group-item class="flex-column videolistitem"
      v-for="(video, index) in videos" v-bind:key="video.id" >
        <video-card v-bind='{ video }' v-bind:index="index" v-bind:key="video.id" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VideoCard from './VideoCard';

export default {
  name: 'VideoList',
  components: { VideoCard },
  computed: mapState({
    videos: state => state.videos.all,
  }),
  created() {
    this.$store.dispatch('videos/getAllVideos');
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
