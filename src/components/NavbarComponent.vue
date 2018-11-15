<template>
<div>
    <b-navbar variant="dark" type="dark" v-bind:sticky="sticky">
        <b-navbar-brand tag="h1" class="mb-0">{{appName}}</b-navbar-brand>
    </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      appName: 'AloeTV',
      sticky: true,
    };
  },
};
</script>


<style scoped>

</style>

