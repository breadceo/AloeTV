<template>
    <div class="w-50 center-block">
        <youtube video-id="6xJlnXOE_2o" :player-width=this.window.width/2></youtube>
    </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'VideoPlayer',
  data: function data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  // computed: mapState({
  //  videos: state => state.videos.all,
  // }),,
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
