<template>
  <div class="videolist">
    <b-list-group>
      <b-list-group-item variant="light"
      class="flex-column w-75 center-block">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
      </b-list-group-item>
      <b-list-group-item variant="light"
      class="flex-column w-75 center-block">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
      </b-list-group-item>
      <b-list-group-item variant="light"
      class="flex-column w-75 center-block">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
      </b-list-group-item>
      <b-list-group-item variant="light"
      class="flex-column w-75 center-block">
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'VideoList',
  data() {
    return {
    };
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
