<template>
  <div class="card-wrapper col-md-3">
    <div class="card">
      <img class="card-img-top" :src="movie.image.medium" alt="movie cover">
      <div class="card-body">
        <h5 class="card-title">{{ movie.name }}</h5>
        <a :href="movie.url" class="btn btn-primary" target="_blank">Show more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    movie: Object
  }
}
</script>

<style scoped>
.card-wrapper {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
