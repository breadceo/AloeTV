<template>
  <div class="videocard">
    <b-img :src=this.video.snippet.thumbnails.high.url fluid-grow
     thumbnail alt="Responsive image" />
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ this.video.snippet.localized.title }}</h5>
        <small class="text-muted">{{ this.ago }}</small>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// mapActions

export default {
  name: 'VideoCard',
  props: ['video'],
  computed: {
    ...mapState({
    }),
    ago: function ago() {
      return '3 month ago';
    },
  },
  // methods: mapActions(''
  // }),
  data() {
    return {
    };
  },
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
