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

const moment = require('moment');
const preciseDiff = require('moment-precise-range')(moment);

export default {
  name: 'VideoCard',
  props: { video: Object },
  computed: {
    ...mapState({
    }),
    ago: function ago() {
      const m1 = this.$moment(this.video.snippet.publishedAt);
      const m2 = this.$moment();
      const diff = preciseDiff(m1, m2, { returnObject: true });
      if (diff.years > 0) {
        return `${diff.years} years ago`;
      } else if (diff.months > 0) {
        return `${diff.months} months ago`;
      } else if (diff.days > 0) {
        if (diff.days > 7) {
          return `${diff.days / 7} weeks ago`;
        }
        return `${diff.days} days ago`;
      } else if (diff.hours > 0) {
        return `${diff.hours} hours ago`;
      } else if (diff.minutes > 0) {
        return `${diff.minutes} minutes ago`;
      }
      return `${diff.seconds} seconds ago`;
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
