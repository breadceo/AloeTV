<template>
  <div class="videocard" v-on:click.stop="play(video.id)">
    <b-img :src=this.video.snippet.thumbnails.high.url fluid-grow
     thumbnail alt="Responsive image" />
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
  computed: {
    ...mapState({
    }),
  },
  methods: {
    ...mapActions('videos', [
      'play',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videocardtitle {
  padding: 5px 0px 0px 5px;
}
</style>
